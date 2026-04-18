const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const cors = require("cors");
const analyzeResume = require("./analyzer");

const app = express();
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("resume"), async (req, res) => {
    try {
        const pdfBuffer = req.file.buffer;
        const data = await pdfParse(pdfBuffer);
        const text = data.text;

        const result = analyzeResume(text);

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Error processing resume" });
    }
});

app.listen(5000, () => console.log("Backend running on port 5000"));