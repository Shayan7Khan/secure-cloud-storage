import os
import boto3
import base64
from flask import Flask, request, jsonify, render_template
from dotenv import load_dotenv
from botocore.client import Config
from botocore.exceptions import ClientError

# Load environment variables
load_dotenv()

app = Flask(__name__)

s3_client = boto3.client(
    "s3",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
    region_name=os.getenv("AWS_REGION").strip(),
    config=Config(signature_version="s3v4")
)

BUCKET = os.getenv("S3_BUCKET")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part in request"}), 400
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400
    try:
        s3_client.upload_fileobj(
            Fileobj=file,
            Bucket=BUCKET,
            Key=file.filename,
            ExtraArgs={
                "ContentType": file.content_type
            }
        )
        return jsonify({"message": f"✅ File '{file.filename}' uploaded successfully!"})
    except ClientError as e:
        return jsonify({"error": str(e)}), 500

@app.route("/download", methods=["POST"])
def download_file():
    data = request.get_json()
    file_name = data.get("file_name")
    if not file_name:
        return jsonify({"error": "File name is required"}), 400
    try:
        obj = s3_client.get_object(Bucket=BUCKET, Key=file_name)
        content = obj["Body"].read()
        content_b64 = base64.b64encode(content).decode("ascii")  # send as Base64
        return jsonify({"encrypted_content": content_b64})
    except ClientError as e:
        return jsonify({"error": str(e)}), 500

@app.route("/list-files", methods=["GET"])
def list_files():
    try:
        response = s3_client.list_objects_v2(Bucket=BUCKET)
        files = [obj["Key"] for obj in response.get("Contents", [])]
        return jsonify({"files": files})
    except ClientError as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.getenv("FLASK_PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
