---
title: Expose WSL port to network
---

## Start an HTTP server in WSL

If you have Docker, you can easily start a simple HTTP server like this:

```sh
docker run -d -p 8080:80 nginx:alpine
```

You'll then be able to access the server locally at [localhost:8080](http://localhost:8080).

This is great for local development and testing, but the server is only accessible from your local
machine.


## Expose WSL port to your LAN

To expose your HTTP server from WSL to the Internet, you'll need to set up some form of port
forwarding from your Windows host to your WSL instance. One straightforward way to do this is by
using `netsh` to create a port proxy.

1. First, you need to find the IP address of your WSL instance. Run this in your WSL terminal:

   ```sh
   ip a | grep ' eth0'
   ```

   You'll see an output similar to this:

   ```
   2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
       inet 172.18.108.155/20 brd 172.18.111.255 scope global eth0
   ```

   Note down the `inet` IP address without the CIDR suffix, which is `172.18.108.155` in this example.

2. Next, open an administrator PowerShell terminal on your Windows host. Run the following command
   to set up port forwarding from your Windows host to your WSL instance:

   ```ps
   netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=172.18.108.155
   ```

   This will forward all incoming traffic on port `8080` of your Windows host to port `8080` of your WSL.

   You can see the portproxy rule has been added:

   ```ps
   netsh interface portproxy show v4tov4
   ```

   You should see an output like this:

   ```
   Listen on ipv4:             Connect to ipv4:

   Address         Port        Address         Port
   --------------- ----------  --------------- ----------
   0.0.0.0         8080        172.18.108.155  8080
   ```

Congrats! Now your simple HTTP server is exposed to your LAN as well. You can access it from other
devices on your network by navigating to `http://<your-windows-host-ip>:8080`.

Find your Windows host IP by running `ipconfig` in a regular Command Prompt or PowerShell window.

For example, if your Windows host IP is `192.168.1.42`, you can access your simple HTTP server from
other devices on your network at `http://192.168.1.42:8080`.

To go further and expose your server to the Internet, you'll need to set up port forwarding on your
router. The exact steps for this will depend on your router model and/or your Internet Service
Provider (ISP).

After setting up port forwarding on your router, you should be able to access your simple HTTP
server from the Internet using your public IP address.

Find your public IP address by visiting a site like [test-ipv6.com](https://test-ipv6.com/).


## Clean up port forwarding

To remove the port forwarding rule you created earlier, run the following command in an
administrator PowerShell terminal:

```ps
netsh interface portproxy delete v4tov4 listenport=8080 listenaddress=0.0.0.0
```

This will delete the portproxy rule and stop forwarding external traffic to your WSL instance.

You can verify that the rule has been removed by running:

```ps
netsh interface portproxy show v4tov4
```

If there are no rules listed, the port forwarding has been successfully removed.

Finally, to stop the HTTP server running in Docker, you can find the container ID and stop it:

```sh
docker ps
docker stop <container_id>
```
