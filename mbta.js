// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// Set intersection
var intersection = 'park st';

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
var lines = {
  'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};



// Finds the index of the starting point
var findIndex = function(lines, line, stop){
	return lines[line].indexOf(stop);
}


// Set index values for starting point, ending point, and park st points
var start_index = findIndex(lines, startingLine, startingStation);
var end_index = findIndex(lines, endingLine, endingStation);
var start_park = findIndex(lines, startingLine, intersection);
var end_park = findIndex(lines, endingLine, intersection);


// Compute total stops
var stops = 0;
if (startingLine === endingLine) {
	stops = Math.abs(start_index - end_index);
} else {
	stops += Math.abs((start_index - start_park));
	stops += Math.abs((end_index - end_park));
}


// alert total stops
alert('You are going to have to make ' + stops + ' stops.');



