const Itinerary = require("../models/itenary.model");

const createItineraryIntoDB = async (userData, payload) => {
  const user = userData?.userId;
  const result = Itinerary.create({ user, ...payload });
  return result;
};

module.exports = { createItineraryIntoDB };
