
var startingLine,
startingStation,
endingLine,
endingStation,
lines,
station_index,
distance;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  'green':["haymarket/green", "government center", "park st", "boylston", "arlington", "copley"],
  'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "haymarket/orange", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

station_index = function(line, station) {
	return parseInt(lines[line].indexOf(station));
}


distance = function(start_line, start_station, end_line, end_station) {
	var first_station = station_index(start_line,start_station),
			start_line_park_index = station_index(start_line, "park st"),
			last_station = station_index(end_line,end_station),
			end_line_park_index = station_index(end_line, "park st"),
			start_to_park = (first_station - start_line_park_index),
			end_to_park = (last_station - end_line_park_index);
	return (Math.abs(start_to_park) + Math.abs(end_to_park));
}

result = distance(startingLine, startingStation, endingLine, endingStation);
console.log( "number of stops: " + result);
