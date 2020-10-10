const mongoose = require("mongoose");
// const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  user_name: String,
  email: String,
  password: String,
  avatar: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
