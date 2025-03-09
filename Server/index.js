const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// Ensure MONGO_URI is available
if (!process.env.MONGO_URI) {
  console.error('MongoDB URI is missing. Please check your .env file.');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1); 
});

// Routes
app.use('/', require('./routes/authRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));