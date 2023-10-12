("use strict");

// require("dotenv").config();
// const mongodb = require("../models/models"),
//   bcrypt = require("bcrypt"),
//   nodeMailer = require("nodemailer");

// const USER = process.env.USER;
// const PASS = process.env.PASS;

// let transporter = nodeMailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     // should be replaced with real sender's account
//     user: USER,
//     pass: PASS,
//   },
// });

export const prueba = (req, res) => {
  res.status(400);
  res.json({
    error: "no text",
  });
  // mongodb.TestArr.create(req.body, (err, doc) => {
  //   if (err) {
  //     res.status(400);
  //     res.json({
  //       error: "no text",
  //     });
  //   } else {
  //     res.status(200);
  //     res.json(doc);
  //   }
  // });
};
