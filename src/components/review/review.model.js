const { Schema, model, Types } = require("mongoose");
const schema = Schema(
  {
    userId: {
      type: Types.ObjectId,
      references: "user",
      required: [true, "user ID is required"],
      trim: true,
    },
    productId: {
      type: Types.ObjectId,
      references: "product",
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: [true, "Review body is required"],
      minlength: [1, "Too short"],
    },
    rating: {
      type: Number,
      min: [0, "Rating must a positive number"],
      max: [5, "Rating must be less than 5"],
    },
  },
  { timestamp: true }
);
module.exports = model("review", schema);
