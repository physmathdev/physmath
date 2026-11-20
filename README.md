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
| [oldtube](depictions/oldtube/) | 1.6.11 | Full YouTube client for **iOS 7–10**, built on the classic YouTube app 2.0.0, with sign-in, home feed, subscriptions, search, playlists, comments, up to 1080p, a light/dark theme and a pre-cropped rounded icon. Unchanged from 1.6.10 apart from the version. Bundles the LightKit sign-in browser. Watch history does not work yet. |
| [oldtube (iOS 6)](depictions/oldtube/) | 1.6.11 | Same full client for **iOS 6**, built on the classic YouTube app 1.4.0, with the skeuomorphic in-player gear, a pre-cropped rounded icon, the LightKit browser bundled and the dark theme finished. 1.6.11 splits the old iOS 5–6 package in two, so each system gets a build that actually runs on it. Conflicts with the other oldtube packages; install the one that matches your iOS version. |
| [oldtube (iOS 5)](depictions/oldtube/) | 1.6.11 | New **iOS 5** build. The classic YouTube 1.4.0 app was linked against the iOS 6 SDK and crashed on launch on iOS 5; its executable is now patched (flat-namespace imports, a stack-based entry point, non-PIE) and shipped with a small compatibility shim that supplies the iOS 6 runtime pieces iOS 5 lacks (dispatch/ARC, subscripting, NSUUID, the AVAudioSession constants). YouTube 1.4.0 launches and runs on iOS 5.1.1, with the same oldtube tweak, dark theme and skeuomorphic gear as iOS 6. Conflicts with the other oldtube packages. |

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
├── index.html           # web landing page with "Add to ..." links
└── update_repo.py       # index generator
```

The repository is unsigned. Cydia/Sileo will show a warning about a missing
signature, which is normal for a personal source; packages still install.
