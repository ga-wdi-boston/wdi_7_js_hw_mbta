// Code here.
var startingLine = "Red",
startingStation = "Central",
endingLine = "Orange",
endingStation = "Forest Hills";

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);




function getStops(startningLine, startingStation, endingLine, endingStation){
  // Create a array for each line
  var lines = {
    'Green':["Haymarket", "Government Center", "Park", "Boylston", "Arlington", "Copley"],
    'Red': ["South Station", "Park", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    'Orange': ["North Station", "Haymarket", "Park", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
  };

  var startIndex = lines[startingLine].indexOf(startingStation),
  endIndex = lines[endingLine].indexOf(endingStation),
  result;

  var toPark = Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf("Park"));

  var fromPark = Math.abs(lines[endingLine].indexOf(endingStation) - lines[endingLine].indexOf("Park"));

  function sameLine(p1, p2){
    return Math.abs(startIndex - endIndex);
  }

  function diffLine(p1, p2) {
    return Math.abs(toPark + fromPark);
  }

  if(startingLine === endingLine){
    result = sameLine(startIndex, endIndex);
  }else{
    result = diffLine(toPark,fromPark);
  }

  return result;
}

console.log(getStops(startingLine, startingStation, endingLine, endingStation));



