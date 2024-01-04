const express = require("express");
const auth = require("../config/auth");
const {
  createPackage,
  getAllPackage,
} = require("../controllers/package.controllers");

const packageRoutes = express.Router();

packageRoutes.post("/create-package", auth("operator"), createPackage);
packageRoutes.get("/", auth("operator", "admin"), getAllPackage);
module.exports = packageRoutes;
