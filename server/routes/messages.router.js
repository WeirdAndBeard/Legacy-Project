const messagesRouter = require("express").Router();
const db = require("../../database/connect.js");
const MSG = require("../models/companies.js");



/**
 * Get all messages
 */
messagesRouter.get("/", async (req, res) => {
    try {
      const messages = await MSG.find();
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
    try{
        let {text,senderId,RoomId}=req.body;
        const newMSG = new MSG({text,senderId,RoomId});
        await newMSG.save();
        res.send(newMSG);
    }catch(error){
        res.status(404).send(error)
    }
})
/**
 * delete Message
 */




module.exports = messagesRouter;