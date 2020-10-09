const chatRouter = require("express").Router();
const ChatMessage = require("../models/chatMessages.js");

// Get Chat messages
chatRouter.get("/chat", async (req, res) => {
    try {
        const chat = await ChatMessage.find();
        res.send(chat);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Add new message
chatRouter.post("/chat/add", async (req, res) => {
    try {
        const chat = new ChatMessage(req.body);
        const result = await chat.save();
        console.log(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete Message
chatRouter.delete("/delete/:id", (req, res) => {
    ChatMessage.deleteOne({ _id: req.params.id }, (err, data) => {
        err ? console.log(err) : res.send('success');
    })
})

// Edit Message
chatRouter.post("/update/:id", (req, res) => {
    ChatMessage.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
        err ? console.log(err) : res.send(data);
    })
})


module.exports = chatRouter;
