const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const Auth = require('./routes/auth');
const cors = require('cors');


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.use('/api/auth', Auth); // Authentication routes
app.use('/api/movies', require('./routes/movies')); // Example route for movies

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
