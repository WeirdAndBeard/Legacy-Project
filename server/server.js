const express = require("express");

const port = 3000;
const app = express();

app.use(express.static(__dirname + "/../dist"));

app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}!`);
});
