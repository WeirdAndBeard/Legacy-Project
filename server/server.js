const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const companyRouter = require("./routes/companies.router.js");

app.use(express.static(__dirname + "/../dist"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/api/companies", companyRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
