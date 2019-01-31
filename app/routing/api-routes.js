var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.get("/api/friends", function (req, res) {
        res.json(friends); //replace w/ best match
    })
}