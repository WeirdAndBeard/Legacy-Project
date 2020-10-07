const UserRouter = require("express").Router();
const User = require("../models/users.js");

// to signup
UserRouter.post("/register", async (req, res) => {
  try {
    const user = User(req.body);
    const res = await user.save({});
    res.status(200).send(res);
  } catch (err) {
    console.error("[server side error signing up]", err);
    res.status(400).send("[server side error]", err);
  }
});

// to get these user data
UserRouter.get("/register", async (req, res) => {
  try {
    const res = await User.find({});
    res.status(200).send(res);
  } catch (err) {
    res.status(400).send(err);
  }
});

// to updata usrs's database

UserRouter.put("/register/:id", async (req, res) => {
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
