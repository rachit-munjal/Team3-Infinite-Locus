const Business = require("../models/businessModel.js");

module.exports.getAllBusinesses = async (req, res) => {
  try {
    const { category, location } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (location) filter.location = new RegExp(location, "i");

    const businesses = await Business.find(filter);
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch businesses" });
  }
};

module.exports.getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ error: "Business not found" });

    res.json(business);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch business" });
  }
};

module.exports.createBusiness = async (req, res) => {
  try {
    const { name, description, category, location } = req.body;

    const business = new Business({
      name,
      description,
      category,
      location,
    });

    const savedBusiness = await business.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    res.status(400).json({ error: "Failed to create business" });
  }
};

