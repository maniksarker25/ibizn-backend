const httpStatus = require("http-status");
const { generateToken } = require("../config/jwtConfig");
const AppError = require("../error/appError");
const User = require("../models/user.model");

const createUserIntoDB = async (payload) => {
  const isExists = await User.exists({ email: payload.email });
  if (isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already exists");
  }
  const result = await User.create(payload);
  // Generate a JWT token
  const token = generateToken(result);
  return { result, token };
};

module.exports = { createUserIntoDB };
