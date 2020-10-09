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
  employee: [],
  email:String,
  adress:String

});

// Company Collection
const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
