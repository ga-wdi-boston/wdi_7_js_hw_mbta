// // Code here.
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
var lines = {
  'green': ['Haymarket', 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley'],
  'red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'David', 'Alewife'],
  'orange': ['North Station', 'Park Street', 'State', 'DownTown Crossing', 'Chinatown', 'BackBay', 'Forest Hills' ]
};
function trip (startingLine, startingStation, endingLine, endingStation) {
  // if the trip is on the same line
  if (startingLine === endingLine) {
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation));
  } else {
    var toPark = Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('Park Street'));
    var parkToDest = Math.abs(lines[endingLine].indexOf('Park Street') - lines[endingLine].indexOf(endingStation));
    return toPark + parkToDest;
  }
}

console.log(trip('green', 'Boylston', 'red', 'Porter'));

