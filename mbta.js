// Code here.
var lines,
transferStation,
startingLine,
startingStation,
endingLine,
endingStation,
tripInfo;

// Create a array for each line
lines = {
  'green': ['Haymarket', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
  'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'orange': ['North Station', 'Haymarket', 'Park St', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
},
transferStation = 'Park St';

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// alert("Starting at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

var totalStops = function(startingLine, startingStation, endingLine, endingStation){
	var stopsOn1 = Math.abs(lines[startingLine].indexOf(transferStation) - lines[startingLine].indexOf(startingStation));
	var stopsOn2 = Math.abs(lines[endingLine].indexOf(transferStation) - lines[endingLine].indexOf(endingStation));
		return {stopsOn1: stopsOn1, stopsOn2: stopsOn2}
}

tripInfo = totalStops(startingLine, startingStation, endingLine, endingStation);

alert('Your total number of stops is: ' + (tripInfo.stopsOn1 + tripInfo.stopsOn2));
alert('Take the ' + startingLine + ' line for ' + tripInfo.stopsOn1 + ' stop(s).');
if(startingLine !== endingLine) {
	alert('Then transfer at ' + transferStation + ' and take the ' + endingLine + ' line for ' + tripInfo.stopsOn2 + ' stop(s).');
}

