var mysql = require("mysql")
const { connect } = require("http2")
var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"2003",
    database:"burgers_db",
})

connection.connect(function(error){
    if(error){
        console.log(error)
    }
    console.log("connection id ",connection.threadId)
})
module.exports = connection