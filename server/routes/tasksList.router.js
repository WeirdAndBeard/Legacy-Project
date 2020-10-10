const tasksListRouter = require("express").Router();
const TasksList = require("../models/tasksList.js");
const Task = require("../models/tasks.js");

/**
 * Get all TasksList
 */
tasksListRouter.get("/", async (req, res) => {
  try {
    const tasksList = await TasksList.find();
    res.send(tasksList);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/**
 * Add new TasksList
 */
tasksListRouter.post("/add", async (req, res) => {
  try {
    const tasksList = new TasksList(req.body);
    const result = await tasksList.save();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

/**
 * Update Taskslist Name
 */
tasksListRouter.put("/update/:id", async (req, res) => {
  TasksList.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

/**
 * Delete TasksList
 */
tasksListRouter.delete("/delete/:id", (req, res) => {
  TasksList.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? console.log({ err }) : res.send("success");
  });
});

/**
 * Get All The tasks of one TasksList
 */
tasksListRouter.get("/:id/tasks/", async (req, res) => {
  try {
    const tasksList = await TasksList.findById(req.params.id);
    console.log(tasksList.tasksId);
    const tasks = await Task.find({
      _id: { $in: tasksList.tasksId },
    });
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/**
 * Add completely new task to one tasksList
 */
tasksListRouter.post("/:id/tasks/add", async (req, res) => {
  try {
    const tasksList = await TasksList.findById(req.params.id);
    const task = new Task(req.body);
    const result = task.save();

    tasksList.tasksId.push(task._id);
    tasksList.save();

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * Add an existing task from one tasksList to another
 */
tasksListRouter.put("/:id/tasks/update", async (req, res) => {
  try {
    const toTasksList = await TasksList.findById(req.params.id);
    const fromTasksList = await TasksList.findById(req.body.from._id);

    toTasksList.tasksId.push(req.body.task._id);
    fromTasksList.tasksId.pull(req.body.task._id);
    toTasksList.save();
    fromTasksList.save();

    res.send("success");
  } catch (err) {
    res.send(err);
  }
});

/**
 * Remove a task from tasksList
 */
tasksListRouter.delete("/:id/tasks/delete/:taskId", async (req, res) => {
  try {
    let result = await Task.deleteOne(req.params.taskId);
    let tasksList = await TasksList.findById(req.params.id);

    tasksList.tasksId.pull(req.body.task._id);
    result += await TasksList.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * Updates a task description
 */
tasksListRouter.put("/:id/tasks/update/:taskId", async (req, res) => {
  try {
    let result = await Task.updateOne({ _id: req.params.taskId }, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = tasksListRouter;
