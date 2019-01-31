var path = require('path');
const directory = __dirname;

module.exports = function (app) {
    app.get("/survey", (req, res) => res.sendFile(path.join(directory, "/../public/survey.html")))
    app.get("*", (req, res) => res.sendFile(path.join(directory, "/../public/home.html")))
}