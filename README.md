# 1stapp

A mobile **to-do app**, built with [Expo](https://expo.dev) + React Native + TypeScript.

Currently at the **hello-world stage**: the app builds, bundles and renders on device, and
proves out the toolchain end to end. The to-do list itself comes next.

---

## Requirements

| Tool | Why |
| --- | --- |
| Node.js 20+ | Runs the project |
| Expo CLI (via `npx`) | Dev server, bundler |
| Android Studio + SDK + ADB | Emulator / device deploys, native builds |
| Java/JDK 17+ | Gradle, only needed for local native builds |
| Expo Go app on your phone | Fastest way to preview on a real device |

## Getting started

```bash
npm install
npx expo start
```

Then pick one:

| Target | How |
| --- | --- |
| **Phone (easiest)** | Install **Expo Go**, scan the QR code in the terminal |
| **Android emulator** | Press `a` in the terminal (needs a running AVD) |
| **Browser** | Press `w`, or run `npm run web` |

### Useful commands

```bash
npm start           # dev server
npm run android     # dev server + open Android emulator
npm run web         # dev server + open browser
npm run typecheck   # TypeScript check, no build
npm run doctor      # diagnose dependency / config problems
```

## Project structure

```
1stapp/
├── App.tsx                      # root component
├── index.ts                     # Expo entry point
├── app.json                     # app name, icon, Android package, splash
├── src/
│   ├── config.ts                # app name/version + environment info
│   ├── theme.ts                 # design tokens (colors, spacing, radius, fonts)
│   └── screens/
│       └── HomeScreen.tsx       # the hello-world screen
└── assets/                      # icons and splash images
```

Two conventions worth keeping as the app grows:

- **Never hard-code colors or spacing** — use the tokens in `src/theme.ts`.
- **One screen per file** under `src/screens/`, with reusable pieces pulled into `src/components/`.

## Editing

Metro does fast refresh: save a file and the app updates on device within a second.
To force a full reload, shake the device and tap **Reload** (or press `r` in the terminal).

## Roadmap

- [x] Project scaffold + runs on device
- [ ] Add a task (text input + submit)
- [ ] Complete / uncomplete a task
- [ ] Delete a task (swipe or long-press)
- [ ] Persist tasks locally so they survive a restart
- [ ] Filter: all / active / done
- [ ] Build a release APK

## Notes

- `node_modules/`, `.expo/`, `dist/` and the generated `/android` and `/ios` folders are git-ignored.
- This project uses **Expo-managed workflow**. Run `npx expo prebuild` only if you need to touch native code.
