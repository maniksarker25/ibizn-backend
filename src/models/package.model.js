const { Schema, model } = require("mongoose");

const packageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  packageName: {
    type: String,
    required: true,
  },
  numberOfDay: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  numberOfDivies: {
    type: Number,
    required: true,
  },
  fulBoard: {
    type: Boolean,
    required: true,
  },
  breakfast: {
    type: Boolean,
    required: true,
  },
  upgradeable: {
    type: Boolean,
    required: true,
  },
  drivingCourses: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Package = model("Package", packageSchema);

module.exports = Package;
