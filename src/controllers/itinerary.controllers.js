const httpStatus = require("http-status");
const { createItineraryIntoDB } = require("../services/itinerary.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createItinerary = catchAsync(async (req, res) => {
  const result = await createItineraryIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Itinerary created successfully",
    data: result,
  });
});

module.exports = { createItinerary };
