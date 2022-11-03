# Cheat sheet

---

## SSH Key

1. **Generate SSH keys:**

   ```bash
   ssh-keygen -t rsa -f /Users/Shared/.ssh/id_rsa
   ```

2. **Add SSH certificates to local config**

   ```bash
   sudo nano ~/.ssh/config
   ```

   Add folow code:

   ```config
   Host *
     AddKeysToAgent yes
     UseKeychain yes
     IdentityFile /Users/Shared/.ssh/id_rsa
   ```

3. **Upload SSH Key to server:**

   ```bash
   sudo ssh-copy-id -i /Users/Shared/.ssh/id_rsa root@127.127.127.127
   ```

---

## GIT

1. **Beautiful GIT LOG:**

   ```bash
   git config --global alias.plog "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
   ```

2. ```bash
   git plog
   ```

---

## Install/Update Python on MacOS (brew installer)

```bash
1. brew unlink python3
2. brew cleanup python3
3. brew install python@3.11
4. rm /usr/local/bin/python3
5. ln -s /usr/local/Cellar/python@3.11/3.11.0/bin/python3.11 /usr/local/bin/python3
6. python3 --version
```
