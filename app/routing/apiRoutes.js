var friendsData = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    
    
    var choices = req.body.choices;
    var scores = [];
    for (f of friendsData) {
        var fScore = 0;
        for(var i = 0; i < 10; i++) {
            var c = 0;
            if(choices[i].length !== 0) {
                c = choices[i];
            }
            absDiff = Math.abs(f.scores[i] - c);
            fScore += absDiff;
        }
        scores.push(fScore);
    }
    var friendIndex = scores.indexOf(Math.min.apply(Math, scores));
    var match = friendsData[friendIndex];
    console.log(friendsData[friendIndex]);
    
    var bestMatch = {
        name: match.name,
        photo: match.photo
    }
    res.send(bestMatch);
    //get the data from the front end
    //loop through all the friends in the DB and match them
    // respond back with who has the closest answer
    //one loop friends.length
    //another loop for scores.length
    //
  
  });

};
