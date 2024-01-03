const httpStatus = require("http-status");
const { createResortIntoDB } = require("../services/resort.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createResort = catchAsync(async (req, res) => {
  const result = await createResortIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Resort created successfully",
    data: result,
  });
});

module.exports = { createResort };
