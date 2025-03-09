// authController.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.send("Authentication route is working");
};

const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Find user in database
      const user = await User.findOne({ username });
      
      // If user doesn't exist
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      // Check if password matches (assuming passwords are hashed)
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      // Create JWT token
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      
      // Send token in response
      res.status(200).json({ 
        message: 'Login successful',
        token,
        user: { id: user._id, username: user.username }
      });
      
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
};

const registeruser = async (req, res) => {
    console.log("Received registration request:", req.body);
    
    try {
        const { username, password, confirmPassword } = req.body;

        // Basic validation
        if (!username || !password || !confirmPassword) {
            console.log("Missing required fields");
            return res.status(400).json({
                error: "All fields are required"
            });
        }

        console.log("Checking if user exists...");
        // Check if username already exists
        const exist = await User.findOne({ username });
        if (exist) {
            console.log("Username already exists");
            return res.status(400).json({
                error: "Username is already taken"
            });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            return res.status(400).json({
                error: "Passwords do not match"
            });
        }

        console.log("Hashing password...");
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("Creating new user...");
        // Create the new user
        const newUser = await User.create({
            username,
            password: hashedPassword
        });

        console.log("User registered successfully:", newUser.username);
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                username: newUser.username
            }
        });
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({
            error: "An error occurred during registration"
        });
    }
};

module.exports = { test, login, registeruser };
