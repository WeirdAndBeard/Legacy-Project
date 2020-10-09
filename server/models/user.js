const mongoose = require("mongoose");

const db = require("../../database/connect.js");

mongoose.Promise = global.Promise;

const UsreSchema = new mongoose.Schema({
    username: String,
    last_name: String,
    first_name: String,
    position: String,
    email: String,
    gender: String,
    age: String
});

const User = mongoose.model("User", UsreSchema);

module.exports = User;
