const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

const tasksSchema = new mongoose.Schema({
  description: String,
  listId: String,
  adminId: String,
  usersId:[]
 
});

const Task = mongoose.model("Task", tasksSchema);

module.exports = Task;