const tasksListRouter = require("express").Router();
const TasksList = require("../models/tasksList.js");
const Tasks = require("../models/tasks.js");

/**
 * Get All The TasksList
 */
tasksListRouter.get("/:id/tasks", async (req, res) => {
  try {
    const tasksList = await TasksList.find({ _id: req.params.id });
    const tasks = await Tasks.find({
      _id: { $in: tasksList.tasksId },
    });
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
/**
 * Update Taskslist Name
 */
tasksListRouter.post("/update/:id", async (req, res) => {
  TasksList.updateOne(
    { _id: req.params.id },
    { $set: { title: req.body.newTitle } },
    (err, data) => {
      err ? console.log(err) : res.send(data);
    }
  );
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
 * Add new TasksList
 */
tasksListRouter.post("/add", async (req, res) => {
  try {
    const newTasksList = new TasksList(req.body);
    await newTasksList.save();
    res.send(newTasksList);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = tasksListRouter;
