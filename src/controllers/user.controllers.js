const httpStatus = require("http-status");
const sendResponse = require("../utilities/sendResponse");
const {
  createUserIntoDB,
  loginUserIntoDB,
  updateUserIntoDB,
} = require("../services/user.services");
const User = require("../models/user.model");
const catchAsync = require("../utilities/catchAsync");
const AppError = require("../error/appError");

const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sign Up Successfully",
    data: result,
  });
});

// login user -------
const loginUser = catchAsync(async (req, res) => {
  const result = await loginUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sign Up Successfully",
    data: result,
  });
});

// update user -------------------
const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateUserIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully",
    data: result,
  });
});

module.exports = { createUser, loginUser, updateUser };
