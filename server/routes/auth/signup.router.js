const userRouter = require("express").Router();
const User = require("../../models/users.js");
const db = require("../../../database/connect.js");

// to signup
userRouter.post("/add", async (req, res) => {
  try {
    const user = User(req.body);
    const result = await user.save({});
    res.send(result);
  } catch (err) {
    console.error("[server side error signing up]", err);
    res.status(400).send("[server side error]", err);
  }
});

// to get these user data

userRouter.get("/register", async (req, res) => {
  try {
    const res = await User.find({});
    res.status(200).send(res);
  } catch (err) {
    res.status(400).send(err);
  }
});

// to update usrs's database

userRouter.put("/register/:id", async (req, res) => {
  try {
    User.update({ _id: req.params.id }),
      {
        first_name: req.body.FirstName,
        last_name: req.body.LastName,
        user_name: req.body.UserName,
        email: req.body.Email,
        password: req.body.Password
      };
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = userRouter;
// to delete user's data
