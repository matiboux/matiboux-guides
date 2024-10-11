---
title: Install WSL
---

## Preconfiguration

Update WSL:
- In Windows CLI (PowerShell/Batch): `wsl --update`
- Manually: [learn.microsoft.com/en-us/windows/wsl/install-manual](https://learn.microsoft.com/en-us/windows/wsl/install-manual)

Set default WSL version to WSL 2:
- `wsl --set-default-version 2`


## Install Linux distro

You may list available distros using the command: `wsl --list --online` or `wsl -l -o`.

Install a distro using the command: `wsl --install {distro}`.

Notably, you can install:
- Ubuntu
- Debian
- Kali Linux
- Oracle Linux
- OpenSUSE

### Install Ubuntu

Install the distro:
- Install Ubuntu: `wsl --install Ubuntu`
- Verify the distro is installed: `wsl --list --verbose` or `wsl -l -v`.

Then, configure & start the distro:
- Optionally, set the distro as default: `wsl --set-default Ubuntu`
- Start the distro: `wsl -d Ubuntu`
- On first launch, set up your username and password
- To go further, read: [Configure your WSL distro](<Configure>)


## Move distro to another drive

Let's suppose you have a distro named `Ubuntu` installed on the default `C:` drive, and you want to move its storage to the `D:` drive.

- Stop the distro: `wsl --terminate Ubuntu`
- Create a directory on the `D:` drive to store the distro: `mkdir D:\WSL`
- Export the distro to a tar file: `wsl --export Ubuntu D:\WSL\ubuntu.tar`
- Delete the distro: `wsl --unregister Ubuntu`
- Import the distro back & set it up on the `D:` drive: `wsl --import Ubuntu D:\WSL\Ubuntu\ D:\WSL\ubuntu.tar --version 2`
- Verify the distro is imported: `wsl -l -v`

Then, configure & start the distro:
- Optionally, set the distro as default: `wsl --set-default Ubuntu`
- Start the distro: `wsl -d Ubuntu`
- Check your user: `whoami`. If the user is `root` or otherwise not yours, see in [Troubleshooting](#default-user-is-not-yours).
- Check your data.

<!-- https://learn.microsoft.com/fr-fr/windows/wsl/use-custom-distro -->


## Import distro from a virtual disk file

Let's suppose you have a virtual disk file (`ext4.vhdx` file) of a previous WSL installation, from a backup or otherwise. Move the file to the directory where you want to store the WSL distro, for example `D:\WSL\Ubuntu\ext4.vhdx`.

- Import the distro from the virtual disk file in place: `wsl --import-in-place Ubuntu D:\WSL\Ubuntu\ext4.vhdx`
- Verify the distro is imported: `wsl -l -v`

Then, configure & start the distro:
- Optionally, set the distro as default: `wsl --set-default Ubuntu`
- Start the distro: `wsl -d Ubuntu`. If you fail to start the distro for file permission issues to the virtual disk file, see in [Troubleshooting](#import-distro-from-past-installation).
- Check your user: `whoami`. If the user is `root` or otherwise not yours, see in [Troubleshooting](#default-user-is-not-yours).
- Check your data.


## Troubleshooting

### Default user is not yours

If the default user (which opens on WSL start) is `root` or otherwise not yours, you may want to change it. To do so, override the default user configuration in `/etc/wsl.conf`:

```properties
[user]
default={username}
```

Then, restart WSL and log back in. Check your user with `whoami`.

### Access to the virtual disk file is denied

Access to the virtual disk file (`ext4.vhdx` file) may be denied due to file permission issues.
This may happen when importing a distro from a backup or a past installation.

To resolve this issue, you need to grant yourself access to the virtual disk file:
- Close the distro if it is running: `wsl --terminate {distro}`
- Open properties of the virtual disk file (`ext4.vhdx` file)
- In properties, open the "Security" tab, then click "Edit"
- Add your own Windows user and grant it full control
- Apply and close

Then, retry starting the distro:
- Start the distro: `wsl -d {distro}`
- Check your user & data. Verify all is working as expected.
