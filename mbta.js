// Code here.
var startingLine = "Green",
startingStation = "Copley",
endingLine = "Orange",
endingStation = "Forest Hills";

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
var lines = {
  'Green':["Haymarket", "Government Center", "Park", "Boylston", "Arlington", "Copley"],
  'Red': ["South Station", "Park", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  'Orange': ["North Station", "Haymarket", "Park", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};

var startIndex = lines[startingLine].indexOf(startingStation);
var endIndex = lines[endingLine].indexOf(endingStation);
var toPark = Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf("Park"));
var fromPark = Math.abs(lines[endingLine].indexOf(endingStation) - lines[endingLine].indexOf("Park"));

var sameLine = function(p1, p2) {return Math.abs(startIndex - endIndex);}



var diffLine = function(p1, p2) {return Math.abs(toPark + fromPark);}

function getTrain (p1, p2) {
  if (startingLine === endingLine) {
    return sameLine();{

    } else {
      return diffLine();
    }
  }

  console.log(getTrain());



