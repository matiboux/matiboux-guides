---
title: Configure WSL
---

## Post-installation

### Update your system

Update & Clean all packages:

```sh
sudo apt update && \
sudo apt upgrade -y && \
sudo apt autoremove -y && \
sudo apt clean
```

### Install often-used packages

Install development tools & system utilities:

```sh
# Git
sudo apt install -y git

# cURL
sudo apt install -y curl

# wget
sudo apt install -y wget

# unzip
sudo apt install -y unzip

# tree
sudo apt install -y tree

# htop
sudo apt install -y htop
```

Install [GitHub CLI](https://cli.github.com/):

```sh
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) && \
    sudo mkdir -p -m 755 /etc/apt/keyrings && \
    out=$(mktemp) && \
    wget -nv -O$out https://cli.github.com/packages/githubcli-archive-keyring.gpg && \
    cat $out | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null && \
    sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null && \
    sudo apt update && \
    sudo apt install gh -y
```

Install [jq](https://jqlang.org/):

```sh
# jq
sudo apt install -y jq
```

Install [yq](https://mikefarah.gitbook.io/yq):

```sh
# Download latest release
sudo wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 \
    -O /usr/local/bin/yq && \
    sudo chmod +x /usr/local/bin/yq
```

Install [7-Zip](https://7-zip.org/) CLI:

```sh
# Verify the version at https://7-zip.org/download.html
SEVENZIP_DOWNLOAD_URL='https://7-zip.org/a/7z2409-linux-x64.tar.xz'
rm -rf ./7ztmp && \
mkdir -p ./7ztmp && \
wget "$SEVENZIP_DOWNLOAD_URL" -O - | tar -xJf - -C ./7ztmp && \
sudo mv ./7ztmp/7z* /usr/local/bin/ && \
sudo chmod +x /usr/local/bin/7z* && \
rm -rf ./7ztmp
```

Install [Docker](https://www.docker.com/):

```sh
sudo apt remove -y docker docker-engine docker.io containerd runc 2>/dev/null

sudo apt update && \
sudo apt install -y ca-certificates curl gnupg lsb-release && \
sudo mkdir -m 0755 -p /etc/apt/keyrings && \
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update && \
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo usermod -aG docker $USER

# Relogin to apply group changes
su "$(id -un)"

docker run hello-world
```

Install [dockerc](https://github.com/matiboux/dockerc) & [dockerx](https://github.com/matiboux/dockerx):

```sh
sudo /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/matiboux/dockerc/HEAD/install.sh)"
sudo /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/matiboux/dockerx/HEAD/install.sh)"
```


## Configuration

### Set up your SSH key

Either generate a new SSH key pair:

```sh
# Run this and follow the instructions.
ssh-keygen -t ed25519
```

Or copy an existing SSH private key:

```sh
cp YOUR_SSH_KEY ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
```

### Set up your Git user name & email

```sh
git config --global user.name "John Doe"
git config --global user.email "john.doe@example.com"
```
