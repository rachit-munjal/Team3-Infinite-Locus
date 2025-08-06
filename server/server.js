require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
const businessRoutes = require('./routes/businessRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require("./utils/db");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.get('/', (req, res)=>{
    console.log("Hello");
    res.status(200).json({
        message: "Welcome to our CrowdSourcedPlatform",
        success: true
    });
})

app.use("/user", userRoutes);
app.use("/business", businessRoutes);
app.use("/reviews", reviewRoutes);
app.listen(PORT, () => {
    db();
    console.log(`Server is running on http://localhost:${PORT}`);
});
