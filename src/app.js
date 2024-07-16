const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('I put da city ontop of my back and i put all of da ops in my lungs!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitness-tracker')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
