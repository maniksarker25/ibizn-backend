const express = require("express");
const app = express();
const cors = require("cors");
// parser
app.use(express.json());
app.use(cors());

// import all routes ---------

const globalErrorHandler = require("./utilities/globalErrorHandler");
const notFound = require("./utilities/notFound");
const userRoutes = require("./routes/user.routes");

// use all routes -----
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
// not found
app.use(notFound);
module.exports = app;
