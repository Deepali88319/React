module.exports = app => {
    /// import my controller = make call to findall
    const UserController=require('../db/controller/UserController');
      
    var router = require("express").Router();
    
    router.get("/", UserController.findAll);
    router.get("/:id", UserController.findOne);
    router.post("/adduser", UserController.create);
    router.delete("/:id", UserController.delete);
    // router.update("/update", UserController.delete);
    // register router /api/user
    app.use("/api/user",router);
    
    }
    