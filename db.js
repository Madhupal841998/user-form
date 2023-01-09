const mysql = require('mysql');


const con = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"users",
    connectionLimit: 10,
    multipleStatements: true
});

module.exports = con;

