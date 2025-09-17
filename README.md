# 🔒 Secure Cloud Storage
Your privacy-first cloud storage solution  

A simple, secure, and modern cloud storage web app built with Python (Flask), Docker, and AWS S3. All files are encrypted before storage, ensuring your data stays private. Designed for learning and portfolio demonstration of cloud security concepts.

---

## Introduction

**Secure Cloud Storage** lets you safely upload, store, and download files with end-to-end encryption. The app features a clean, intuitive frontend and a robust backend, all containerized for easy local development.

---

## Features

- 🔒 **Client-side encryption**: Files are encrypted before upload.
- ☁️ **Secure file upload & download**: Only you can decrypt your files.
- 🖥️ **Modern frontend**: Clean HTML, CSS, and JavaScript interface.
- 🐳 **Easy setup**: Run locally with Docker and docker-compose.
- 📚 **Educational**: Built to demonstrate cloud security best practices.

---

## Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML, CSS, JavaScript
- **Cloud Storage:** AWS S3
- **Containerization:** Docker, docker-compose

---

## Installation & Usage

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd secure-cloud-storage
```

### 2. Configure environment variables

Create a `.env` file in the project root with your AWS and Flask settings:

```env
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
S3_BUCKET=your_s3_bucket_name
FLASK_PORT=5000
```

> **Note:** Never commit your `.env` file. It is already in `.gitignore`.

### 3. Build and run with Docker Compose

```bash
docker-compose up --build
```

The app will be available at [http://localhost:5000](http://localhost:5000)

---

## Project Structure

```
secure-cloud-storage/
├── app.py              # Flask backend
├── static/             # Frontend static files (JS, CSS)
├── templates/          # HTML templates
├── requirements.txt    # Python dependencies
├── Dockerfile          # Docker image definition
├── docker-compose.yml  # Multi-container setup
├── .env.example        # Example environment variables
└── README.md           # Project documentation
```

---

## Future Improvements

- User authentication and access control
- File versioning and history
- Support for larger files and resumable uploads
- Improved error handling and notifications
- Deployment guides for AWS/GCP/Azure

---

## License

MIT License © 2025 Shayan Khan
