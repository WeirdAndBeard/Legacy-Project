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
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.body.avatar
    });
    console.log("user back-end", user);
    user.roles.push("admin", "user");
    const result = await user.save({});
    res.send(result);
  } catch (err) {
    // console.log("[server side error signing up]", err);
    res.send(err);
  }
});

signUpRouter.put("/avatar/:id", async (req, res) => {
  console.log("====>", req.params.id);
  try {
    let avatarData = await User.findOneAndUpdate(
      { _id: req.params.id },
      { avatar: req.body.avatar },
      { new: true }
    );
    console.log("====>", avatarData);
    res.send(avatarData);
  } catch (err) {
    res.send(err);
  }
});
module.exports = signUpRouter;
// to delete user's data
