const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    ratings: {
      quality: { type: Number, required: true, min: 1, max: 5 },
      service: { type: Number, required: true, min: 1, max: 5 },
      value: { type: Number, required: true, min: 1, max: 5 },
    },
    photoUrl: {
      type: String
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
