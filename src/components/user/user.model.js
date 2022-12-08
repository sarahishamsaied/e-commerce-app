const { Schema, model, Types } = require("mongoose");
const schema = Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: [true, "Username must be unique"],
      minlength: [3, "Username must be at least 3 characters"],
    },
    firstName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [1, "Name must be at least 1 character"],
    },
    lastName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [1, "Name must be at least 1 character"],
    },
    email: {
      type: String,
      reqired: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm password is required"],
    },
    phone: {
      type: String,
      reqired: [true, "Phone number is required"],
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      trim: true,
      enum: ["ADMIN", "USER"],
    },
    interests: [{ type: Types.ObjectId, references: "category", default: [] }],
    wishList: [{ type: Types.ObjectId, references: "product", default: [] }],
    imgUrl: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
  },
  { timestamp: true }
);
module.exports = model("user", schema);
