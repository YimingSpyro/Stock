/* 
DIT/FT/1B/06
P1935318
Li Yiming 
*/
var express = require('express');

var app = express();
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const item = require("../model/main.js");


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(urlencodedParser);

const cors = require("cors");
app.use(cors());
app.use(express.static('public'));



// (6) Get all listings in the database.
app.get('/SP500/', function(req, res) {
    console.log("Last MF for servicing GET /SP500/...");

    var statusCode = 0;
    var message = "";
    var sqlCmd = req.query.sqlCmd;

    //contact the model layer
    item.getSP500(sqlCmd, function(err, result) {
        if (err) {
            statusCode = 500;
            message = err;
        } else {
            statusCode = 200;
            message = result;

        }

        // Sending data out
        res.status(statusCode);
        res.type("json")
        res.send(JSON.stringify(message));
    });


});



module.exports = app;