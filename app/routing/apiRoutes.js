// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {

var bestMatch = {
    name: "",
    photo: "",
    scoreDiff: Infinity
}
console.log(req.body.choices);
res.send("body Received");
//get the data from the front end
//loop through all the friends in the DB and match them
// respond back with who has the closest answer
//
  
  });

};
