const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

// Chat Messages Schema
const chatMessagesSchema = new mongoose.Schema({
  user_id:String,
  message: String,
},
{
  timestamps: true
});

// ChatMessage Collection
const ChatMessage = mongoose.model("ChatMessage", chatMessagesSchema);

module.exports = ChatMessage;
