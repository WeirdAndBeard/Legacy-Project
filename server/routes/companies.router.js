const companyRouter = require("express").Router();
const Company = require("../models/companies.js");

// Get unique company for each employee
companyRouter.get("/companies", async (req, res) => {
  try {
    const companies = await Company.find();
    res.send(companies);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Create new Company
companyRouter.post("api/companies/add", async (req, res) => {
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

// Delete Company
companyRouter.delete("/delete/:id", (req, res) => {
  Company.deleteOne({ _id: req.params.id }, (err, data) => {
      err ? console.log(err) : res.send('success');
  })
})

// Edit Company
companyRouter.post("/update/:id", (req, res) => {
  Company.updateOne({ _id: req.params.id }, {$set:req.body}, (err, data) => {
      err ? console.log(err) : res.send(data);
  })
})



module.exports = companyRouter;
