const { createUser } = require("../controllers/user.controllers");

const express = require("express");

const userRoutes = express.Router();

userRoutes.post("/sign-up", createUser);

module.exports = userRoutes;
