const { Schema, model, Types } = require("mongoose");
const schema = Schema(
  {
    name: {
      type: String,
      required: [true, "Sub-category name is required"],
      trim: true,
      unique: [true, "Sub-category name must be unique"],
      minlength: [2, "Sub-category name must be at least 2 characters"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image: {
      type: String,
    },
    categoryId: {
      type: Types.ObjectId,
      ref: "category",
    },
  },
  { timestamp: true }
);
module.exports = model("sub_category", schema);
