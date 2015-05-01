// Code here.
// var startingLine,
// startingStation,
// endingLine,
// endingStation;

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
var mbta = {
  "green" : ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  "red" : ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
 "orange" : ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
}
// function that selects only number of stops you are travelling

function findStation(stop){
  var station = stop;
  var line;
  if (mbta.green.indexOf(stop) >= 0){
    line = "green";
  } else if (mbta.red.indexOf(stop) >= 0){
    line = "red";
  } else {
    line = "orange";
  }
  var coordinate = {station : station,
                    line : line};
  return coordinate;
}

var s = findStation("copley");
var f = findStation("park st");

console.log(s);
console.log(f);

function countStations(start, finish){
  if (start.line === finish.line){
    console.log(Math.abs(mbta[start.line].indexOf(start.station) - mbta[finish.line].indexOf(finish.station)));
  } else {
    var firstRide = Math.abs(start.line.indexOf(start.station) - start.line.indexOf("park st"));
    var secondRide = Math.abs(finish.line.indexOf(finish.station) - finish.line.indexOf("park st"));
    var totalCount = firstRide + secondRide;
  }

}

countStations(s, f);




