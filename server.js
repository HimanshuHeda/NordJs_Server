// Import necessary modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Log function to save request details to a log file
function logRequest(req) {
    const logEntry = `${new Date().toISOString()} - ${req.method} - ${req.url}\n`;
    const logPath = path.join(__dirname, 'server.log');

    // Append log entry to server.log
    fs.appendFile(logPath, logEntry, (err) => {
        if (err) {
            console.error('Error logging request: ', err);
        }
    });
}

// Create the server
const server = http.createServer((req, res) => {
    // Log the incoming request
    logRequest(req);

    // Define routing
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Us');
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact Us');
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Define the port for the server to listen on
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
