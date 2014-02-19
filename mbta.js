var tripCount = function(){
	var lines = {'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  					   'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  					   'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
  					  };
  return function(){
  	var startingLine = prompt("Enter the Starting Line: "),
				startingStation = prompt("Enter the Starting Station"),
				endingLine = prompt("Enter the Ending Line"),
				endingStation =  prompt("Enter the Ending Station");
		alert("Staring at " + startingLine + " : " + startingStation);
		alert("Ending at " + endingLine + " : " + endingStation);
  	if(startingLine === endingLine){
			return Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation));
		} else {
			return (Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf("part st")) + Math.abs(lines[endingLine].indexOf(endingStation) - lines[endingLine].indexOf("park st")));
		}
	}
}, stopCount = tripCount();

alert("Total number of stops for the trips is " + stopCount());







