<div align="center">

# hey, I'm Mason 👋

TypeScript at [LifeMD](https://lifemd.com) during the day. Outside of work I build Linux desktop tooling, mostly for Hyprland.

![Rust](https://img.shields.io/badge/Rust-CE422B?style=flat&logo=rust&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=cplusplus&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnubash&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![Arch](https://img.shields.io/badge/Arch-1793D1?style=flat&logo=archlinux&logoColor=white)
![Hyprland](https://img.shields.io/badge/Hyprland-58E1FF?style=flat&logo=hyprland&logoColor=black)

<sub>release/pushed data updates daily via [GitHub Actions](.github/workflows/update-readme.yml) ·
📫 [mrhodesdev@gmail.com](mailto:mrhodesdev@gmail.com)</sub>

</div>

<!-- PROJECTS:START -->
## 🖥️ The Hyprland Stuff

- [**hypr-DE**](https://github.com/MasonRhodesDev/hypr-DE): Opinionated Hyprland desktop — packaged session, theming, and defaults <sub>[v0.2.1](https://github.com/MasonRhodesDev/hypr-DE/releases/latest) · pushed today</sub>
- [**vigil**](https://github.com/MasonRhodesDev/vigil): Compositor-less greetd greeter and matching session lock <sub>[v0.2.5](https://github.com/MasonRhodesDev/vigil/releases/latest) · pushed today</sub>
- [**hyprstate**](https://github.com/MasonRhodesDev/hyprstate): Session state machine for lid events, monitor profiles, lock, suspend, and USB wake <sub>[v2.2.0](https://github.com/MasonRhodesDev/hyprstate/releases/latest) · pushed today</sub>
- [**hyprstate-gui**](https://github.com/MasonRhodesDev/hyprstate-gui): Slint Displays and power configurator for hyprstate <sub>[v0.3.0](https://github.com/MasonRhodesDev/hyprstate-gui/releases/latest) · pushed today</sub>
- [**linux-multi-theme-toggle**](https://github.com/MasonRhodesDev/linux-multi-theme-toggle): Whole-desktop light/dark switching with Material You colors <sub>[v0.2.1](https://github.com/MasonRhodesDev/linux-multi-theme-toggle/releases/latest) · pushed today</sub>
- [**hyprland-voice-dictation**](https://github.com/MasonRhodesDev/hyprland-voice-dictation): Offline push-to-talk dictation (Parakeet ASR, all local) that types into any focused window <sub>[v0.5.1](https://github.com/MasonRhodesDev/hyprland-voice-dictation/releases/latest) · pushed today</sub>
- [**sni-watcher**](https://github.com/MasonRhodesDev/sni-watcher): Standalone tray watcher so icons survive bar restarts <sub>[v0.1.1](https://github.com/MasonRhodesDev/sni-watcher/releases/latest) · pushed today</sub>
- [**waybar-workspace-buttons**](https://github.com/MasonRhodesDev/waybar-workspace-buttons): Event-driven workspace buttons for Waybar, no polling or shelling out <sub>[v1.0.1](https://github.com/MasonRhodesDev/waybar-workspace-buttons/releases/latest) · pushed today</sub>
- [**logind-idle-control**](https://github.com/MasonRhodesDev/logind-idle-control): Per-session idle inhibitors over D-Bus <sub>[v0.2.1](https://github.com/MasonRhodesDev/logind-idle-control/releases/latest) · pushed today</sub>

## 🎮 The Couch Gaming Stuff

- [**deck-tenant**](https://github.com/MasonRhodesDev/deck-tenant): Per-Steam-account homes for non-Steam apps on a shared Steam Deck <sub>[v0.3.1](https://github.com/MasonRhodesDev/deck-tenant/releases/latest) · pushed today</sub>
- [**couchcord**](https://github.com/MasonRhodesDev/couchcord): Controller-driven Discord voice control and overlay for gamescope sessions. Join, leave, and see who's talking without leaving the game <sub>[v0.1.0](https://github.com/MasonRhodesDev/couchcord/releases/latest) · pushed today</sub>
- [**greetd_game_mode**](https://github.com/MasonRhodesDev/greetd_game_mode): Hit the Guide button at the login screen, get Big Picture <sub>[v0.2.0](https://github.com/MasonRhodesDev/greetd_game_mode/releases/latest) · pushed today</sub>
- [**steam-notes**](https://github.com/MasonRhodesDev/steam-notes): Field notes on Steam client internals <sub>pushed 5w ago</sub>

## 📦 The Glue

- [**arch-repo**](https://github.com/MasonRhodesDev/arch-repo): Signed pacman repo on GitHub Pages, where the tools above ship from <sub>pushed today</sub>
- [**packaging-workflows**](https://github.com/MasonRhodesDev/packaging-workflows): Reusable GH Actions for Arch + COPR packaging <sub>pushed today</sub>
- [**monitor-profiles**](https://github.com/MasonRhodesDev/monitor-profiles): Neutral monitor layout profiles shared by session and login <sub>[v0.1.0](https://github.com/MasonRhodesDev/monitor-profiles/releases/latest) · pushed today</sub>
- [**slint-kit**](https://github.com/MasonRhodesDev/slint-kit): Shared Slint theme and LMTT Material You tokens <sub>[v0.2.0](https://github.com/MasonRhodesDev/slint-kit/releases/latest) · pushed today</sub>
- [**dotfiles**](https://github.com/MasonRhodesDev/dotfiles): The config tying everything together <sub>pushed today</sub>
<!-- PROJECTS:END -->

## ⬇️ Run It Yourself

Most of the above ships as packages. Arch users can add [my signed pacman repo](https://github.com/MasonRhodesDev/arch-repo).

Import and locally trust the repo key (`41450EEF8CEE7AB8CD3896221284404A6B70485C`):

```bash
curl -fsSLo /tmp/mason-repo.asc \
  https://masonrhodesdev.github.io/arch-repo/mason-repo.asc
test "$(gpg --show-keys --with-colons /tmp/mason-repo.asc |
  awk -F: '$1 == "fpr" { print $10; exit }')" = \
  "41450EEF8CEE7AB8CD3896221284404A6B70485C"
sudo pacman-key --add /tmp/mason-repo.asc
sudo pacman-key --lsign-key 41450EEF8CEE7AB8CD3896221284404A6B70485C
```

Then add to `/etc/pacman.conf`:

```ini
[mason]
SigLevel = Required DatabaseRequired
Server = https://masonrhodesdev.github.io/arch-repo/x86_64
```

`sudo pacman -Syu && sudo pacman -S hypr-de` gets the desktop. Individual tools (`hyprstate`, `vigil`, `sni-watcher`, ...) install the same way. Works on Steam Deck too, via [deck-tenant](https://github.com/MasonRhodesDev/deck-tenant)'s rootless pacman root.

## 🚀 Recent Releases

<!-- RELEASES:START -->
- [**hyprstate-gui** v0.3.0](https://github.com/MasonRhodesDev/hyprstate-gui/releases/tag/v0.3.0) <sub>today</sub>
- [**hyprstate** v2.2.0](https://github.com/MasonRhodesDev/hyprstate/releases/tag/v2.2.0) <sub>today</sub>
- [**vigil** v0.2.5](https://github.com/MasonRhodesDev/vigil/releases/tag/v0.2.5) <sub>today</sub>
- [**linux-multi-theme-toggle** v0.2.1](https://github.com/MasonRhodesDev/linux-multi-theme-toggle/releases/tag/v0.2.1) <sub>today</sub>
- [**hypr-DE** v0.2.1](https://github.com/MasonRhodesDev/hypr-DE/releases/tag/v0.2.1) <sub>today</sub>
<!-- RELEASES:END -->

---

<sub>everything else: [all repositories](https://github.com/MasonRhodesDev?tab=repositories)</sub>
