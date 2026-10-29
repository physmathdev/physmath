#!/usr/bin/env python3
"""Build a flat Cydia/Sileo repository index from .deb files in ./debs.

Usage:
    python3 update_repo.py

Generates Packages, Packages.gz, Packages.bz2 and Release.
Only needs Python 3 standard library.
"""

import bz2
import gzip
import hashlib
import io
import lzma
import os
import struct
import sys
import tarfile

ROOT = os.path.dirname(os.path.abspath(__file__))
DEBS_DIR = os.path.join(ROOT, "debs")
ARCH = "iphoneos-arm"
ORIGIN = "physmath"
LABEL = "physmath"
DESCRIPTION = "physmath Cydia repository"


def read_ar(data):
    """Yield (name, payload) from an ar archive."""
    if not data.startswith(b"!<arch>\n"):
        raise ValueError("not an ar archive")
    off = 8
    while off + 60 <= len(data):
        hdr = data[off:off + 60]
        name = hdr[:16].decode("utf-8", "replace").strip().rstrip("/")
        try:
            size = int(hdr[48:58].decode("ascii").strip())
        except ValueError:
            break
        body = data[off + 60:off + 60 + size]
        yield name, body
        off += 60 + size
        if off % 2:
            off += 1


def decompress(name, body):
    if name.endswith(".gz"):
        return gzip.decompress(body)
    if name.endswith(".xz"):
        return lzma.decompress(body)
    if name.endswith(".bz2"):
        return bz2.decompress(body)
    if name.endswith(".zst"):
        try:
            import zstandard  # optional
        except ImportError:
            raise SystemExit("python-zstandard is required for .zst control archives")
        return zstandard.ZstdDecompressor().decompress(body)
    return body


def parse_control(text):
    """Parse a Debian control paragraph into an ordered list of (key, value)."""
    fields = []
    key = None
    for line in text.splitlines():
        if not line.strip():
            continue
        if line[0] in " \t" and key is not None:
            fields[-1] = (key, fields[-1][1] + "\n" + line)
            continue
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        fields.append((key, value.strip()))
    return fields


def extract_control(path):
    with open(path, "rb") as fh:
        data = fh.read()
    for name, body in read_ar(data):
        if name.startswith("control.tar"):
            raw = decompress(name, body)
            with tarfile.open(fileobj=io.BytesIO(raw)) as tf:
                for member in tf.getmembers():
                    if member.isfile() and os.path.basename(member.name) == "control":
                        return tf.extractfile(member).read().decode("utf-8", "replace")
    raise ValueError("control file not found")


def stable_paragraph(fields):
    """Order fields the way Cydia expects, keep the rest."""
    preferred = [
        "Package", "Name", "Version", "Architecture", "Description",
        "Maintainer", "Author", "Section", "Depends", "Conflicts",
        "Replaces", "Provides", "Homepage", "Depiction", "Icon",
        "Installed-Size", "Filename", "Size", "MD5sum", "SHA1", "SHA256",
    ]
    by_key = {k: v for k, v in fields}
    ordered = [(k, by_key[k]) for k in preferred if k in by_key]
    ordered += [(k, v) for k, v in fields if k not in preferred]
    return ordered


def build_packages():
    entries = []
    for filename in sorted(os.listdir(DEBS_DIR)):
        if not filename.endswith(".deb"):
            continue
        path = os.path.join(DEBS_DIR, filename)
        fields = parse_control(extract_control(path))
        by_key = dict(fields)

        if by_key.get("Architecture", ARCH) != ARCH:
            print(f"skipping {filename}: architecture {by_key.get('Architecture')}")
            continue

        with open(path, "rb") as fh:
            blob = fh.read()

        fields = [(k, v) for k, v in fields if k not in
                  ("Filename", "Size", "MD5sum", "SHA1", "SHA256")]
        fields += [
            ("Filename", f"debs/{filename}"),
            ("Size", str(len(blob))),
            ("MD5sum", hashlib.md5(blob).hexdigest()),
            ("SHA1", hashlib.sha1(blob).hexdigest()),
            ("SHA256", hashlib.sha256(blob).hexdigest()),
        ]
        entries.append((by_key.get("Package", filename), stable_paragraph(fields)))

    entries.sort(key=lambda e: e[0].lower())
    paragraphs = []
    for _, fields in entries:
        paragraphs.append("\n".join(f"{k}: {v}" for k, v in fields))
    return "\n\n".join(paragraphs) + "\n"


def write(path, data):
    with open(path, "wb") as fh:
        fh.write(data)
    print(f"wrote {os.path.relpath(path, ROOT)} ({len(data)} bytes)")


def main():
    os.makedirs(DEBS_DIR, exist_ok=True)
    packages = build_packages().encode("utf-8")

    write(os.path.join(ROOT, "Packages"), packages)
    write(os.path.join(ROOT, "Packages.gz"), gzip.compress(packages, mtime=0))
    write(os.path.join(ROOT, "Packages.bz2"), bz2.compress(packages))

    def hashes(name):
        data = packages if name == "Packages" else gzip.compress(packages, mtime=0)
        return (hashlib.md5(data).hexdigest(), hashlib.sha1(data).hexdigest(),
                hashlib.sha256(data).hexdigest(), len(data))

    release = [
        f"Origin: {ORIGIN}",
        f"Label: {LABEL}",
        "Suite: stable",
        "Version: 1.0",
        "Codename: ios",
        f"Architectures: {ARCH}",
        "Components: main",
        f"Description: {DESCRIPTION}",
        "MD5Sum:",
    ]
    for name in ("Packages", "Packages.gz"):
        md5, sha1, sha256, size = hashes(name)
        release.append(f" {md5} {size} {name}")
    release.append("SHA1:")
    for name in ("Packages", "Packages.gz"):
        md5, sha1, sha256, size = hashes(name)
        release.append(f" {sha1} {size} {name}")
    release.append("SHA256:")
    for name in ("Packages", "Packages.gz"):
        md5, sha1, sha256, size = hashes(name)
        release.append(f" {sha256} {size} {name}")

    write(os.path.join(ROOT, "Release"), ("\n".join(release) + "\n").encode("utf-8"))


if __name__ == "__main__":
    sys.exit(main())
