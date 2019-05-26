const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// testForm
router.post("/", (req, res) => {
  /*const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  */
  console.log(req.body);

  
  User.findOne({ name: req.body.auth.user.name}).then(user => {

    if (user) {
      for(let n in req.body){
        if (n === "auth") continue;
        user[n] = req.body[n];
      }
      user.save();
    } else {
      errors.name = "не найдено";
      return res.status(400).json(errors); 
    }
  });
  
  return res.status(200).json({cool:"yes"});
});

module.exports = router;
