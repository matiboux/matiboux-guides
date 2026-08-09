---
title: Manage WSL virtual disk
---

## Move virtual disk to another drive

You can move the virtual disk file of a WSL distro to another drive, for example from `C:` to `D:`.
Refer to the [relevant section in the WSL Install guide](install/#move-distro-to-another-drive) for this.


## Save disk space

WSL virtual disk files can quickly take up a lot of space, because they store the entire filesystem of the Linux distro and they grow continuously as you install packages, create files, generate cache, etc.

The first steps is to clean up the filesystem within the distro itself. Often, you would:
- Remove package manager cache: e.g. `sudo apt clean`.
- Remove unused packages: e.g. `sudo apt autoremove`.
- Remove temporary files & logs:
  `find . \( \( -name "*.log" -type f \) -o \( -name ".cache" -type d \) \) -prune -print -exec rm -rf '{}' +` (?)
- Remove app dependencies:  
  `find . \( -name "node_modules" -o -name ".venv" -o -name "venv" \) -type d -prune -print -exec rm -rf '{}' +`
- Prune Docker images & containers: e.g. `docker system prune`.

You can see your filesystem size within the distro using the command: `df -h`.

Once you've cleaned up the filesystem, you might notice that the virtual disk file size hasn't decreased. This is because the virtual disk file grows as more disk space is used, but it doesn't shrink when you delete files. To shrink the virtual disk file, you need to compact it. Here's how:
- Stop WSL: `wsl --shutdown`,
- Open PowerShell,
- Run `diskpart` to open the DiskPart CLI disk partitioning utility,
- Copy the path of the virtual disk file: e.g. `D:\WSL\Ubuntu\ext4.vhdx`,
- Run `select vdisk file="{path}"` to select the virtual disk file,
- Run `compact vdisk` to compact the virtual disk file.
- Wait for the process to complete.

After the process is complete, you can now see the reduced size of the virtual disk file. You may restart WSL to verify that everything is working as expected.
