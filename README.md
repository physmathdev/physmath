# physmath — Cydia repository

<p align="center"><img src="CydiaIcon.png" width="240" alt="physmath repository icon"></p>

Personal Cydia / Sileo repository hosted on GitHub Pages. The icon is a little
tribute to Tesla and Einstein — science and curiosity.

## Add the source

Source URL:

```
https://physmathdev.github.io/physmath/
```

Add it in Cydia, Sileo, Zebra or Installer.

## Packages

| Package | Version | Description |
| --- | --- | --- |
| [TubeReplacer](depictions/tubereplacer/) | 2.0.1-3 | iOS 10 TubeReplacer: fixes Google sign-in (AppleSpell), signed-in home feed and subscriptions parsing. |
| [AnimeGO](depictions/animego/) | 1.0-2 | AnimeGO client for iOS 7+, repackaged from the signed IPA. Installs to `/Applications`. |

## Apps (IPA)

| App | Version | Requirements | Download |
| --- | --- | --- | --- |
| AnimeGO | 1.0-2 | iOS 7.0+ | [Cydia package](depictions/animego/) `me.animego.ios` · [IPA](ipa/AnimeGO-ios7-signed.ipa) · [OTA install](itms-services://?action=download-manifest&url=https://physmathdev.github.io/physmath/ipa/manifest.plist) |

The same app is available as a Cydia package (`me.animego.ios`), which installs
`AnimeGO.app` into `/Applications` and runs `uicache` after installation. The
IPA is kept for sideloading and OTA installation. The app bundle is unsigned,
so launching it requires AppSync (AppSync Unified) on the device, as usual for
repackaged IPAs.

## Adding or updating packages

1. Drop the `.deb` into `debs/`.
2. Regenerate the indexes:

   ```sh
   python3 update_repo.py
   ```

3. Commit and push:

   ```sh
   git add -A
   git commit -m "Update packages"
   git push
   ```

`update_repo.py` reads the `control` file from each `.deb` and writes
`Packages`, `Packages.gz`, `Packages.bz2` and `Release` with the correct
sizes and checksums. Only the Python 3 standard library is required.

## Layout

```
├── CydiaIcon.png        # repo icon shown in Cydia/Sileo
├── Packages             # package index (generated)
├── Packages.gz          # compressed index (generated)
├── Packages.bz2         # compressed index (generated)
├── Release              # repo metadata (generated)
├── debs/                # .deb packages
├── depictions/          # package description pages
├── ipa/                 # .ipa apps and OTA manifest
├── index.html           # web landing page with "Add to ..." links
└── update_repo.py       # index generator
```

The repository is unsigned. Cydia/Sileo will show a warning about a missing
signature, which is normal for a personal source; packages still install.
