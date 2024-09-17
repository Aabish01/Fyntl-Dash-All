const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to allow CORS
app.use(cors());

// Define the /api/data route
app.get('/api/data', (req, res) => {
    res.json({
        message: "Hello, this is your data!"
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
