const express = require('express');
const bodyParser = require('body-parser');
const ffmpegRoutes = require('./routes/ffmpeg');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/ffmpeg', ffmpegRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});