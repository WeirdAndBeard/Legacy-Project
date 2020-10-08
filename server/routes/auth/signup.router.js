const userRouter = require("express").Router();
//const { db } = require("../../models/users.js");
const User = require("../../models/users.js");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// const db = require("../../../database/connect.js");

// to signup
userRouter.post("/add", async (req, res) => {
  try {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    });
    console.log("user back-end", user);
    const result = await user.save({});
    res.send(result);
  } catch (err) {
    // console.log("[server side error signing up]", err);
    res.send(err);
  }
});

// to get these user data

userRouter.post("/login", async (req, res) => {
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
      token: token
    });
  });
});

// userRouter.post("/addd", async (req, res) => {
//   try {
//     console.log("==========>", req.body);
//     await User.find({ email: req.body.email }).then(data => {
//       if (data) {
//         console.log("data====>", data);
//         if (data.password === req.body.password) {
//           res.send("logged");
//         } else {
//           res.send("pwd  wrong");
//         }
//       } else {
//         res.send("user not found");
//       }
//     });

//     // console.log("[server side]", data);
//     // if (elm.email === req.body.email && elm.password === req.body.password) {
//     // res.send("elm");
//     // }
//   } catch (err) {
//     console.log(err);
//   }
// });

// userRouter.post("/addd", async (req, res) => {
//   User.findOne({ email: req.body.email })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({
//           error: new Error("User not found!")
//         });
//       }
//       bcrypt
//         .compare(req.body.password, user.password)
//         .then(valid => {
//           if (!valid) {
//             return res.status(401).json({
//               error: new Error("Incorrect password!")
//             });
//           }
//           const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
//             expiresIn: "24h"
//           });
//           res.status(200).send({ userId: user._id, token: token });
//         })
//         .catch(error => {
//           res.status(500).send({ error: error });
//         });
//     })
//     .catch(error => {
//       res.status(500).json({
//         error: error
//       });
//     });
// });
// to update usrs's database

// userRouter.put("/register/:id", async (req, res) => {
//   try {
//     User.update({ _id: req.params.id }),
//       {
//         first_name: req.body.FirstName,
//         last_name: req.body.LastName,
//         user_name: req.body.UserName,
//         email: req.body.Email,
//         password: req.body.Password
//       };
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

module.exports = userRouter;
// to delete user's data
