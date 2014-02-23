// Code here.
var startingLine,
startingStation,
endingLine,
endingStation,
distanceToIntersection,
index,
startToIntersection,
endToIntersection,
totalDistance;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  'green':['Haymarket', 'Government center', 'Park Street', 'Bolyston', 'Arlington', 'Copley'],
  'red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back bay', 'Forest Hills']
};

var distanceToIntersection = function(line, station) {
    var index = Math.abs(lines[line].indexOf(station) - lines[line].indexOf('Park Street'));
    return index;
  }


startToIntersection = distanceToIntersection(startingLine, startingStation);
endToIntersection = distanceToIntersection(endingLine, endingStation);

totalDistance = (startToIntersection + endToIntersection);

alert("The total number of stops is " + totalDistance + " stops.");
