// // // Code here.
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
function countStation () {
  var lines = {
    'green':['Haymarket', 'Government Center', 'Park','Boylston', 'Arlington', 'Copley'],
    'red': ['South', 'Park', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'orange': ['North', 'Haymarket', 'Park', 'State', 'Downtown', 'Chinatown', 'Back Bay', 'Forest Hills']
  };


  return function (startingLine, startingStation, endingLine, endingStation) {
    if (startingLine === endingLine) {
      console.log(Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation)));
    }
    else {
      var firstBranch = Math.abs(lines[startingLine].indexOf(startingStation)-lines[startingLine].indexOf('Park'));
      var secondBranch = Math.abs(lines[endingLine].indexOf(endingStation)-lines[endingLine].indexOf('Park'));
      console.log(firstBranch+secondBranch);
    }
  }
}

// var planTrip = countStation('green', 'Government Center', 'green', 'Chinatown');
var planTrip = countStation();

planTrip('green','Government Center','red','Kendall');

