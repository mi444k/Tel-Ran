# Cheat sheet

---

1. **Generate SSH keys:**

   <pre><code>ssh-keygen -t rsa -f /Users/Shared/.ssh/id_rsa</code></pre>

2. **Add SSH certificates to local config**

   `sudo nano ~/.ssh/config`

   Add folow code:

   <pre><code>Host *
     AddKeysToAgent yes
     UseKeychain yes
     IdentityFile /Users/Shared/.ssh/id_rsa</code></pre>

3. **Upload SSH Key to server:**

   <pre><code>sudo ssh-copy-id -i /Users/Shared/.ssh/id_rsa root@127.127.127.127</code></pre>

---
