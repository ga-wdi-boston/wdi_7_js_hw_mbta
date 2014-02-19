// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create an array for each line
lines = {
  'red': [
		"south station",	 		// :red[0]
		"park st",				 		// :red[1] *
		"kendall",					  // :red[2]
		"central",					  // :red[3]
		"harvard",						// :red[4]
		"porter",							// :red[5]
		"davis",							// :red[6]
		"alewife"							// :red[7]
	],
	'green': [
		"haymarket",					// :green[0]
		"government center",	// :green[1]
		"park st",						// :green[2] *
		"boylston",						// :green[3]
		"arlington",					// :green[4]
		"copley"							// :green[5]
	],
	'orange': [
		"north station",			// :orange[0]
		"haymarket",					// :orange[1]
		"park st",						// :orange[2] *
		"state",							// :orange[3]
		"downtown crossing",	// :orange[4]
		"chinatown",					// :orange[5]
		"back bay",						// :orange[6]
		"forest hills"				// :orange[7]
	]
};



