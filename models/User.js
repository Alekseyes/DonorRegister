const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user",
    question: {
      text: {type: String},
      isPresent: {type: Boolean}
    }
  },
  status: {
    type: String
  }
});
module.exports = User = mongoose.model("users", UserSchema);
