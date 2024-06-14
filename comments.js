// Run the server
// Create a router
// Create a route
// Send a response

// Create a web server
const http = require('http');
const server = http.createServer();

// Run the server
server.listen(3000);

// Create a router
const commentsRouter = require('./routes/comments');

// Create a route
server.on('request', (req, res) => {
    if (req.url === '/comments') {
        commentsRouter(req, res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});