---
title: Install WSL
---

## Preconfiguration

Update WSL:
- via CLI: `wsl --update`
- manually: [learn.microsoft.com/en-us/windows/wsl/install-manual](https://learn.microsoft.com/en-us/windows/wsl/install-manual)

Set default version to WSL 2:
- `wsl --set-default-version 2`


## Install Linux distro

List available distros:
- `wsl -l -o`

Notably, you can install:
- Ubuntu
- Debian
- Kali Linux
- Oracle Linux
- OpenSUSE

### Install Ubuntu

Install Ubuntu:
- `wsl --install Ubuntu`

Verify the distro is installed:
- `wsl -l -v`

Then:
- Start the distro
- Configure the main user
- [Configure WSL](<Configure>)


## Move distro to another drive

Suppose you have a distro named "Ubuntu" installed on the C: drive and you want to move it to the D: drive.

Stop the distro:
- `wsl --terminate Ubuntu`

Export the distro to a tar file:
- `wsl --export Ubuntu D:\WSL\ubuntu.tar`

Delete the distro:
- `wsl --unregister Ubuntu`

Import the distro and set it up on the D: drive:
- `wsl --import Ubuntu D:\WSL\Ubuntu\ D:\WSL\ubuntu.tar --version 2`

Verify the distro is imported:
- `wsl -l -v`

If applicable, set the distro as default:
- `wsl --set-default Ubuntu`

Then:
- Start the distro
- Check your user with `whoami`
- Check your data

<!-- https://learn.microsoft.com/fr-fr/windows/wsl/use-custom-distro -->

### Troubleshooting

If the user is not yours (e.g. root), override the default user in `/etc/wsl.conf`:

- Set the default user in `/etc/wsl.conf`:
  ```
  [user]
  default=<username>
  ```
- Restart WSL, log back in and check your user with `whoami`.


## Import distro from past installation

Import the distro from the virtual disk file (.vhdx) of a previous installation:
- `wsl --import-in-place Ubuntu-old D:\WSL\Ubuntu-old\ext4.vhdx`

Verify the distro is imported:
- `wsl -l -v`

Start the distro:
- `wsl -d Ubuntu-old`

### Troubleshooting

If access to the virtual disk file is denied, grant yourself access to the file:
- Right-click on the virtual disk file (.vhdx)
- Properties > Security > Edit
- Add your user and grant full control
- Apply and close
- Retry starting the distro.
