const messagesRouter = require("express").Router();
const Messages = require("../models/messages.js");

messagesRouter.post("/add", async (req, res) => {
  try {
    const messages = Messages(req.body);
    const result = await messages.save({});
    res.send(result);
  } catch (err) {
    res.send("[server side error]", err);
  }
});

messagesRouter.get("/", async (req, res) => {
  try {
    const result = await Messages.find({});
    res.send(result);
  } catch (err) {
    res.send("[server side error]", err);
  }
});

messagesRouter.put("/update/:id", async (req, res) => {
  try {
    var result = await Messages.updateOne(
      {
        _id: req.params.id,
      },
      req.body
    );
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

messagesRouter.delete("/delete/:id", async (req, res) => {
  try {
    Messages.deleteOne(
      {
        _id: req.params.id
      },
      err => {
        if (err) {
          console.log(err);
        }
        res.send("deleted");
      }
    );
  } catch (err) {
    res.send("[server side error]", err);
  }
});

module.exports = messagesRouter;
/* 
post /add
get /
delete /delete/:id
put /updqte/:id 
*/
