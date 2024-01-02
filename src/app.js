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
const packageRoutes = require("./routes/package.routes");

// use all routes -----9---------
app.use("/api/users", userRoutes);
app.use("/api/packages", packageRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
// not found
app.use(notFound);
module.exports = app;
