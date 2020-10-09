const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

const MSGSchema = new mongoose.Schema({
  text:String,
  senderId:String,
  RoomId:Number
});

const MSG = mongoose.model("MSG", MSGSchema);

module.exports = MSG;