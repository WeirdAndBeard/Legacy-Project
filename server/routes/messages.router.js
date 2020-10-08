const messagesRouter = require("express").Router();
const Message = require("../models/messages.js");

/**
 * Get all messages
 */
messagesRouter.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.send(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/**
 * add Message
 */
messagesRouter.post("/add", async (req, res) => {
  try {
    let { text, senderId, RoomId } = req.body;
    const newMessage = new Message({ text, senderId, RoomId });
    await newMessage.save();
    res.send(newMessage);
  } catch (error) {
    res.status(404).send(error);
  }
});

/**
 * delete Message
 */
messagesRouter.delete("/delete/:id", (req, res) => {
  Message.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? console.log({ err }) : res.send("success");
  });
});

/**
 * Update one Message
 */
messagesRouter.post("/update/:id", (req, res) => {
  Message.updateOne(
    { _id: req.params.id },
    { $set: { text: req.body.newText } },
    (err, data) => {
      err ? console.log(err) : res.send(data);
    }
  );
});

module.exports = messagesRouter;
