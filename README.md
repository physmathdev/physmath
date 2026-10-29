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
| `dev.preloading.tubereplacer` (TubeReplacer) | 2.0.1-2 | iOS 10 TubeReplacer: fixes Google sign-in (AppleSpell), signed-in home feed and subscriptions parsing. |

## Apps (IPA)

| App | Version | Requirements | Download |
| --- | --- | --- | --- |
| AnimeGO | 1.0 | iOS 7.0+ | [IPA](ipa/AnimeGO-ios7-signed.ipa) · [OTA install](itms-services://?action=download-manifest&url=https://physmathdev.github.io/physmath/ipa/manifest.plist) |

The IPA is not a Cydia package, so it does not appear in `Packages`. Use the
**Install (OTA)** link from Safari on the device, or download the `.ipa` and
sideload it. OTA installation only works if the signature is valid for your
device.

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
├── ipa/                 # .ipa apps and OTA manifest
├── index.html           # web landing page with "Add to ..." links
└── update_repo.py       # index generator
```

The repository is unsigned. Cydia/Sileo will show a warning about a missing
signature, which is normal for a personal source; packages still install.
