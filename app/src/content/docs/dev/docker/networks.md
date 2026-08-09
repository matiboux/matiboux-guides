---
title: Networks in Docker
---

## Access local network from Docker container

### Use the host network

You can choose to use the host network instead of the default bridge network in your Docker container.
This way, the container will share the network namespace with its host and will have access to the host's network interfaces.

Run the container with the `--network host` option:

```bash
docker run --network host my-image
```

Then, the container can access services running on the host using `localhost` like you would on the host machine itself.

_More information on the [official Docker documentation](https://docs.docker.com/network/host/)._  
_Official Docker guide on [using the host network](https://docs.docker.com/engine/network/tutorials/host/)._

### Use the hostname `host.docker.internal`

Docker provides a special DNS name `host.docker.internal` that resolves to the host's internal IP address. This way, the container can access services exposed on the host.

Then, the container can access services running on the host using `host.docker.internal`, the same way you would using `localhost` on the host machine itself.

_Official Docker documentation on [this hostname](https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host)._

With Docker Compose, you can set the `extra_hosts` property to define the `host.docker.internal` hostname:

```yaml
services:
  my-service:
    extra_hosts:
      - "host.docker.internal:host-gateway"
```
