// requiring friend.js data file
var friends = require("../data/friends");

module.exports = function(app) {
    // get route
    app.get("/api/friends", function(req, res) {
        // getting data from friend.js file
        console.log(res);
        res.json(friends);
    });

    // post route
    app.post("/api/friends", function(req, res) {

            // create object to hold best match 
            var bestMatch = {
                name: "",
                photo: "",
                friendDifference: 1000
            };

            // parsing results of latest user
            var userData = req.body;
            var userScores = userData.scores;

            // compare differences between user and friend.js data
            var totalDifference = 0;

            // looping through all of the array of friend in friend.js
            for (var i = 0; i < friends.length; i++) {
                console.log(friends[i].name);
                totalDifference = 0;
            

	            // looping through the array of friend's score
	            for (var j = 0; j < friends[i].scores[j]; j++) {
	                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
	                console.log(totalDifference);

	                // determine which friend is a best match
	                if (totalDifference <= bestMatch.friendDifference) {
	                    bestMatch.name = friends[i].name;
	                    bestMatch.photo = friends[i].photo;
	                    bestMatch.friendDifference = totalDifference;
	                };
	            };
	        };

        // push user info to friend.js file
        friends.push(userData);

        // create json of best matching friend to dynamically add to html
        res.json(bestMatch);

    });

}
