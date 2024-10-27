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

Of course, backup all your data from the system drive partition of the target computer before starting the installation.

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


## Installation phase

Boot your computer on the Windows installation support drive.

On the first page, select your preferred language and keyboard layout. For example:

- Language: `English (United States)`
- Time format: `French (France)`
- Keyboard input: `French`

Continue:

- Choose "I don't have a license key" when you're prompted to activate Windows, you can activate it later.
- Select your Windows version. Usually, you'd choose Windows Home or Windows Pro.
- Agree to terms and conditions.
- Choose "Custom" installation for a fresh install.

Then, choose where to install Windows:

- Choose the hard drive you want to install Windows on.
- Delete all unwanted partition from the drive, including reserved and recovery partitions.
  For reinstalling on a drive dedicated to Windows, you can delete all partitions (make sure you backed up your data).
- Select the unallocated space on the drive.
- Click on "New", leave the maximum size and confirm.
- Select the largest newly created partition on the drive.
- Click on "Next".

Now, wait for the installation to complete and for your computer to reboot.


## Setup phase

After the installation, if everything went well, your computer should boot directly into Windows for the setup.
If not, reboot and open the boot menu to select the drive you installed Windows on.

On the first page, select your preferred region and keyboard layout. For example:

- Region: `France`
- Keyboard layout: `French (AZERTY)`
- You will be able to add secondary keyboard layouts later in the configuration phase.

For Windows Pro installations, select your installation type. Likely, you'll want to choose "Set up for personal use".

Make sure to disconnect your computer from the internet before continuing the setup.
- On a desktop, unplug the Ethernet cable.
- On a laptop, decline to connect to a network when prompted.

If prompted to sign in with a Microsoft account, decline and create a local account instead.
To do this, choose to create an "Offline account" and then select "Limited experience".

If you can't find the option to create an offline account, it may be hidden. To reveal it, you can:
- Open the command prompt with `Shift + F10` and run `OOBE\BYPASSNRO`,
- Your computer will reboot and you should be able to create an offline account after repeating the previous steps.

Now, you'll be prompted to create an administrator account:
Choose a username, secure password, and backup security questions.

Then, Windows will ask your consent on privacy settings:
- For all privacy settings, choose "no" or the least intrusive option.
- For "Diagnostic data", choose "Required" or the least intrusive option.


## System configuration phase

After completing the setup, Windows will start and you will be logged into your administrator account.

If you are prompted to use Microsoft Edge, decline.

Now it is time for you to configure Windows.
There are some important system settings to review using your administrator account:

<details>
<summary>In "System" settings</summary>

- In "Remote desktop":
  - Disable "Remote Desktop" unless required for you.

</details>

<details>
<summary>In "Search" settings</summary>

- In "Searching Windows":
  - Optionally, select the "Enhanced" indexing method (may not be recommended on a laptop).

</details>

<details>
<summary>In "Update & Security" settings</summary>

- In "Activation":
  - If you reinstalled Windows, check if Windows automatically restored your license.
    If not, you may activate Windows now if you want.
    Activating Windows is required to access all security & personalization settings.
- In "Windows Update":
  - Click on "Check for updates".
- In "Windows Security":
  - Review issues if any, and security settings.
  - In "App & browser control":
    - In "Reputation-based protection":
      - Enable "Potentially unwanted app blocking".
  - In "Device Security":
    - In "Core isolation":
      - Enable "Memory integrity"
    - In "Security processor details":
      - Verify that the Trusted Platform Module (TPM) is enabled.
- In "Find my device":
  - This setting requires location access and a Microsoft account.
    You should consider enabling it later if you are using a laptop.
- In "Windows Insider Program":
  - You may join the Insider program here if you want to use beta versions of Windows.

</details>

Now, it is highly recommended to create a standard user account for your daily use.
This will help you avoid accidentally making changes with privileged access and improve security.

In "Accounts" settings and "Family & other users", create a new standard user account:
- Click on "Add someone else to this PC".
- Choose to create an "Offline account" (you will be able to link it to a Microsoft account later).
- Choose a username, a secure password, and backup security questions.
