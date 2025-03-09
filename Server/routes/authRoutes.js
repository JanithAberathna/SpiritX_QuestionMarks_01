const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registeruser, login } = require('../controllers/authController');

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

// Test route
router.get('/', test);

// Auth routes
router.post('/signup', registeruser);
router.post('/login', login);

module.exports = router;