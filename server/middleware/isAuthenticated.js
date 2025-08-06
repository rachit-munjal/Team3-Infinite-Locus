const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;

    try {
        if (!token) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Authentication Failed' });
    }
}

module.exports = isAuthenticated;