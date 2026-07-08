#!/usr/bin/env node
// Regenerates the dynamic sections of README.md from the GitHub API.
// Runs daily via .github/workflows/update-readme.yml; locally:
//   GITHUB_TOKEN=$(gh auth token) node scripts/update-readme.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const OWNER = "MasonRhodesDev";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error("GITHUB_TOKEN is required");
  process.exit(1);
}

const HEADERS = {
  authorization: `Bearer ${TOKEN}`,
  accept: "application/vnd.github+json",
  "user-agent": `${OWNER}-readme-updater`,
};

async function api(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers: HEADERS });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${path}: ${res.status} ${await res.text()}`);
  return res.json();
}

const DAY = 86400000;
function ago(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / DAY);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 14) return `${days}d ago`;
  if (days < 60) return `${Math.floor(days / 7)}w ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function splice(readme, marker, content) {
  const start = `<!-- ${marker}:START -->`;
  const end = `<!-- ${marker}:END -->`;
  const a = readme.indexOf(start);
  const b = readme.indexOf(end);
  if (a === -1 || b === -1) throw new Error(`markers for ${marker} not found`);
  return readme.slice(0, a + start.length) + "\n" + content + "\n" + readme.slice(b);
}

// --- gather ---------------------------------------------------------------
const config = JSON.parse(readFileSync(join(ROOT, "data", "projects.json"), "utf8"));
const featured = config.sections.flatMap((s) => s.repos.map((r) => r.name));

const allRepos = await api(`/users/${OWNER}/repos?per_page=100&type=owner&sort=pushed`);

const repoInfo = new Map(allRepos.map((r) => [r.name, r]));
const missing = featured.filter((n) => !repoInfo.has(n));
if (missing.length) throw new Error(`featured repos not found: ${missing.join(", ")}`);

// latest release per repo that plausibly has one (pushed within a year)
const releases = new Map();
await Promise.all(
  allRepos
    .filter((r) => !r.fork && !r.private && Date.now() - new Date(r.pushed_at) < 365 * DAY)
    .map(async (r) => {
      const rel = await api(`/repos/${OWNER}/${r.name}/releases/latest`);
      if (rel) releases.set(r.name, rel);
    }),
);

// --- render ---------------------------------------------------------------
const projects = config.sections
  .map((section) => {
    const rows = section.repos
      .map(({ name, blurb }) => {
        const r = repoInfo.get(name);
        const rel = releases.get(name);
        const meta = [
          rel ? `[${rel.tag_name}](https://github.com/${OWNER}/${name}/releases/latest)` : null,
          `pushed ${ago(r.pushed_at)}`,
        ]
          .filter(Boolean)
          .join(" · ");
        return `- [**${name}**](https://github.com/${OWNER}/${name}): ${blurb} <sub>${meta}</sub>`;
      })
      .join("\n");
    return `## ${section.title}\n\n${rows}`;
  })
  .join("\n\n");

const recent = [...releases.entries()]
  .map(([name, rel]) => ({ name, rel }))
  .sort((a, b) => new Date(b.rel.published_at) - new Date(a.rel.published_at))
  .slice(0, 5)
  .map(
    ({ name, rel }) =>
      `- [**${name}** ${rel.tag_name}](${rel.html_url}) <sub>${ago(rel.published_at)}</sub>`,
  )
  .join("\n");

let readme = readFileSync(join(ROOT, "README.md"), "utf8");
readme = splice(readme, "PROJECTS", projects);
readme = splice(readme, "RELEASES", recent || "_nothing tagged lately_");
writeFileSync(join(ROOT, "README.md"), readme);
console.log("README.md updated");
