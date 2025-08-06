const User = require("../models/userModel.js");

const isAdmin = async (req, res, next) => {
  if (!req.id) {
    return res.status(401).json({ message: "Unauthorized: No user ID found" });
  }

  try {

    const user = await User.findById(req.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role === "admin") {
      return next();
    }

    res.status(403).json({ message: "Admin access only" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = isAdmin;