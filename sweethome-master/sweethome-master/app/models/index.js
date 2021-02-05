require('dotenv').config();
//const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = process.env.MONGO_URI;

db.house = require("./house-model.js")(mongoose);
db.user = require("./user-model.js")(mongoose);

module.exports = db;
