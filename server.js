var express = require("express");
var bodyParse = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000

app.use(bodyParse.urlencoded( {extended: true}));
app.use(bodyParse.json());

require("/routing/apiRoutes")(app);
require("/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("application listening on PORT: " + PORT);
});