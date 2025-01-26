// Create web server using express
const express = require('express');
const app = express();
const PORT = 3000;

// Create a route for comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
