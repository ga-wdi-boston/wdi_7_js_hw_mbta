// Code here.
var lines,
transferStation,
startingLine,
startingStation,
endingLine,
endingStation,
stopsOn1,
stopsOn2;

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
	if(startingLine === endingLine) {
		return stopsOn1;
	} else {
		return stopsOn1 + stopsOn2;
	}
}

alert('Your total number of stops is: ' + totalStops(startingLine, startingStation, endingLine, endingStation));
alert('Take the ' + startingLine + ' line for ' + stopsOn1 + ' stop(s).');
if(startingLine !== endingLine) {
	alert('Then take the ' + endingLine + ' line for ' + stopsOn2 + ' stop(s).');
}

