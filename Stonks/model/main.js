var db = require("./databaseConfig");
const bcrypt = require("bcrypt-nodejs")

var userDB = {

    // (1) GET DATA
    getSP500: function(sqlCmd, callback) {
        db.connection.query(sqlCmd, function(err, result) {

            if (err) {
                console.log(err);
                return callback(err, null);
            } else {
                console.log(result);
                return callback(null, result);

            }
        });
    },



};

module.exports = userDB;