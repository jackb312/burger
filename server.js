//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//sets handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//imports routes and gives the server access 
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
app.listen(PORT, function(){
    console.log("Server listening at localhost:" + PORT);
});
