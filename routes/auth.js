const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/forgot-password', async (req, res) => {
    try {
        const { username } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Here you can add your logic to generate a password reset token, 
        // email the user, or show an alert.
        // For simplicity, we'll just return a success message.
        
        res.status(200).json({ message: 'Password reset link sent to your email!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
