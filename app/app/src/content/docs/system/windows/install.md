---
title: Install Windows
---

This is a step-by-step installation and configuration guide for Windows.

This is based on my personal experience and preferences and may be incomplete,
but this does, in my opinion, give some good advice and good practices on how to configure Windows.


## Preparation phase

To install Windows, you will need to prepare an installation support: either a CD or USB drive.

To make an installation drive yourself, you will need either the MediaCreationTool
or the ISO file for the Windows version you want to install.

- [Windows 10 download page](https://www.microsoft.com/en-us/software-download/windows10)
- [Windows 11 download page](https://www.microsoft.com/en-us/software-download/windows11)

### MediaCreationTool

You can download the MediaCreationTool from the Windows download page from another Windows computer.
You will need a USB drive of at least 8GB and administrator access to the computer.

Here are the settings I usually use for the MediaCreationTool:
- Language: `English (United States)`
- Windows: The version you want to install.
- Architecture: `x64`

### ISO file

Microsoft restricts access to the Windows ISO files for Windows users to force use of the MediaCreationTool.
To bypass this and download the ISO file, you can spoof your browser user agent to a non-Windows device when visiting Windows download page. To do this, open "network conditions" in the browser developer tools, and override the user agent.

Once you have the ISO file, you can use a tool like Rufus or Balena Etcher to create a bootable USB drive.
You will need a USB drive of at least 8GB.
