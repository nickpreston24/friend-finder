/*	Author: Michael Preston
 *	Created Date: "01-30-2019"
 */

var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./app/routing/api-routes") //(app);
require("./app/routing/html-routes.js")(app);
app.listen(PORT, _ => console.log("App listening on PORT: " + PORT));