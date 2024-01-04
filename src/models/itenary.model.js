const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  cabinAPrice: {
    type: Number,
    required: true,
  },
  cabinBPrice: {
    type: Number,
    required: true,
  },
  cabinCPrice: {
    type: Number,
    required: true,
  },
  cabinDPrice: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  disembarkationPoints: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  embarkationPoints: {
    type: Number,
    required: true,
  },
  itineraryDescription: {
    type: String,
    required: true,
  },
  itineraryName: {
    type: String,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  numberOfDivies: {
    type: Number,
    required: true,
  },
  numberOfNights: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
