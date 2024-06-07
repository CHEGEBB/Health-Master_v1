const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize express app
const app = express();
const backendPort = process.env.BACKEND_PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Import routes for MongoDB (Patient)
const patientRoutes = require('./routes/patientRoutes');
const geminiRoutes = require('./routes/geminiRoutes'); // Import geminiRoutes

// Use MongoDB (Patient) routes
app.use('/api', patientRoutes);
app.use('/gemini', geminiRoutes); // Use geminiRoutes

// Start the server
app.listen(backendPort, () => {
    console.log(`Backend server is running on port ${backendPort}`);
});
