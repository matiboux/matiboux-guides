---
title: DNS in Windows
---

## Set DNS Server

You can override the DNS server configuration in Windows to use a specific DNS server instead of the one provided by your ISP.

For example, you can use [Cloudflare's DNS servers](https://one.one.one.one/):

| Protocol | Primary DNS | Secondary DNS |
|--|--|--|
| IPv4 | `1.1.1.1` | `1.0.0.1` |
| IPv6 | `2606:4700:4700::1111` | `2606:4700:4700::1001` |

Make sure to enable DNS over HTTPS (DoH) in the settings if the DNS server supports it.


## DNS overrides

To override DNS resolution for specific domains, you can edit the `hosts` file.
Edit the `C:\Windows\System32\drivers\etc\hosts` file as an administrator with your favorite text editor.

Add lines using the following format, replacing `IP_ADDRESS` with the IP address you want to use:

```
172.0.0.42  my-service.local
```

This example would resolve `my-service.local` to `172.0.0.42` locally, regardless of your DNS server configuration.
