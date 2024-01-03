const httpStatus = require("http-status");
const { generateToken } = require("../config/jwtConfig");
const AppError = require("../error/appError");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// create user ------------------------------
const createUserIntoDB = async (payload) => {
  const isExists = await User.exists({ email: payload.email });
  if (isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already exists");
  }
  const result = await User.create(payload);

  return result;
};

// login user -------------------------

const loginUserIntoDB = async (payload) => {
  const isExists = await User.findOne({ email: payload.email });
  if (!isExists) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  //check if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isExists.password
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.NOT_FOUND, "Password does not match");
  }
  // Generate a JWT token
  const token = generateToken(isExists);
  const result = await User.findOne({ email: payload.email }, { password: 0 });
  return { user: result, token };
};

// update user into db ------------
const updateUserIntoDB = async (id, payload) => {
  console.log(id, payload);

  // check if the user is exists or not
  const isExists = await User.findById(id);
  if (!isExists) {
    throw new AppError(httpStatus.NOT_FOUND, "This user does not exists");
  }
  const result = await User.findByIdAndUpdate(
    id,
    { bankAccount: payload },
    { new: true, runValidators: true }
  );
  return result;
};

// get single user from db ------------
const getSingleUser = async (id) => {
  const result = await User.findOne({ _id: id });
  return result;
};
module.exports = {
  createUserIntoDB,
  loginUserIntoDB,
  updateUserIntoDB,
  getSingleUser,
};
