const auth = require("../config/auth");
const {
  createUser,
  loginUser,
  updateUser,
  getSingeUser,
} = require("../controllers/user.controllers");

const express = require("express");

const userRoutes = express.Router();

userRoutes.post("/sign-up", createUser);
userRoutes.post("/sign-in", loginUser);
userRoutes.put("/update-user/:id", auth("operator"), updateUser);
userRoutes.get("/get-single-user/:id", auth("operator", "admin"), getSingeUser);
module.exports = userRoutes;
