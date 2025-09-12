# Secure Cloud Storage 🚀

[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3.3-orange)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A **client-side encrypted cloud storage** web application using **Flask**, **AWS S3**, and **CryptoJS**. Encrypt your files in the browser and securely upload them to S3. Only users with the correct key can decrypt files on download.

---

## Features ✨

- AES encryption **before upload** (client-side)
- Secure uploads to AWS S3 with **server-side encryption**
- List all uploaded files dynamically
- Download and decrypt files using the **correct key**
- Protect sensitive credentials with a `.env` file

---

## Tech Stack 🛠️

- **Frontend:** HTML, CSS, JavaScript, [CryptoJS](https://cryptojs.gitbook.io/docs/)
- **Backend:** Python, Flask
- **Cloud Storage:** AWS S3
- **Environment Management:** Python-dotenv

---

## Quick Start ⚡

1. **Clone the repo**

```bash
git clone <your-repo-url>
cd secure-cloud-storage
Install dependencies

bash
Copy code
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
Configure environment variables

Create a .env file in the project root:

text
Copy code
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
S3_BUCKET=your_s3_bucket_name
FLASK_PORT=5000
⚠️ Ensure .env is included in .gitignore to keep your credentials safe.

Run the app

bash
Copy code
python app.py
Open in browser

arduino
Copy code
http://localhost:5000
Usage 📝
Upload a file

Select a file.

Enter an encryption key.

Click "Upload".

List files

Click "Refresh File List".

Download & decrypt

Click "Download & Decrypt".

Enter the correct encryption key to decrypt.

Wrong key will fail decryption. ✅ Only the correct key can restore the original file.

Security 🔒
Files are never sent unencrypted to the server.

AWS S3 server-side encryption (AES256) adds extra protection.

Sensitive data is stored in .env and excluded from Git.

License 📄
MIT License © 2025 Shayan Khan
