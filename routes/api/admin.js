const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// testForm
router.get("/", (req, res) => {
  /*const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  */
  console.log(req.query.uname);

  if (req.query.uname){
    User.findOne({name: req.query.uname}).then(user => {
      if (!user) {
        errors.name = "Пользователь не найден";
        return res.status(404).json(errors);
      }
      return res.status(200).json({...user._doc});
    });

  }else{
    User.find({}).then(users => {
      if (users) {
          return res.status(200).json(users);
      } else {
        errors.name = "не найдено";
        return res.status(400).json(errors); 
      }

    });
  };
  
  
});

module.exports = router;
