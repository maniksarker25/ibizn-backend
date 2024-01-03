const express = require("express");
const auth = require("../config/auth");
const { createResort } = require("../controllers/resort.controllers");
const resortRoutes = express.Router();

resortRoutes.post("/create-resort", auth("operator"), createResort);

module.exports = resortRoutes;
