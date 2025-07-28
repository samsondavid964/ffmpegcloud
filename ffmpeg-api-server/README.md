# FFMPEG API Server

This project is an API server that utilizes FFmpeg for processing multimedia files. It is built using Node.js and Express, and it exposes an HTTP endpoint for file uploads and processing commands.

## Project Structure

```
ffmpeg-api-server
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── ffmpeg.js         # Defines routes for FFmpeg processing
│   ├── controllers
│   │   └── ffmpegController.js # Contains logic for processing files
│   └── utils
│       └── ffmpegRunner.js    # Utility functions to run FFmpeg commands
├── package.json               # NPM configuration file
├── .gitignore                 # Files and directories to ignore by Git
└── README.md                  # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ffmpeg-api-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   npm start
   ```

## API Usage

### Endpoint

- **POST /ffmpeg/process**

### Request

- **Headers:**
  - `Content-Type: multipart/form-data`
  
- **Body:**
  - `file`: The multimedia file to be processed.
  - `command`: The FFmpeg command to execute (as a string).

### Response

- The server will respond with the processed file or an error message.

## Example

To process a video file, you can use a tool like Postman or cURL to send a request to the API:

```bash
curl -X POST http://localhost:3000/ffmpeg/process \
  -F "file=@path/to/your/video.mp4" \
  -F "command=your_ffmpeg_command_here"
```

## License

This project is licensed under the MIT License.