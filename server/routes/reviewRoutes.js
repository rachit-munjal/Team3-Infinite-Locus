const express = require('express');
const reviewController = require('../controllers/reviewController.js');
const isAuthenticated = require("../middleware/isAuthenticated.js");
const isAdmin = require('../middleware/isAdmin.js');
const router = express.Router();

router.post("/:businessId", isAuthenticated, reviewController.submitReview);
router.get("/business/:businessId", reviewController.getBusinessReviews);
router.get("/my", isAuthenticated, reviewController.getMyReviews);

router.get("/pending", isAuthenticated, isAdmin, reviewController.getPendingReviews);
router.put("/:reviewId/approve", isAuthenticated, isAdmin, reviewController.approveReview);
router.put("/:reviewId/reject", isAuthenticated, isAdmin, reviewController.rejectReview);

module.exports = router;
