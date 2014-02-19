var lines,
startingLine,
startingStation,
endingLine,
endingStation;

lines = {
  'green': ["haymarket", "government center", "park street", "bolyston", "arlington", "copley"],
  'red': ["south station", "park street", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "haymarket", "park street", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

var withoutSwitch = function(line, startingStation, endingStation) {
  var startingStation_index = lines[line].indexOf(startingStation);
  var endingStation_index = lines[line].indexOf(endingStation);

  return Math.abs(startingStation_index - endingStation_index);
};

var withSwitch = function(line, startingStation, endingStation) {
  var startingStation_index = lines[line].indexOf(startingStation);
  var intersection_index = lines[line].indexOf("park street");
  var endingStation_index = lines[line].indexOf(endingStation);

  return
};

// do something with this maybe? or not necessary?
// if(startingLine === endingLine) {

// }
