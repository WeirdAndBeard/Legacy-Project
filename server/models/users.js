const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const usersSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    imageUrl: String,
    email: String,
    birthday: Date,
    job_position: String,
    gender: String,
    created_at: Date,
    token: String,
    company_id: String,
    roles: []
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;
