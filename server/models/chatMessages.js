const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

// Chat Messages Schema
const chatMessagesSchema = new mongoose.Schema({
    employee_name: String,
    employee_image: String,
    employee_message: String,
});

// Chat Collection
const Chat = mongoose.model("Chat", chatMessagesSchema);

module.exports = Chat;