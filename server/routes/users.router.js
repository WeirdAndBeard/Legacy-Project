const userRouter = require("express").Router();
const User = require("../models/user.js");

/**
 * get users
 */
userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/**
 * Get one user by id
 */
userRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
/**
 * Add user
 */
userRouter.post("/add", async (req, res) => {
  try {
    let {
      email,
      first_name,
      last_name,
      username,
      position,
      gender,
      age,
    } = req.body;
    const newUser = new User({
      email,
      first_name,
      last_name,
      username,
      position,
      gender,
      age,
    });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.status(404).send({ error });
  }
});
/**
 * Delete user
 */
userRouter.delete("/delete/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? console.log({ err }) : res.send("success");
  });
});
/**
 * Update user
 */
userRouter.post("/update/:id", async (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

module.exports = userRouter;
