// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
var lines = {
  'green': ["haymarket", "government center", "park street", "bolyston", "arlington", "copley"],
  'red': ["south station", "park street", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "haymarket", "park street", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

