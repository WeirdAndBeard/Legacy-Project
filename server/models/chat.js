const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

const ChatSchema = new mongoose.Schema({
 senderId:String,
 text:String
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;