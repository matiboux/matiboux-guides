---
title: Docker Compose
---

## Services configuration

Every service in a `docker-compose.yml` file has a set of configuration properties that define how the service should be built and run.

Here are some of the properties you can use to configure a service:

```yaml
service_name:
  # Extend
  extends: []
  # Build
  image: image_name:latest
  build:
    context: .
    dockerfile: ./Dockerfile
    target: build_target
    args:
      ARG_KEY: value
  # Deploy
  depends_on: []
  restart: unless-stopped
  platform: []
  deploy: {}
  network_mode: host
  networks: []
  dns: []
  extra_hosts: []
  env_file: []
  environment:
    ENV_KEY: value
  secrets: []
  privileged: false
  user: user
  working_dir: /app
  read_only: false
  entrypoint: docker-entrypoint.sh
  command: start.sh
  tty: false
  stdin_open: false
  tmpfs: []
  volumes_from: []
  volumes: []
  expose: []
  ports:
    - 8080:8080 # HTTP
  healthcheck: []
  develop: []
```


### Order of configuration properties

For readability, I recommend following a consistent order for properties in your `docker-compose.yml` file. This helps maintain clarity and makes it easier to understand the configuration at a glance.

As a general guideline, properties should be **grouped by their high-level purpose** and **ordered by scope**, relevance, and chronological order of execution.

Specifically, in this example, we group properties into three main categories:
- **Extend**: Configuration for inheritance.
- **Build**: Configuration for building the Docker image (used in `docker compose build`).
- **Deploy**: Configuration for running the container (used in `docker compose up`).

Properties are ordered within each group based on their relevance in the build or deployment process.

Properties in the "**Build**" group are ordered according to build steps:
1. Set the image name and tag, checking if it exists (`image`).
2. Build the image with the specified configuration (`build`).

Properties in the "**Deploy**" group are ordered according to the deployment steps:
1. Check service dependencies (`depends_on`).
2. Set lifecycle management (`restart`).
3. Prepare the host platform resources (`platform`, `deploy`).
4. Prepare the network environment (`network_mode`, `networks`, `dns`, `extra_hosts`).
5. Set environment variables and secrets (`env_file`, `environment`, `secrets`).
6. Set runtime privileges (`privileged`, `user`).
7. Set the working directory and file system (`working_dir`, `read_only`).
8.  Set the start commands (`entrypoint`, `command`).
9.  Set the runtime terminal behavior (`tty`, `stdin_open`).
10. Mount external drives in the container (`tmpfs`, `volumes_from`, `volumes`).
11. Open the container's ports to the host (`expose`, `ports`).
12. Monitor the container's health (`healthcheck`).
13. Configure development features like hot-reloading (`develop`).

When specifying paths in build configuration and volume mounts, I would recommend **prefixing relative paths** with `./` to make it clear that they are relative to the `context` directory or the compose file's location.
