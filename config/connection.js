const mysql2 = require("mysql2")

const db = mysql2.createPool({
    host : "localhost",
    database : "monitoring",
    user : "naufal",
    password : "naufal23"
})

if(!db){
    console.log("Connection Lost")
}else{
    console.log("Connect")
}

module.exports = db.promise()