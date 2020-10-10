const logInRouter = require("express").Router();
const User = require("../../models/users.js");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

/**
 * authenticate user
 */
logInRouter.post("/", async (req, res) => {
  console.log(req.body);
  User.findOne({ username: req.body.username }, (err, user) => {
    console.log("log in", user);
    if (err) res.status(500).json({ title: "server side error", error: err });

    if (!user) {
      return res
        .status(401)
        .json({ title: "server side error", error: "invalid" });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res
        .status(401)
        .json({ title: "log in failed", error: "invalid data" });
    }
    // ELSE
    let token = jwt.sign({ userId: user._id }, "Between Us Nigga");
    return res.status(200).json({
      title: "Authentication successful",
      token: token
    });
  });
});
module.exports = logInRouter;
