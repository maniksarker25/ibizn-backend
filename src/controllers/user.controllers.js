const httpStatus = require("http-status");
const sendResponse = require("../utilities/sendResponse");
const {
  createUserIntoDB,
  loginUserIntoDB,
  updateUserIntoDB,
  getSingleUser,
} = require("../services/user.services");
const User = require("../models/user.model");
const catchAsync = require("../utilities/catchAsync");
const AppError = require("../error/appError");
const transporter = require('../config/smtp')
const {generateToken} = require('../config/jwtConfig')
const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body);
  const mailer = await transporter.sendMail({
    from: 'deapth.search.it@gmail.com', // sender address
    to: "safi29317@gmail.com", // list of receivers
    subject: "Email Verification", // Subject line
    text: "Verification", // plain text body
    html: `<div>
    <h1>Welcome to Infinite Blue</h1>
    <br/>
    <p>To verify your email please <a href=${'https://localhost:3000/userverfication/' + generateToken(result)}>click here</a></p>
    </div>`, // html body
  });
  console.log(mailer)
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

// get single user -----------------------
const getSingeUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleUser(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});

module.exports = { createUser, loginUser, updateUser, getSingeUser };
