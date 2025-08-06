const user = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.register = async (req, res) => {
    console.log(req.body);
    try{
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" ,
            success: true,
            user: newUser
        });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }

        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.cookie('token', token, { httpOnly: true, sameSite: 'strict', maxAge: 3600000 });
        
        res.status(200).json({
            message: "Login successful",
            success: true,
            user: existingUser,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports.profile = async (req, res) => {
  try {
    const userId = req.id;

    const existingUser = await user.findById(userId).select("-password");
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.status(200).json({
      message: "Profile fetched successfully",
      success: true,
      user: existingUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
