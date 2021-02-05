//const { Router } = require("express");


module.exports = function(app){
    const userController = require("../controllers/user-controller.js");
    const env = "/api/user/";
    //var router = require("express").Router();

    app.post(env + "save",userController.create);
    app.get(env + "findbyId/:id",userController.findbyID);


};