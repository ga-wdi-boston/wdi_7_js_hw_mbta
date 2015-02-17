
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
  var green, red , orange;
lines = {
  'green': [ "Haymarket","Government Center","Park Street","Boylston","Arlington","Copley" ],
  'red': [ "Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Park Street","South Station"],
  'orange': ["North Station", "Haymarket", "Park Street", "State Street", "Downtown Crossing", "Chinatown", "Tufts"]
};

var calcIndexDistance = function(line, station1, station2) {
  return Math.abs(lines[line].indexOf(station1) - lines[line].indexOf(station2));
};



var calcStops = function(originLine, origin, destinationLine, destination) {
  if (originLine === destinationLine) {
    return calcIndexDistance(originLine, origin, destination);
  } else {
    return calcIndexDistance(originLine, origin, "Park Street") + calcIndexDistance(destinationLine, destination, "Park Street");
  }
}

alert("Starting at " + startingLine + " : " + startingStation + ", ending at " + endingLine + " : " + endingStation + ": " + calcStops(startingLine, startingStation, endingLine, endingStation));

// console.log(calcStops("green", "Haymarket", "orange", "Tufts"));
// console.log(calcStops("green", "Haymarket", "orange", "North Station"));
// console.log(calcStops("green", "Copley", "orange", "North Station"));
// console.log(calcStops("green", "Copley", "orange", "Tufts"));

