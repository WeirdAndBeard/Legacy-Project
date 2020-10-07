const companyRouter = require("express").Router();
const Company = require("../models/companies.js");

/**
 * Get all companies of a user
 */
companyRouter.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.send(companies);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
/**
 * Create new company
 */
companyRouter.post("/add", async (req, res) => {
  try {
    const company = new Company(req.body);
    const result = await company.save();
    console.log(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Error: error happend when trying to create new company");
  }
});

module.exports = companyRouter;
