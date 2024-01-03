const Resort = require("../models/resort.model");

const createResortIntoDB = async (userData, payload) => {
  const result = await Resort.create(payload);
  return result;
};

module.exports = { createResortIntoDB };
