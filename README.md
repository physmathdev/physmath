# physmath — Cydia repository

Personal Cydia / Sileo repository hosted on GitHub Pages.

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
├── index.html           # web landing page with "Add to ..." links
└── update_repo.py       # index generator
```

The repository is unsigned. Cydia/Sileo will show a warning about a missing
signature, which is normal for a personal source; packages still install.
