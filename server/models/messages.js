const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  senderId: String,
  reciverId: String,
  messageText: String
});

const Message = mongoose.model("Message", messagesSchema);

module.exports = Message;
