const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const runFfmpeg = (inputFile, outputFile, ffmpegCommand) => {
    return new Promise((resolve, reject) => {
        const command = `ffmpeg -i ${inputFile} ${ffmpegCommand} ${outputFile}`;
        
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`FFmpeg Error: ${stderr}`);
                return;
            }
            resolve(outputFile);
        });
    });
};

module.exports = runFfmpeg;