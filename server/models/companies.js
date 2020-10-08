const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

// Company Schema
const CompanySchema = new mongoose.Schema({
  Company_Name: String,
  Industry: String,
  Website: String,
  Location:String,
  adminId: String,
  Description:String,
  date:Date,
  urlImage: String,
  employee: [],
});

// Company Collection
const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
