const express = require("express");
const auth = require("../config/auth");
const { createPackage } = require("../controllers/package.controllers");

const packageRoutes = express.Router();

packageRoutes.post("/create-package", auth("operator"), createPackage);

module.exports = packageRoutes;
