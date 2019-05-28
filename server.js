const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");
const testForm = require("./routes/api/testForm");
const admin = require("./routes/api/admin");
const adminSeeder = require("./seed/adminSeeder");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://me:HrrCPkFn3jFWZWmG@cluster0-vwzjt.gcp.mongodb.net/test?retryWrites=true")
  .then(() => {
    console.log("connected to db");
    adminSeeder();
  })
  .catch(error => console.log(error));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/testForm", testForm);
app.use("/api/admin", admin);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));