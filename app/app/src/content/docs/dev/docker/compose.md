---
title: Docker Compose
---

## Services configuration

### Order of configuration properties

Each service in a `docker-compose.yml` file has a set of configuration properties that define how the service should be built and run. The order of these properties is not important, but for readability, I recommend following a specific order as shown below:

```yaml
service:
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
  networks: []
  network_mode: ""
  dns: []
  extra_hosts: []
  environment:
    ENV_KEY: value
  secrets: []
  user: user
  working_dir: /app
  read_only: false
  entrypoint: docker-entrypoint.sh
  command: start.sh
  tty: false
  stdin_open: false
  tmpfs: []
  volumes: []
  healthcheck: []
  expose: []
  ports:
    - "8080:8080" # HTTP
  develop: []
```

<!--
Properties included in the example above:
- extends
- image
- build
- depends_on
- restart
- platform
- deploy
- network_mode
- networks
- dns
- extra_hosts
- env_file
- environment
- secrets
- user
- working_dir
- read_only
- entrypoint
- command
- tty
- stdin_open
- tmpfs
- volumes_from
- volumes
- healthcheck
- expose
- ports
- develop

Properties not included in the example above:
- annotations
- attach
- blkio_config
- cpu_count
- cpu_percent
- cpu_shares
- cpu_period
- cpu_quota
- cpu_rt_runtime
- cpu_rt_period
- cpus
- cpuset
- cap_add
- cap_drop
- cgroup
- cgroup_parent
- configs
- container_name
- credential_spec
- device_cgroup_rules
- devices
- dns_opt
- dns_search
- domainname
- driver_opts
- external_links
- gpus
- group_add
- hostname
- init
- ipc
- isolation
- labels
- label_file
- links
- logging
- mac_address
- mem_limit
- mem_reservation
- mem_swappiness
- memswap_limit
- models
- oom_kill_disable
- oom_score_adj
- pid
- pids_limit
- post_start
- pre_stop
- privileged
- profiles
- provider
- pull_policy
- runtime
- scale
- security_opt
- shm_size
- stop_grace_period
- stop_signal
- storage_opt
- sysctls
- ulimits
- use_api_socket
- userns_mode
- uts
-->

As a general guideline, we group properties by their high-level purpose — "Build" for constructing the image and "Deploy" for running the container — and order them by scope, relevance, and the chronological order of execution.

- The "Build" group contains properties used in `docker compose build`.
- The "Deploy" group contains properties used in `docker compose up` (excluding the build steps).

An additional group "Extend" is used for the Compose-specific property to define service configuration inheritance.

The following properties are ordered by their scope, relevance and chronological order of execution. Below is the reasoning behind the order of properties, but they are not representative of what Docker really does under the hood.

Properties in the "Build" group are ordered like this:
1. Docker checks if the image exists before building (`image`).
2. Docker looks for the Dockerfile to build the image with the given arguments (`build`).

Properties in the "Deploy" group are ordered like this:
1. Docker checks the service dependencies (`depends_on`).
2. Docker configures how the service should be managed (`restart`).
3. Docker prepares the host platform (`platform`, `deploy`, `networks`, `network_mode`).
4. Docker sets up the container environment (`dns`, `extra_hosts`, `user`, `working_dir`, `environment`).
5. Docker sets the start commands (`entrypoint`, `command`).
6. Docker sets the terminal behavior for when running (`tty`, `stdin_open`).
7. Docker mounts external dependencies in the container on start (`volumes`).
8. Docker checks the running container's health regularly (`healthcheck`).
9. Docker exposes ports to other services and the host (`expose`, `ports`).
10. Docker Watch allows developers to make changes in the running container (`develop`).

As for paths like in `build` and `volumes`, I would recommend using relative paths prefixed with `./` to make it clear that paths are relative to the compose file or the `context` directory.
