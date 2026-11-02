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
| [oldtube](depictions/oldtube/) | 1.5.0 | Classic YouTube tweak for **iOS 7–10**, with a dark theme, a 1080p option, an in-player quality menu next to subtitles, working Google sign-in, reliable playback, and bundled YouTube 2.0.0 under the oldtube name and icon. |
| [oldtube (iOS 5–6)](depictions/oldtube/) | 1.5.0 | Same tweak for **iOS 5–6**. Conflicts with the iOS 7–10 package; install the one that matches your iOS version. |
| oldtube LightKit | 1.0.0 | Shared embedded WebKit browser that oldtube uses for the Google sign-in flow. Pulled in automatically as a dependency. |

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
