const express = require('express');
const multer = require('multer');
const FfmpegController = require('../controllers/ffmpegController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const ffmpegController = new FfmpegController();

router.post('/process', upload.single('file'), (req, res) => {
    const command = req.body.command;
    const file = req.file;

    if (!file || !command) {
        return res.status(400).json({ error: 'File and command are required' });
    }

    ffmpegController.processFile(file.path, command)
        .then(outputFile => {
            res.download(outputFile, (err) => {
                if (err) {
                    res.status(500).json({ error: 'Error downloading the file' });
                }
            });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;