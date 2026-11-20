# Publishing `kinetic-ui-icons` (npm & pub.dev)

This guide covers building and publishing the **Kinetic Icons** multi-framework library (`kinetic-ui-icons` on npm and `kinetic_icons` on pub.dev) from `neerxj789/kinetic-icons`.

## Library Structure

```text
src/lib/
├── core/
│   ├── engine.ts         # Zero-dependency continuous-curvature SVG engine
│   ├── icons.ts          # 178 individually exported, tree-shakeable IconDefinitions
│   └── index.ts          # Core entrypoint (`kinetic-ui-icons` & `kinetic-ui-icons/core`)
├── react/
│   └── index.tsx         # 178 forwardRef React/Next.js Server Components (`kinetic-ui-icons/react`)
├── web/
│   └── index.ts          # `<kinetic-icon>` Web Component + `createIcons()` (`kinetic-ui-icons/web`)
└── flutter/
    └── generateDart.ts   # Generates `kinetic_icons.dart` for `flutter_svg`
```

---

## 1. Publish to npm (`kinetic-ui-icons`)

### Windows PowerShell (Run from your repo root)

```powershell
# 1. Create a clean publish folder outside the web app
New-Item -ItemType Directory -Force -Path ..\kinetic-ui-icons-npm\src

# 2. Copy library files, config, README, and LICENSE
Copy-Item -Recurse -Force src\lib ..\kinetic-ui-icons-npm\src\
Copy-Item -Force tsup.lib.config.ts, tsconfig.lib.json, README.md, LICENSE ..\kinetic-ui-icons-npm\
Copy-Item -Force package.lib.json ..\kinetic-ui-icons-npm\package.json

# 3. Enter the publish folder, install build tools, and build
Set-Location ..\kinetic-ui-icons-npm
npm install
npm run build
npm run build:flutter

# 4. Verify the tarball contents before publishing
npm pack --dry-run

# 5. Sign in and publish
npm login
npm publish --access public
```

### macOS / Linux

```bash
mkdir -p ../kinetic-ui-icons-npm/src
cp -r src/lib ../kinetic-ui-icons-npm/src/
cp tsup.lib.config.ts tsconfig.lib.json README.md LICENSE ../kinetic-ui-icons-npm/
cp package.lib.json ../kinetic-ui-icons-npm/package.json
cd ../kinetic-ui-icons-npm

npm install
npm run build
npm run build:flutter
npm pack --dry-run
npm login
npm publish --access public
```

---

## 2. Publish to pub.dev (`kinetic_icons` for Flutter)

After running `npm run build:flutter` above (which generates `flutter/lib/kinetic_icons.dart`):

```powershell
# 1. Create the Flutter package folder
New-Item -ItemType Directory -Force -Path ..\kinetic_icons_flutter\lib
Copy-Item -Force ..\kinetic-ui-icons-npm\flutter\lib\kinetic_icons.dart ..\kinetic_icons_flutter\lib\
Copy-Item -Force LICENSE ..\kinetic_icons_flutter\LICENSE
Set-Location ..\kinetic_icons_flutter
```

Create `pubspec.yaml`, `CHANGELOG.md`, and a short `README.md` in `kinetic_icons_flutter/`, then validate and publish:

```powershell
flutter pub get
dart analyze
dart pub publish --dry-run
dart pub publish
```

---

## 3. Automatic Updates via GitHub Actions (Recommended)

This repository includes `.github/workflows/publish-npm.yml` to automatically build and publish `kinetic-ui-icons` to npm—no local folder copying required.

### One-Time Setup
1. On **npmjs.com**, go to **Access Tokens → Generate New Token → Granular Access Token**, grant **Read and write** access to `kinetic-ui-icons`, and copy the token.
2. On **GitHub** (`neerxj789/kinetic-icons`), go to **Settings → Secrets and variables → Actions → New repository secret**:
   - Name: `NPM_TOKEN`
   - Secret: paste your npm token.

### Publishing Any Future Update
1. Push your updated icons to GitHub.
2. On GitHub, go to **Releases → Draft a new release**, enter a new tag such as `v1.1.0` (or `v1.0.1`), and click **Publish release**.
   - The workflow automatically syncs the version from your tag, builds `dist/` and `flutter/lib/kinetic_icons.dart`, and publishes `kinetic-ui-icons@1.1.0` to npm with Verified Provenance.
   - You can also trigger a publish manually anytime from the **Actions → Publish kinetic-ui-icons to npm → Run workflow** button.
