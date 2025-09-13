const HEADER = "SECURECLOUD::";

async function uploadFile() {
    const fileInput = document.getElementById("uploadFile");
    const keyInput = document.getElementById("encryptionKey");
    const file = fileInput.files[0];
    const key = keyInput.value.trim();
    if (!file || !key) { alert("Select file and enter key!"); return; }

    const arrayBuffer = await file.arrayBuffer();
    const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
    const base64Data = CryptoJS.enc.Base64.stringify(wordArray);
    const toEncrypt = HEADER + base64Data;
    const encrypted = CryptoJS.AES.encrypt(toEncrypt, key).toString();
    const blob = new Blob([encrypted], { type: "text/plain" });

    const formData = new FormData();
    formData.append("file", blob, file.name + ".enc");

    try {
        const res = await fetch("/upload", { method: "POST", body: formData });
        const data = await res.json();
        document.getElementById("uploadResult").innerText =
            data.error ? "❌ " + data.error : data.message;
        listFiles();
        fileInput.value = "";
        keyInput.value = "";
    } catch (err) {
        alert("❌ Upload failed: " + err.message);
    }
}

async function listFiles() {
    try {
        const res = await fetch("/list-files");
        const data = await res.json();
        const ul = document.getElementById("fileList");
        ul.innerHTML = "";
        if (data.error) {
            ul.innerHTML = `<li style="color:red">${data.error}</li>`;
            return;
        }
        if (!data.files || data.files.length === 0) {
            ul.innerHTML = "<li>No files found.</li>";
            return;
        }
        data.files.forEach(file => {
            const li = document.createElement("li");
            li.textContent = file;
            const btn = document.createElement("button");
            btn.className = "btn-success";
            btn.textContent = "Download & Decrypt";
            btn.onclick = () => downloadFile(file);
            li.appendChild(btn);
            ul.appendChild(li);
        });
    } catch (err) {
        alert("Failed to load files: " + err.message);
    }
}

async function downloadFile(fileName) {
    const key = prompt("Enter encryption key:");
    if (!key) return;
    try {
        const res = await fetch("/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_name: fileName })
        });
        const data = await res.json();
        if (data.error) {
            alert("Error: " + data.error);
            return;
        }

        const encryptedText = atob(data.encrypted_content); // Base64 decode
        const decrypted = CryptoJS.AES.decrypt(encryptedText, key);
        const utf8 = decrypted.toString(CryptoJS.enc.Utf8);

        if (!utf8.startsWith(HEADER)) {
            alert("❌ Wrong key!");
            return;
        }

        const base64Data = utf8.slice(HEADER.length);
        const bytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
        const blob = new Blob([bytes]);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName.replace(".enc", "");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        alert("✅ File downloaded successfully!");
    } catch (err) {
        alert("❌ Download failed: " + err.message);
    }
}

window.onload = listFiles;
