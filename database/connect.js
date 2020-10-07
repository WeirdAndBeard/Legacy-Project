const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost/legacy_project", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;
