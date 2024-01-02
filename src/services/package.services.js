const Package = require("../models/package.model");

const createPackageIntoDB = (userData, payload) => {
  const user = userData?.userId;
  const result = Package.create({ user, ...payload });
  return result;
};

module.exports = { createPackageIntoDB };
