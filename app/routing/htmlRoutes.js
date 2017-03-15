// dependencies for this file
var path = require("path");


module.exports = function(app) {
    // route for survey.html file
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // route for home.html file
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });

};
