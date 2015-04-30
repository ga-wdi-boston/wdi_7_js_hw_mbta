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

  var green = ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"]
  var red = ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"]
  var orange = ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]

// function that selects only number of stops you are travelling


function countStations(startingStation, startingLine, endingStation, endingLine){
  if (startingLine === endingLine){
    console.log(Math.abs(startingLine.indexOf(startingStation) - startingLine.indexOf(endingStation)));
  } else {
    var firstRide = Math.abs(startingLine.indexOf(startingStation) - startingLine.indexOf("park st"))
    var secondRide = Math.abs(endingLine.indexOf(endingStation) - endingLine.indexOf("park st"));
    var totalRide = firstRide + secondRide;
    console.log(totalRide);
  }
}

countStations("haymarket", green, "harvard", red);

function findStation(stop){
  var Station = stop;
  var Line;
  if (green.indexOf(stop) >= 0){
    Line = "green";
  } else if (red.indexOf(stop) >= 0){
    Line = "red";
  } else {
    Line = "orange";
  }
  var coordinate = [Station, Line];
  console.log(coordinate);
}

findStation("copley");
