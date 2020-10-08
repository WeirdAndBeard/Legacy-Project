const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

const MessageSchema = new mongoose.Schema({
  text:String,
  senderId:String,
  RoomId:Number
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
