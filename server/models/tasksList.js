const mongoose = require("mongoose");
const db = require("../../database/connect.js");
mongoose.Promise = global.Promise;

const tasksListSchema = new mongoose.Schema({
  title: String,
  userId: String,
  tasksId: [],
});

const TasksList = mongoose.model("TasksList", tasksListSchema);

module.exports = TasksList;
