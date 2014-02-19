var lines,
    startingLine,
    startingStation,
    endingLine,
    endingStation,
    distance;

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

var distance = function(line, startingLine, endingLine, startingStation, endingStation) {
  var to_int,
      from_int,
      startingStation_index = lines[line].indexOf(startingStation),
      endingStation_index = lines[line].indexOf(endingStation),
      to_int = ,
      from_int = ;
  if(startingLine === endingLine) {
    return Math.abs(startingStation_index - endingStation_index);
  } else {
    to_int = Math.abs(startingStation_index - (startingLine.indexOf("park street"));
    from_int = Math.abs((endingLine.indexOf("park street")) - endingStation_index);
    return to_int + from_int
  }
};
console.log("You'll go" + distance + "stops to get to your destination.")

// var withSwitch = function(lines, startingStation, endingStation) {
//   var startingStation_index = lines[line].indexOf(startingStation);
//   var intersection_index = lines[line].indexOf("park street");
//   var endingStation_index = lines[line].indexOf(endingStation);

//   return
// };

// if(startingLine === endingLine) {
//   var withoutSwitch = function(line, startingStation, endingStation) {
//     var startingStation_index = lines[line].indexOf(startingStation);
//     var endingStation_index = lines[line].indexOf(endingStation);

//     return Math.abs(startingStation_index - endingStation_index);
// };
