# 🔒 Secure Cloud Storage
Your privacy-first cloud storage solution  

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/)  
[![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)](https://flask.palletsprojects.com/)  
[![Docker](https://img.shields.io/badge/Docker-Enabled-blue.svg)](https://www.docker.com/)  
[![AWS S3](https://img.shields.io/badge/AWS-S3-orange.svg)](https://aws.amazon.com/s3/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🌟 Overview
We often upload files to cloud platforms without knowing how safe they are.  
**Secure Cloud Storage** ensures files are encrypted *before leaving your browser*, so not even the server or AWS can see the raw data. Only someone with the correct key can decrypt them.

---

## ✨ Features
- 🔐 **Client-Side Encryption**: AES encryption in the browser with CryptoJS  
- ☁️ **AWS S3 + KMS**: Secure cloud storage with managed encryption keys  
- 🖥️ **Flask Backend**: Lightweight server for handling requests  
- 🐳 **Dockerized**: Easy deployment and consistent environments  
- 📥 **File Flow**:  
  1. User selects a file → browser encrypts with AES  
  2. Flask backend stores it in AWS S3 (with SSE-KMS)  
  3. User downloads and decrypts locally  

---

## 🛠 Tech Stack
**Frontend**  
- CryptoJS (AES Encryption)  
- HTML, CSS, JavaScript  

**Backend**  
- Flask  
- AWS S3 + SSE-KMS  

**Deployment**  
- Docker  

---

## 📥 Installation

### Prerequisites
- Python 3.9+  
- AWS Account with S3 + KMS enabled  
- Docker (optional but recommended)  

### Steps

# Clone the repo
git clone https://github.com/your-username/secure-cloud-storage.git
cd secure-cloud-storage

# Install dependencies
pip install -r requirements.txt

# Run locally
python app.py

# Run with Docker
docker-compose up --build

---


### Usage

Start the app

Upload a file → it is encrypted in the browser

File is stored securely in AWS S3 with server-side encryption

Download file → enter key → browser decrypts back to original


---


### Contributing

We welcome contributions!

Fork the repo

Create your feature branch

git checkout -b feature/amazing-feature


Commit your changes

git commit -m "Add amazing feature"


Push to the branch

git push origin feature/amazing-feature

Open a Pull Request


---



### License

This project is licensed under the MIT License – see the LICENSE
 file for details.

 
 ---

 

### Acknowledgments

Flask community

CryptoJS contributors

AWS for cloud infrastructure

Docker for containerization
