// Create web server 
// 1. Install express
// 2. Create a web server
// 3. Start the web server
// 4. Handle requests
// 5. Send response
// 6. Handle errors

const express = require('express');
const app = express();
const port = 3000;
const comments = [
    { id: 1, author: 'John Doe', body: 'Hello, world!' },
    { id: 2, author: 'Jane Doe', body: 'Hi there!' }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === Number(req.params.id));
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// Run node comments.js
// Open http://localhost:3000/comments
// Open http://localhost:3000/comments/1
// Open http://localhost:3000/comments/2
// Open http://localhost:3000/comments/3
// Open http://localhost:3000/unknown
// Open http://localhost:3000/error
// Open http://localhost:3000/error