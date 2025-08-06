require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./utils/db");

app.listen(PORT, () => {
    db();
    console.log(`Server is running on http://localhost:${PORT}`);
});
