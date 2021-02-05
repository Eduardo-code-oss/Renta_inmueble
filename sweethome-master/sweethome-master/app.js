require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

mongoose.connect(process.env.MONGO_URI,{

    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DBNAME,
    retryWrites: true,
    w: "majority"
}).then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});

require("./app/routes/house-route.js")(app);
require("./app/routes/user-route.js")(app);


// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is running on port '+ PORT);
});
//console.log(process.env);