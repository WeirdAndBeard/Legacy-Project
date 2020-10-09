const chatRouter = require("express").Router();
const Chat = require("../models/chat.js");

/**
 * Get all chat
 */
chatRouter.get("/", async (req, res) => {
    try {
        const Chats = await Chat.find();
        console.log(Chats)
        res.send(Chats);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
module.exports = chatRouter;





