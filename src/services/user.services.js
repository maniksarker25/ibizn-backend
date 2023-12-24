const { generateToken } = require("../config/jwtConfig");
const User = require("../models/user.model");

const createUserIntoDB = async (payload) => {
  const result = await User.create(payload);
  // Generate a JWT token
  const token = generateToken(result);
  return { result, token };
};

module.exports = { createUserIntoDB };
