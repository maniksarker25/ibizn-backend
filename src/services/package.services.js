const Package = require("../models/package.model");

const createPackageIntoDB = (userData, payload) => {
  const user = userData?.userId;
  const result = Package.create({ user, ...payload });
  return result;
};

// get all packages into db
const getAllPackageIntoDB = async (id) => {
  const result = await Package.find({ user: id });
  return result;
};

module.exports = { createPackageIntoDB, getAllPackageIntoDB };
