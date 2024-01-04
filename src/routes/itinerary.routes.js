const express = require("express");
const auth = require("../config/auth");
const { createItinerary } = require("../controllers/itinerary.controllers");

const itineraryRoutes = express.Router();

itineraryRoutes.post("/create-itinerary", auth("operator"), createItinerary);

module.exports = itineraryRoutes;
