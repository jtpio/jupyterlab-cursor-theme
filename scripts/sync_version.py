#!/usr/bin/env python3
"""Sync the version from a sub-package to the root package.json."""

import json
from pathlib import Path


def main():
    root_dir = Path(__file__).parent.parent

    # Get version from one of the sub-packages (they're updated at the same time)
    sub_package_path = root_dir / "packages" / "jupyterlab-cursor-dark" / "package.json"
    with open(sub_package_path) as f:
        sub_package = json.load(f)
    version = sub_package["version"]

    # Update the root package.json version
    root_package_path = root_dir / "package.json"
    with open(root_package_path) as f:
        root_package = json.load(f)

    root_package["version"] = version

    with open(root_package_path, "w") as f:
        json.dump(root_package, f, indent=4)
        f.write("\n")

    print(f"Synced root package.json version to {version}")


if __name__ == "__main__":
    main()
