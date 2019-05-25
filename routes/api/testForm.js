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

  /*
  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      errors.name = "Имя уже используется";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        status: "статус"
      });
      newUser.question = {text:"текст", isPresent: true},

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
  */
  return res.status(200).json({cool:"yes"});
});

router.post('/admin',(req, res) => {console.log("Заработало"); return res.status(200)});
module.exports = router;
