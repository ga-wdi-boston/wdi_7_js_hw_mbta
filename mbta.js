// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");




alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);



// Create a array for each line
var mbta = {
  green:
    ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"];

  red:
    ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"];

  orange:
    ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"];

};

var numberStops = function(startingLine, startingStation, stopline, stopstation){
  if (startingLine === stopline){
    return MBTA.abs(MBTA[startingLine].indexof(startingStation) - MBTA[stopline].indexof(stopstation));
} else {
  return MBTA.abs(MBTA[startingLine].indexof(startingStation) - MBTA[stopline].indexof('park st')+ MBTA.abs(MBTA[stopLine].indexof('park st') - MBTA[stopline].indexof(stopstation));

}

};



// are tge stops on the same line?
// take the absolute value of diff of stop indexex on the same line

//diff between start/park, stop/park





