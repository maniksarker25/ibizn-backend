const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "deapth.search.it@gmail.com",
    pass: "rsvo pzjj lnxx afzq",
  },
});

module.exports = transporter