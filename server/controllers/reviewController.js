const Review = require('../models/reviewModel.js');
const Business =  require('../models/businessModel.js');

module.exports.submitReview = async (req, res) => {
  const { text, ratings, photoUrl } = req.body;
  const businessId = req.params.businessId;
  console.log(businessId);
  console.log(req.id);
  try {

    const review = new Review({
      user: req.id,
      business: businessId,
      text,
      ratings,
      photoUrl,
    });
    console.log(review);
    await review.save();
    res.status(201).json({ message: "Review submitted for approval." });
  } catch (err) {
    res.status(400).json({ error: "Failed to submit review" });
  }
};

module.exports.getBusinessReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      business: req.params.businessId,
      status: "approved",
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};

module.exports.getMyReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.id })
      .populate("business", "name")
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user reviews" });
  }
};

module.exports.getPendingReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: "pending" })
      .populate("user", "name")
      .populate("business", "name");

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch pending reviews" });
  }
};

module.exports.approveReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { status: "approved" },
      { new: true }
    );

    if (!review) return res.status(404).json({ error: "Review not found" });

    const approvedReviews = await Review.find({
      business: review.business,
      status: "approved",
    });

    const total = approvedReviews.length;
    const avgRating =
      approvedReviews.reduce(
        (sum, r) =>
          sum + (r.ratings.quality + r.ratings.service + r.ratings.value) / 3,
        0
      ) / total;

    await Business.findByIdAndUpdate(review.business, {
      averageRating: avgRating.toFixed(1),
      totalReviews: total,
    });

    res.json({ message: "Review approved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to approve review" });
  }
};

module.exports.rejectReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { status: "rejected" },
      { new: true }
    );

    if (!review) return res.status(404).json({ error: "Review not found" });

    res.json({ message: "Review rejected" });
  } catch (err) {
    res.status(500).json({ error: "Failed to reject review" });
  }
};
