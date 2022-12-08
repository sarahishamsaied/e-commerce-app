const { Schema, model, Types } = require("mongoose");
const schema = Schema(
  {
    name: {
      type: String,
      required: [true, "Brand name is required"],
      trim: true,
      unique: [true, "Brand name must be unique"],
      minlength: [2, "Brand name must be at least 2 characters"],
    },
    image: {
      type: String,
    },
  },
  { timestamp: true }
);
module.exports = model("brand", schema);
