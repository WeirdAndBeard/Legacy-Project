const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  senderId: String,
  reciverId: String,
  messageText: String
});

const Messages = new mongoose.model("messages", messagesSchema);
module.exports = Messages;
