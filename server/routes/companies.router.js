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
 * Get one company by id
 */
companyRouter.get("/:id", async (req, res) => {
  try {
    const company = await Company.findOne({ _id: req.params.id });
    res.send(company);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/**
 * Create new company
 */
companyRouter.post("/add", async (req, res) => {
  console.log("Im here");
  try {
    const company = new Company(req.body);
    const result = await company.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Error: error happend when trying to create new company");
  }
});
/**
 * Delete company
 */
companyRouter.delete("/delete/:id", (req, res) => {
  Company.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? console.log({ err }) : res.send("success");
  });
});

/**
 * Update company
 */
companyRouter.post("/update/:id", (req, res) => {
  Company.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

// Delete Company
companyRouter.delete("/delete/:id", (req, res) => {
  Company.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.send("success");
  });
});

// Edit Company
companyRouter.post("/update/:id", (req, res) => {
  Company.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

module.exports = companyRouter;
