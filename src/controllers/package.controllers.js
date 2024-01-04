const httpStatus = require("http-status");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createPackageIntoDB,
  getAllPackageIntoDB,
} = require("../services/package.services");

const createPackage = catchAsync(async (req, res) => {
  console.log(req.user);
  const result = await createPackageIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Package created successfully",
    data: result,
  });
});

// get all packages ----------
const getAllPackage = catchAsync(async (req, res) => {
  const result = await getAllPackageIntoDB(req.user?.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Package are retrieved successfully",
    data: result,
  });
});

module.exports = { createPackage, getAllPackage };
