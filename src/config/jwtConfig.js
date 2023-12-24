const jwt = require("jsonwebtoken");
const config = require("../config/index");

const generateToken = (user) => {
  const payload = {
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
    },
  };

  return jwt.sign(payload, config.jwt_secret, { expiresIn: "1h" }); // You can adjust the expiration time as needed
};

module.exports = { generateToken };
