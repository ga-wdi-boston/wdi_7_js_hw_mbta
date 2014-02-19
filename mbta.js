// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Starting at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  'green':["Haymarket", "Government Center", "Park St", "Bolyston", "Arlington", "Copley"],
  'red': ["South Station", "Park St", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  'orange': ["North Station", "Haymarket", "Park St", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};


var start_index = parseInt(lines[startingLine].indexOf(startingStation)),
		intersection_start_index = parseInt(lines[startingLine].indexOf('Park St')),
		start_park_index = ((start_index - intersection_start_index) - 1),
		end_index = parseInt(lines[endingLine].indexOf(endingStation)),
		intersection_end_index = parseInt(lines[endingLine].indexOf('Park St')),
		end_park_index = ((end_index - intersection_end_index) - 1),
		total_distance = (Math.abs(start_park_index) + Math.abs(end_park_index));

console.log("This distance is: " + total_distance + " stops.");
