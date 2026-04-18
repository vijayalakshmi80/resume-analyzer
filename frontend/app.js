async function uploadResume() {
    const fileInput = document.getElementById("resume");
    const formData = new FormData();
    formData.append("resume", fileInput.files[0]);

    const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData
    });

    const data = await res.json();

    document.getElementById("result").innerText =
        "Score: " + data.score + "\n\nFeedback:\n" + data.feedback.join("\n");
}