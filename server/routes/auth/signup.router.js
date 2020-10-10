const signUpRouter = require("express").Router();
const User = require("../../models/users.js");
var bcrypt = require("bcryptjs");

/**
 * registering a new user
 */
signUpRouter.post("/", async (req, res) => {
  try {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    });
    console.log("user back-end", user);
    user.roles.push("admin", "user");
    const result = await user.save();
    res.send(result);
  } catch (err) {
    // console.log("[server side error signing up]", err);
    res.send(err);
  }
});




module.exports = signUpRouter;
// to delete user's data
