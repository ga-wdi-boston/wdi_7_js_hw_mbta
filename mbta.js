
var startingLine = prompt("Enter the Starting Line: "),
		startingStation = prompt("Enter the Starting Station"),
		endingLine = prompt("Enter the Ending Line"),
		endingStation =  prompt("Enter the Ending Station"),
		lines = {'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  					 'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  					 'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
  					};

var tripCount = function(startingLine, startingStation, endingLine, endingStation){
	if(lines.startingLine === lines.endingLine){
		return Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation));
	}
	else {
		return (Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf("part st")) + Math.abs(lines[endingLine].indexOf(endingStation) - lines[endingLine].indexOf("part st")))
	}
}

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);
alert("Total number of stops for the trips is " + tripCount(startingLine, startingStation, endingLine, endingStation));








