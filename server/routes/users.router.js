const usersRouter = require("express").Router();
const { catch } = require("../../database/connect.js");
const User = require("./../models/users.js");


usersRouter.post("/add", async (req, res) => {
    try{
        const user = new User(req.body);
        const result = user.save();
        res.send(result);
    }
    catch(err){
        
    }
})




module.exports = usersRouter;