const httpStatus = require("http-status");
const sendResponse = require("../utilities/sendResponse");
const { createUserIntoDB } = require("../services/user.services");
const User = require("../models/user.model");
const catchAsync = require("../utilities/catchAsync");
const AppError = require("../error/appError");

const createUser = catchAsync(async (req, res, next) => {
  const result = await createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sign Up Successfully",
    data: result,
  });
});

module.exports = { createUser };
