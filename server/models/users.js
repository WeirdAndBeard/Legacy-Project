const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    username: { type: String, unique: true },
    password: String,
    imageUrl: String,
    email: String,
    age: Number,
    job_position: String,
    gender: String,
    created_at: Date,
    token: { type: String, unique: true },
    company_id: { type: String, unique: true },
    roles: []
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;
