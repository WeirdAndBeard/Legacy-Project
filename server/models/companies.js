const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

// Company Schema
const CompanySchema = new mongoose.Schema({
  companyName: String,
  description: String,
  industry: String,
  website: String,
  location:String,
  adminId: String,
  employee: [],
  email:String,
  address:String

});

// Company Collection
const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
