const { Schema, model } = require("mongoose");

// schema for food-------------------
const foodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
// schema for accommodation -----------------------
const accommodationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
// schema for diving
const divingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// schema for rooms ----------
const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const resortSchema = new Schema({
  region: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  deactivationPeriod: {
    type: String,
    required: true,
  },
  briefDescription: {
    type: String,
    required: true,
  },
  briefImage: {
    type: String,
    required: true,
  },
  // accommodations: {
  //   type: [accommodationSchema],
  //   required: true,
  // },
  accommodation: {
    type: accommodationSchema,
    required: true,
  },
  // divings: {
  //   type: [divingSchema],
  //   required: true,
  // },
  diving: {
    type: divingSchema,
    required: true,
  },
  // foods: {
  //   type: [foodSchema],
  //   required: true,
  // },
  food: {
    type: foodSchema,
    required: true,
  },
  carousalImages: {
    type: [String],
    required: true,
  },
  facilities: {
    type: [String],
    required: true,
  },
  listOfPackages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Package",
    },
  ],
  rooms: {
    type: [roomSchema],
    required: true,
  },
  inclusions: {
    type: [String],
    required: true,
  },
  exclusions: {
    type: [String],
    required: true,
  },
  equipmentAvailable: {
    type: Boolean,
    default: false,
  },
  diveCourseAvailable: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: String,
    required: true,
  },
  discountTimeFrame: {
    type: String,
    required: true,
  },
  special: {
    type: Boolean,
    default: false,
  },
});

const Resort = model("Resort", resortSchema);

module.exports = Resort;
