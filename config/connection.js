//connection to mysql
var mysql = require("mysql");
var connection;
//linking mysql to heroku
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
//regular connection through node
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jdb12345!",
    database: "burgers_db"
});
};
connection.connect(function(err){
    if(err){
        console.error("error:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
//exports connection
module.exports = connection;