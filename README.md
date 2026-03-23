---
title: "D-fence"
shortDescription: "A Chrome extension and Docker-backed system that opens suspicious URLs safely inside an isolated remote container, protecting users from malware and phishing sites."
repoURL: "https://github.com/AnanthuAnil13/D-fence"
liveURL: ""
imageURL: ""
technologies:
  - JavaScript
  - PHP
  - Docker
  - VNC (Virtual Network Computing)
  - Shell Script
  - MySQL
  - Chrome Extensions API
category: "Cybersecurity / Browser Extension"
featured: true
order: 2
status: "Completed"
year: 2021
platform: "Web / Chrome Browser / Linux Server"
visibility: "public"
---

# D-fence

> Open suspicious links safely inside an isolated remote container — directly from your browser.

---

## 📌 Short Description

D-fence is a security-focused system comprising a Chrome browser extension and a server-side Docker backend. When a user encounters a suspicious URL, D-fence spins up a sandboxed remote container, opens the link inside it via VNC, and streams back the session to the user's browser tab — all without ever exposing the local machine to potential threats. After the session ends, the container is automatically destroyed.

---

## 🔗 Links

| Resource   | URL |
|------------|-----|
| Repository | https://github.com/AnanthuAnil13/D-fence |
| Live Demo  | *(Self-hosted — requires a web server setup)* |

---

## 🖼️ Preview

> *(Add a screenshot or GIF of the extension in action)*
> Screenshots are available in the `images/` directory.

---

## 💡 Motivation

According to an Osterman Research report, **60% of organizations have been infected with malware** as a result of web browsing. Existing sandboxing solutions are largely inaccessible to everyday users. D-fence bridges this gap by providing a simple, browser-based sandboxing tool that anyone can install and use.

---

## 🛠️ Technologies Used

| Layer            | Technology                  |
|------------------|-----------------------------|
| Browser Frontend | JavaScript, Chrome Extensions API |
| Backend          | PHP, MySQL, LAMP stack       |
| Containerisation | Docker                      |
| Remote Display   | VNC (Virtual Network Computing) |
| Automation       | Shell Script (`docker.sh`)   |

---

## 📁 Project Structure

```
D-fence/
├── Docker Image/           # Docker configuration for the sandbox container
├── images/                 # Screenshots and visual assets
├── LICENSE                 # Project license
├── README.md               # Project documentation
├── _config.yml             # Jekyll/GitHub Pages config
├── docker.sh               # Script to build/run the Docker sandbox
├── search.js               # Chrome extension logic for link interception
└── test.php                # PHP backend endpoint for container management
```

---

## ⚙️ How It Works

```
User clicks suspicious link
        ↓
Chrome Extension intercepts request (search.js)
        ↓
Request sent to PHP backend (test.php)
        ↓
Backend provisions a Docker container
        ↓
Suspicious URL is opened inside the container
        ↓
VNC session IP is returned to the extension
        ↓
Extension opens the remote session in a new browser tab
        ↓
Session ends → Container is automatically destroyed
```

---

## 🚀 Getting Started

### Prerequisites

- A working web server with **PHP** and **MySQL** (LAMP stack recommended)
- **Docker** installed on the server
- Google Chrome browser

### 1. Clone the Repository

```bash
git clone https://github.com/AnanthuAnil13/D-fence.git
cd D-fence
```

### 2. Configure the Backend

1. Set up your LAMP/LEMP server.
2. Place `test.php` in your web server's document root.
3. Configure the MySQL database as needed (update connection strings in `test.php`).

### 3. Start the Docker Environment

```bash
chmod +x docker.sh
bash docker.sh
```

### 4. Install the Chrome Extension

1. Open Chrome → `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked** → select the extension folder
4. Configure the extension to point to your server's IP/domain

### 5. Use D-fence

Right-click any suspicious URL → select **Open in D-fence Sandbox** → the link opens safely in a remote container tab.

---

## ⚠️ Prerequisites Summary

| Requirement         | Notes |
|---------------------|-------|
| Web Server          | Apache or Nginx with PHP & MySQL |
| Database            | MySQL (modifiable for other DBs) |
| Docker              | Installed on the server host |
| Chrome Browser      | For the extension |

---

## 📋 Metadata

| Field      | Value |
|------------|-------|
| Category   | Cybersecurity / Browser Extension |
| Platform   | Web / Chrome / Linux Server |
| Status     | Completed |
| Year       | 2021 |
| Featured   | Yes |
| Visibility | Public |

---

## 📄 License

This project is licensed under the terms found in the [LICENSE](https://github.com/AnanthuAnil13/D-fence/blob/main/LICENSE) file.

---

## 👤 Author

**AnanthuAnil13**
GitHub: [@AnanthuAnil13](https://github.com/AnanthuAnil13)
