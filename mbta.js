// Define variables
var startingLine,
startingStation,
endingLine,
endingStation,
lines,
distanceToIntersection,
start_distance,
end_distance,
total_distance;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// Display alerts to repeat user input back to user
alert("Starting at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create an array for each line
lines = {
  'green':['Haymarket Green', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
  'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'orange': ['Forest Hills', 'Back Bay', 'Chinatown', 'Downtown Crossing', 'State', 'Park St', 'Haymarket Orange', 'North Station']
};

// Define a method to calculate the distance to Park St.
distanceToIntersection = function(lines, line, station){
  var start_index = lines[line].indexOf(station),
  intersection_index_on_start_line = lines[line].indexOf('Park St');
  return Math.abs(start_index - intersection_index_on_start_line);
}

start_distance = distanceToIntersection(lines, startingLine, startingStation);
end_distance = distanceToIntersection(lines, endingLine, endingStation);
total_distance = start_distance + end_distance;

console.log(total_distance);
