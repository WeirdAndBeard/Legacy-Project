const logInRouter = require("express").Router();
const User = require("../../models/users.js");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

/**
 * authenticate user
 */
logInRouter.post("/", async (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
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
      token: token,
      id: user.id
    });
  });
});
// TO GET THE DATA OF THE SPECIFIC USER THA LOGEN IN  AND GOT TOKEN GENERATED FOR UNTIL THE SESSION IS OVER SO THIS FUNCTIN WILL PRIVIDE THE  SPECIFIC USER THAT IS LOGGED IN LIVE TIME THE CLIENT SIDE FUNCTION IS IN THE STORE FOLDER
logInRouter.post("/getuser", async (req, res) => {
  try {
    console.log("req.booody NiGGA Pleease Work !!", req.body);
    const result = await User.findOne({ _id: req.body.id });
    res.send(result);
  } catch (err) {
    console.log("[server side error retirieve up]", err);
    res.send(err);
  }
});
module.exports = logInRouter;
