
module.exports = function(app) {
    const houseController = require("../controllers/house-controller.js");

    //var router = require("express").Router();
    const env = "/api/house/";

    app.post(env +"save",houseController.create );
    app.get(env + "findAll",houseController.findAll);
    app.get(env + "findId/:id",houseController.findbyID);
    app.put(env + "updateId/:id",houseController.update);
    app.delete(env + "deleteId/:id",houseController.delete)
};