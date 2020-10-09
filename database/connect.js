const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost/legacyproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;
