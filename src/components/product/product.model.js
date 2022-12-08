const { Schema, model, Types } = require("mongoose");
const schema = Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      unique: [true, "Product name must be unique"],
      minlength: [2, "Product name must be at least 2 characters"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [10, "Product description must be at least 10 characters"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    color: [String],
    price: {
      type: Number,
      default: 0,
      required: [true, "Product Price is required"],
    },
    priceAfterDiscount: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    imageCover: String,
    images: [String],
    categoryId: {
      type: Types.ObjectId,
      ref: "category",
      required: [true, "Product category is required"],
    },
    subCategoryId: {
      type: Types.ObjectId,
      ref: "sub_category",
      required: [true, "Product sub-category is required"],
    },
    brandId: {
      type: Types.ObjectId,
      ref: "brand",
      required: [true, "Product brand is required"],
    },
    rateAvergae: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);
module.exports = model("product", schema);
