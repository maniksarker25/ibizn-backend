const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../config/index");
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// middleware for password hash---------------
userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});
userSchema.post("save", function (doc, next) {
  doc.set("password", undefined);
  doc.set("orders", undefined);
  next();
});

const User = model("User", userSchema);

module.exports = User;