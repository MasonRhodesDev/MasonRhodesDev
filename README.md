<div align="center">

# hey, I'm Mason 👋

TypeScript at [LifeMD](https://lifemd.com) during the day. Outside of work I build Linux desktop tooling, mostly for Hyprland.

![Rust](https://img.shields.io/badge/Rust-CE422B?style=flat&logo=rust&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=cplusplus&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnubash&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![Arch](https://img.shields.io/badge/Arch_%28btw%29-1793D1?style=flat&logo=archlinux&logoColor=white)
![Hyprland](https://img.shields.io/badge/Hyprland-58E1FF?style=flat&logo=hyprland&logoColor=black)

<sub>release/pushed data updates daily via [GitHub Actions](.github/workflows/update-readme.yml) ·
📫 [mrhodesdev@gmail.com](mailto:mrhodesdev@gmail.com)</sub>

</div>

<!-- PROJECTS:START -->
## 🖥️ The Hyprland Stuff

- [**hyprstate**](https://github.com/MasonRhodesDev/hyprstate) — Session state machine — lid events, monitor profiles, lock, suspend, USB wake. Built b/c laptop docking on Wayland is a lie <sub>[v2.1.1](https://github.com/MasonRhodesDev/hyprstate/releases/latest) · pushed today</sub>
- [**hyprland-voice-dictation**](https://github.com/MasonRhodesDev/hyprland-voice-dictation) — Offline push-to-talk dictation (Parakeet ASR, all local) that types into any focused window <sub>[v0.4.0](https://github.com/MasonRhodesDev/hyprland-voice-dictation/releases/latest) · pushed 3d ago</sub>
- [**hyprnotice**](https://github.com/MasonRhodesDev/hyprnotice) — Notification daemon with an inbox that keeps the action buttons alive after the popup's gone <sub>pushed May 2026</sub>
- [**sni-watcher**](https://github.com/MasonRhodesDev/sni-watcher) — Standalone tray watcher so icons survive bar restarts (looking at you, Electron) <sub>[v0.1.1](https://github.com/MasonRhodesDev/sni-watcher/releases/latest) · pushed 5d ago</sub>
- [**waybar-workspace-buttons**](https://github.com/MasonRhodesDev/waybar-workspace-buttons) — Event-driven workspace buttons for Waybar — no polling, no shelling out <sub>pushed today</sub>
- [**linux-multi-theme-toggle**](https://github.com/MasonRhodesDev/linux-multi-theme-toggle) — Whole-desktop light/dark switching with Material You colors, fast enough that you don't watch it happen <sub>[v0.1.0](https://github.com/MasonRhodesDev/linux-multi-theme-toggle/releases/latest) · pushed today</sub>
- [**logind-idle-control**](https://github.com/MasonRhodesDev/logind-idle-control) — Per-session idle inhibitors over D-Bus <sub>[v0.2.0](https://github.com/MasonRhodesDev/logind-idle-control/releases/latest) · pushed 5d ago</sub>

## 🎮 The Couch Gaming Stuff

- [**deck-tenant**](https://github.com/MasonRhodesDev/deck-tenant) — Per-Steam-account homes for non-Steam apps on a shared Steam Deck. No more reading my Discord messages <sub>[v0.2.0](https://github.com/MasonRhodesDev/deck-tenant/releases/latest) · pushed 5d ago</sub>
- [**couchcord**](https://github.com/MasonRhodesDev/couchcord) — Controller-driven Discord voice control + overlay for gamescope sessions — join, leave, see who's talking, without alt-tabbing out of the game <sub>[v0.1.0](https://github.com/MasonRhodesDev/couchcord/releases/latest) · pushed 5d ago</sub>
- [**greetd_game_mode**](https://github.com/MasonRhodesDev/greetd_game_mode) — Hit the Guide button at the login screen, get Big Picture <sub>[v0.1.1](https://github.com/MasonRhodesDev/greetd_game_mode/releases/latest) · pushed today</sub>
- [**steam-notes**](https://github.com/MasonRhodesDev/steam-notes) — Field notes from digging around Steam client internals so you don't have to <sub>pushed 3d ago</sub>

## 📦 The Glue

- [**arch-repo**](https://github.com/MasonRhodesDev/arch-repo) — Self-hosted pacman repo served from GitHub Pages — where the tools above ship from <sub>pushed 5d ago</sub>
- [**packaging-workflows**](https://github.com/MasonRhodesDev/packaging-workflows) — Reusable GH Actions for Arch + COPR packaging <sub>pushed 5d ago</sub>
- [**greetd-config**](https://github.com/MasonRhodesDev/greetd-config) — greetd + regreet login manager setup — multi-distro, symlink installer, optional game mode <sub>pushed 5d ago</sub>
- [**dotfiles**](https://github.com/MasonRhodesDev/dotfiles) — Holding all of the above together <sub>pushed today</sub>
<!-- PROJECTS:END -->

## ⬇️ Run It Yourself

Most of the above ships as actual packages. Arch users can add [my pacman repo](https://github.com/MasonRhodesDev/arch-repo):

```ini
[mason]
SigLevel = Optional TrustAll
Server = https://masonrhodesdev.github.io/arch-repo/x86_64
```

then `sudo pacman -S hyprstate sni-watcher ...` like anything else. Works on Steam Deck too, via [deck-tenant](https://github.com/MasonRhodesDev/deck-tenant)'s rootless pacman root.

## 🚀 Recent Releases

<!-- RELEASES:START -->
- [**hyprstate** v2.1.1](https://github.com/MasonRhodesDev/hyprstate/releases/tag/v2.1.1) — today
- [**hyprland-voice-dictation** v0.4.0](https://github.com/MasonRhodesDev/hyprland-voice-dictation/releases/tag/v0.4.0) — 3d ago
- [**greetd_game_mode** v0.1.1](https://github.com/MasonRhodesDev/greetd_game_mode/releases/tag/v0.1.1) — 5d ago
- [**linux-multi-theme-toggle** v0.1.0](https://github.com/MasonRhodesDev/linux-multi-theme-toggle/releases/tag/v0.1.0) — 5d ago
- [**couchcord** v0.1.0](https://github.com/MasonRhodesDev/couchcord/releases/tag/v0.1.0) — 5d ago
<!-- RELEASES:END -->

---

<sub>everything else: [the full pile](https://github.com/MasonRhodesDev?tab=repositories)</sub>
