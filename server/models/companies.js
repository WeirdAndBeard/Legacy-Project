const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

const CompanySchema = new mongoose.Schema({
  companyName: String,
  description: String,
  imageUrl: String,
  adminId: String,
  employee: []
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
