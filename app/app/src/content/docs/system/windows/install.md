---
title: Install Windows
---

This is a step-by-step installation and configuration guide for Windows.

This is based on my personal experience and preferences and may be incomplete,
but this does, in my opinion, give some good advice and good practices on how to configure Windows.


## Preparation phase

To install Windows, you will need to prepare an installation support: either a CD or USB drive.

To make an installation drive yourself, you will need either MediaCreationTool
or the ISO file for the Windows version you want to install.

- [Windows 10 download page](https://www.microsoft.com/en-us/software-download/windows10)
- [Windows 11 download page](https://www.microsoft.com/en-us/software-download/windows11)

Of course, backup all your data from the system drive partition of the target computer before starting the installation.

<details>
<summary>Using the MediaCreationTool</summary>

You can download the MediaCreationTool from the Windows download page from another Windows computer.
You will need a USB drive of at least 8GB and administrator access to the computer.

Here are the settings I usually use for the MediaCreationTool:
- Language: `English (United States)`
- Windows: The version you want to install.
- Architecture: `x64`

</details>

<details>
<summary>Using the ISO file</summary>

Microsoft restricts access to the Windows ISO files for Windows users to force use of the MediaCreationTool.
To bypass this and download the ISO file, you can spoof your browser user agent to a non-Windows device when visiting Windows download page. To do this, open "network conditions" in the browser developer tools, and override the user agent.

Once you have the ISO file, you can use a tool like Rufus or Balena Etcher to create a bootable USB drive.
You will need a USB drive of at least 8GB.

</details>


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


## User configuration phase

After completing the system configuration, you can now configure your user accounts.
You would likely repeat the following steps for both your administrator and standard user accounts.

### Settings

It is not recommended to link your Microsoft account with the administrator account.
However, you may want to do so with your standard user account and you can do this now in "Accounts" settings:
Log in with your Microsoft account, confirm and let Windows sync your settings.

Now, open the "Settings" app and review its home page:

<details>
<summary>If you see the "Get more out of Windows" message</summary>

Open the "Get more out of Windows" message:
- In "Use recommended browser settings":
  - Select "Don't update your browser settings"

</details>

<details>
<summary>If you want to configure a synced OneDrive folder</summary>

- Click to sign in with your Microsoft account for OneDrive.
- Select the location for your OneDrive folder. I recommend using a data drive if you have one.
- Unselect "Desktop", "Documents", "Pictures" for sync.
- Skip the tutorial.
- Click on "Later" when prompted about the mobile app.
- Click on "Open my OneDrive folder" to finish and verify its content.

</details>

Then, you can review the settings under each category of the "Settings" app:

<details>
<summary>In "System" settings</summary>

- Display : _Nothing in particular._
- Sound : _Nothing in particular._
- Notifications & actions :
  - Enable "Get notifications from apps and other senders"
  - Disable "Show notifications on the lock screen"
  - Enable "Show reminders and incoming VoIP calls on the lock screen"
  - Enable "Allow notifications to play sounds"
  - Enable "Show me the Windows welcome experience [...]"
  - Enable "Suggest ways I can finish setting up my device [...]"
  - Enable "Get tips, tricks, and suggestions [...]"
- Focus assist:
  - Select "Priority only"
  - Enable "When I'm suplicating my display"
  - Enable "When I'm playing a game"
  - Enable "When I'm using an app in full screen mode"
  - Enable "Show a summary of what I missed while focus assis was on"
- Power & sleep:
  - Set "When plugged in, turn off after" to "10 minutes"
  - Set "When plugged in, PC goes to sleep after" to "Never"
  - Set "Power mode" to "Best performance" (desktop PC only)
  - _Change Settings page to save changes and come back to "Power & sleep"._
  - In "Additional power settings":
    - Next to the selected power plan, usually "Balanced":
      - In "Change plan settings":
        - In "Change advanced power settings":
          - Set "Hard disk / Turn off hard disk after" to "Never"
          - Verify "Sleep / Sleep after" is set to "Never"
          - Set "Sleep / Hibernate after" to "Never"
          - Verify "Display / Turn off display after" is set to "10 minutes"
    - In "Choose what the power buttons do":
      - _Click on "Change settings that are currently unavailable"_
      - Set "Power button" to "Shutdown"
      - Set "Sleep button" to "Sleep"
      - Disable "Turn on fast startup"
      - Enable "Sleep"
      - Enable "Hibernate"
      - Enable "Lock"
- Storage
  - Enable "Storage Sense"
  - Open "Configure Storage Sense or run it now":
    - Set "Run Storage Sense" to "Every week"
    - Enable "Delete temporary files [...]"
    - Set "Delete files in my recycle bin [...]" to "30 days"
    - Set "Delete files in my Downloads folder [...]" to "Never"
    - Optionally, click on "Clean now"
  - In "Temporary files":
    - Select all temporary files and click on "Remove files"
  <!--- In "Change where new content is save":
    - Set "New apps will save to" to "System (C:)"
    - For all other options, you may choose to select another drive, used for your data.-->
  - In "Optimize Drives":
    - Select the System drive and optimize it
    - Optionally, analyse and optimize the other drives
    - Turn on "Scheduled optimization" and set its frequency to "Weekly"
- Tablet
  - Set "When I sign in" to "Use the appropriate mode for my hardware"
  - Set "When I use this device as a tablet" to "Ask me before switching modes"
- Multitasking
  - Set "Pressing Alt + Tab shows" to "Open windows only"
- Projecting to this PC: nothing in particular, unless supported by your device.
- Shared experiences: nothing in particular
- Clipboard:
  - Enable clipboard history
  - Disable "Sync across devices" (if applicable)
- Remote desktop: _See system configuration phase._
- In "About":
  - Click on "Rename this PC" and give your PC a fancy name.
  - In "Advanced system settings":
    - _Requires to enter the admin password._
    - In "Remote":
      - Disable "Allow Remote Assistance connections to this computer"

</details>

<details>
<summary>In "Devices" settings</summary>

- In "Bluetooth & other devices":
  - Turn off Bluetooth if you're not using it
- In "Printers & scanners": _Nothing in particular._
- In "Mouse": _Nothing in particular._
- In "Typing":
  - Enable all in "Spelling"
  - Enable all in "Typing"
  - _Not sure about enabling suggestions in "Hardware keyboard"_
  - Enable "Multilingual text suggestions"
- In "Pen & Windows Ink": _Nothing in particular._
- In "Autoplay": _Nothing in particular._
- In "USB": _Nothing in particular._

</details>

<!-- In "Phone": _Nothing in particular._ -->

<details>
<summary>In "Network & Internet" settings</summary>

- In "Status":
  - In "Properties" for the current network's:
    - Set "Network profile" to "Private" if applicable
- In "Ethernet": nothing in particular
- In "Dial up": nothing in particular
- In "VPN": nothing in particular
- In "Airplane mode": nothing in particular
- In "Mobile Hotspot":
  - Change the network settings if this is supported by your device
- In "Proxy": nothing in particular

</details>

<details>
<summary>In "Personalization" settings</summary>

- In "Background":
  - Customize your background
  - Your background may have been synced with your Microsoft account
- In "Colors":
  - Select "Custom" color mode
  - Select "Dark" as the "default Windows mode"
  - Select "Light" as the "default app mode"
  - Enable transparency effects
- In "Lock screen":
  - Customize your background
  - Customize your apps
- In "Themes": nothing in particular
- In "Fonts": nothing in particular
- In "Start":
  - Enable "Show more tiles on Start" (recommended on desktop PC)
  - Enable "Show app list in Start menu"
  - Enable "Show recently added apps"
  - Enable "Show used apps"
  - Disable "Show suggestions occasionnally in Start"
  - Disable "Show Start full screen"
  - Enable "Show recently opened items in Jump Lists or the taskba and in File Explorer Quick Access"
  - In "Choose which folders appear on Start":
    - Enable "File Explorer"
    - Enable "Settings"
    - Disable "Documents"
    - Disable "Downloads"
    - Disable "Music"
    - Disable "Pictures"
    - Disable "Videos"
    - Disable "Network"
    - Enable "Personal folder"
- In "Taskbar":
  - Enable "Lock the taskbar"
  - Enable "Automatically hide the taskbar in desktop mode"
  - Disable "Automatically hide the taskbar in tablet mode"
  - Disable "Use small taskbar buttons"
  - Disable "Use Peek to preview the desktop [...]"
  - Enable "Replace Command Prompt with Windows Powershell [...]"
  - Enable "Show badges on taskbar buttons"
  - Set "Taskbar location on screen" to "Bottom"
  - Set "Combine taskbar buttons" to "Always, hide labels"
  - Optionally, customize in "Select which icons appear on the taskbar"
  - In "Turn system icons on or off":
    - Enable "Touch keyboard"
    - Enable "Windows Ink Workspace"
    - Disable "Meet Now"
  - Disable "Show contacts on the taskbar"

</details>

<details>
<summary>In "Apps" settings</summary>

- In "Apps & features":
  - In "Optional features":
    - In "More Windows features":
      - Enable "Windows Subsystem for Linux" (for developers)
      - Do not reboot right away
- In "Default apps":
  - You'll customize this after having installed some apps
  - Keep in mind the "Choose default apps by file type" menu
  - Keep in mind the "Choose default apps by protocol" menu
  - Keep in mind the "Set defaults by apps" menu
- In "Offline maps": nothing in particular
- In "Apps for websites": nothing in particular
- In "Video playback":
  - Enable "Automatically process video to enhance it"
- In "Startup":
  - Disable "Microsoft Edge"

</details>

<details>
<summary>In "Accounts" settings</summary>

- In "Your info": nothing in particular
- In "Email & accounts": nothing in particular
- In "Sign-in options":
  - Add a Windows Hello sign-in option if you want
  - Disable "Dynamic lock"
  - Disable "Restart apps"
  - Disable "Show account details [...] on the sign-in screen"
  - Enable "Use my sign-in info to automatically finish setting up my device after an update or restart"
- In "Acces work or school": nothing in particular
- In "Sync your setiings":
  - Enable "Sync settings"
  - Enable all settings

</details>

<details>
<summary>In "System" settings</summary>

- In "Time & Language":
  - In "Date & Time":
    - Set the time zone
    - Enable "Adjust for daylight saving time automatically"
  - In "Region":
    - Set "Country or region" to "France"
    - Set "Regional format" to "English (Europe)"
    - Review "Regional format data"
  - In "Language":
    - Add the language "French (France)":
      - Install all packages
    - In "French (France)":
      - Verify the installed keyboard layout: "French AZERTY"
    - In "English (United States)":
      - Verify the installed keyboard layout: "US QWERTY"
    - Set "Windows display language" to "English (United States)"
    - In "Keyboard":
      - Select "French (France)" as input method
  - In "Speech":
    - Select "French (France)" as speech language
    - Enable "Recognize non-native accents for this langgages

</details>

<details>
<summary>In "Gaming" settings</summary>

- In "Xbox Game Bar": nothing in particular
- In "Captures": nothing in particular
- In "Game Mode":
  - Enable "Game Mode"
- In "Xbox Management": nothing in particular

</details>

<details>
<summary>In "Ease of Access" settings</summary>

- In "Keyboard":
  - Disable "Allow the shortcut key to start Sticky Keys"
  - Disable "Allow the shortcut key to start Toggle Keys"
  - Disable "Allow the shortcut key to start Filter Keys"

</details>

<details>
<summary>In "Search" settings</summary>

- In "Permission & History":
  - Set "SafeSearch" to "Off" (depending on the user)
- In "Searching Windows":
  - _Requires to be logged as an administrator to edit._
  - Select the "Enhanced" indexing method.

</details>

<details>
<summary>In "Privacy" settings</summary>

- In "General":
  - Enable all settings
- In "Speech":
  - Enable "Online speech recognition"
  - Disable "contributing my voice clips"
- In "Inking & typing personalization":
  - Enable the setting
- In "Diagnostics & feeback":
  - Set to "Optional diagnostic data"
  - Disabled "Improve inking and typing"
  - Disabled "Tailored experiences"
  - Disabled "View diagnostic data"
  - Set "Feedback frequency" to "Automatically"
- In "Activity histoiry":
  - Enable "Store my activity history on this device"
  - Enable "Show activities from these accounts for your Microsoft account (if applicable)
- For all app permissions:
  - Enable the permission for your device
  - Enable "Allow apps to access your [...]"
  - Remove permission to unused apps (like 3D Viewer, Skype, ...)
    - "3D Viewer" has way too much permissions enabled by default
    - "Camera" can keep its access to camera and microphone
    - "Mail and Calendar" can keep its access to contacts, calendar and email
  - Enable "Allow desktop apps to access your [...]"
- In "Voice actiation" (special case):
  - Disable "Allow apps to use voice activation when this device is locked"
  - Disable "Allow apps to use voice activation"
  - Remove permission to unused apps (like 3D Viewer and Skype)
- In "Other devices":
  - Disable "Communicate with unpaired devices"
- In "Background apps": nothing in particular

</details>

<details>
<summary>In "Update & Security" settings</summary>

- In "Windows Update":
  - Click on "Check for updates"
  - In "Advanced options":
    - Enable "Receive updates for other Microsoft products when you update Windows"
- In "Delivery Optimization":
  - Enable "Allow downloads from other PCs"
  - Select "PCs on my local network"
- In "Windows Security":
  - Review problems and all settings
  - In "App & browser control":
    - In "Reputation-based protection":
      - Enable "Potentially unwanted app blocking"
  - In "Device Security":
    - In "Core isolation":
      - Enable "Memory integrity"
    - In "Security processor details":
      - Verify that the TPM is enabled
- In "Backup": nothing in particular
- In "Troubleshoot": nothing in particular
- In "Recovery": nothing in particular
- In "Activation":
  - Activate Windows if it is not already
- In "Find my device":
  - _Requires to be logged as an administrator into a Microsoft account._

</details>

### File explorer

Open the file explorer.

<details>
<summary>In "This PC" (the list of drives)</summary>

- Rename the "Local Disk" (C:) to "System"

</details>

<details>
<summary>In "View" menu</summary>

- Disable "Item check boxes"
- Enable "File name extensions"
- Enable "Hidden files"

<span></span>

- Open "Options":
  - Review settings

</details>

### Personalize the taskbar

<details>
<summary>Right-click the taskbar and configure it</summary>

- In "Search", select "Show search icon"
- In "News and interests", select "Turn off"
- Disable "Show Cortana button"
- Enable "Show Task View button"
- Enable "Show Windows Ink Workspace button"
- Enable "Show touch keyboard button"

</details>

<details>
<summary>Disable the "Meet" icon</summary>

- Right click on the "Meet" icon
- Select "Turn off" (if not disabled already)

</details>

<details>
<summary>Suggested pinned apps</summary>

Here are my suggestions for pinned apps in the taskbar, in a suggested order:

- Common Windows apps: like "File Explorer" and "Notepad".
- Your favorite web browser: like "Firefox", "Google Chrome" or "Microsoft Edge".
- Your favorite game launchers: like "Steam", "Epic Games" or "GOG Galaxy".
- Your favorite developer apps: like "Visual Studio Code" or "WinSCP".
- Your favorite communication apps: like "Telegram", "Discord" or "Slack".
- Your favorite utilities.
- Your favorite multimedia apps: like "Spotify" or "VLC".

<details>
<summary>My actual pinned apps</summary>

- File Explorer
- Notepad
- Google Chrome
- Steam
- WinSCP
- Visual Studio Code
- Telegram
- Discord
- Buttercup

</details>

:::tip
Pinned apps in taskbar are handy for your favorite apps and utilities.
You can open the first 10 quickly with the `Windows + [number]` keyboard shortcut, relative to their position.
:::


</details>

### Uninstall default apps

Windows comes with pre-installed apps.
You should uninstall all unwanted sponsored apps and games.

Open the start menu and look for apps you don't want to keep.

<details>
<summary>Pre-installed apps you might want to uninstall</summary>

Microsoft apps:

- Office
- Outlook (shortcut)
- Word (shortcut)
- Excel (shortcut)
- PowerPoint (shortcut)
- OneNote
- Microsoft Teams
- Skype
- Microsoft To Do
- Microsoft News

Sponsored apps:

- Adobe Lightroom
- Clipchamp
- Dolby Access
- Hidden City: Hidden Object Aventure
- Line
- Logiciel de retouche de photos
- Messenger
- Office
- Photoshop Express
- Picsart
- Roblox
- Snipping Tool
- Spotify
- TikTok
- Whatsapp
- Wikipedia

</details>


## Developer configuration

### Settings

You'd likely want to apply File Explorer developer-friendly settings.
Do this from the "For developers" system settings.

If you plan on running PowerShell scripts, you may want to apply the PowerShell developer-friendly "execution policy" setting.
Do this also from the "For developers" system settings.

Finally, if you want to use unreleased Windows features,
you can join the Windows Insider program from the "Advanced options" in the "Windows Update" settings.


### Install WSL

See the dedicated guide on how to [install Windows Subsystem for Linux (WSL)](<../../wsl/install/>).


## Upgrade to Windows 11

If you enabled Windows Insider in the Beta channel, you might be able to upgrade to Windows 11 via Windows Update.

Once Windows 11 installed, there are some settings you should check again.

### Settings

<details>
<summary>In "Personalization" settings</summary>

- In "Taskbar":
  - Disable "Widgets" taskbar item
  - Disable "Chat" taskbar item
  - Set Taskbar alignment to "Left"
  - Enable "Automatically hide the taskbar"

</details>
