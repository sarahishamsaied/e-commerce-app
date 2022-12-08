const { Schema, model, Types } = require("mongoose");
const schema = Schema(
  {
    code: {
      type: String,
      unique: true,
      required: [true, "coupon code is required"],
      trim: true,
    },
    expires: {
      type: Date,
      default: new Date("2099-12-12"),
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);
module.exports = model("review", schema);
