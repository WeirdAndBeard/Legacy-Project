const chatRouter = require("express").Router();
const ChatMessage = require("../models/chatMessages.js");
const User=require("../models/users.js")




// Get Chat messages
chatRouter.get("/", async (req, res) => {
  try {
    const chat = await ChatMessage.find({});
    res.send(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


// Add new message
chatRouter.post("/add", async (req, res) => {
  console.log("msg")
  try {
    const message = new ChatMessage(req.body);
    const result = await message.save();
    let user= await User.findById(req.body.userid);
    res.send({result:result.message,username:user.username});
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete Message
chatRouter.delete("/delete/:id", (req, res) => {
  ChatMessage.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.send("success");
  });
});

// Edit Message
chatRouter.post("/update/:id", (req, res) => {
  ChatMessage.updateOne(
    { _id: req.params.id },
    { $set: req.body },
    (err, data) => {
      err ? console.log(err) : res.send(data);
    }
  );
});


module.exports = chatRouter;
