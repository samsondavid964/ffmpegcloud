class FfmpegController {
    async processFile(req, res) {
        try {
            const { file } = req;
            const { command } = req.body;

            if (!file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            if (!command) {
                return res.status(400).json({ error: 'No command provided' });
            }

            const outputFilePath = await runFfmpeg(file.path, command);

            res.download(outputFilePath, (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Error downloading file' });
                }
            });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred during processing' });
        }
    }
}

module.exports = FfmpegController;