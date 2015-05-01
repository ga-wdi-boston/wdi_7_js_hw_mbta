// Code here.
var startingLine= 'red',
startingStation='kendall',
endingLine,
endingStation;

/*startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);*/

// Create a array for each line
var mbta = {
 'green': ["haymarket", "government_center", "park_st", "boylston", "arlington", "copley"],
 'red': ["south_station", "park_st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
 'orange': ["north_station", "haymarket", "park_st", "state", "downtown_crossing", "chinatown", "back_bay", "forest_hills"]
};


function ourTrip(startLine, startStation, stopLine, stopStation){
    var distance;
    if (startLine === stopLine) {
      distance = numStationsOnSameLine(startLine, startStation, stopStation);
      console.log(distance);
    } else {
      distance = numStationsOnDiffLine(startLine, stopLine, startStation, stopStation);
      console.log(distance);
    }
 return distance;
}

function numStationsOnSameLine(line, start, stop) {
  var stations = mbta[line]; //cannot call mbta.line because line isnt a property of mbta; lets you look it up based on the var
                             //the mbta[line] is looking for an expression
  var startIndex = stations.indexOf(start);
  var stopIndex = stations.indexOf(stop);
  var numStops = stopIndex - startIndex;
  return Math.abs(numStops); //math.abs gives a positive number
}


function numStationsOnDiffLine(startLine, stopLine, startStation, stopStation){
    var firstLeg = numStationsOnSameLine(startLine, startStation, "park_st"); //could just remove variables and add the two and remove wholetrip
    var secondLeg = numStationsOnSameLine(stopLine, "park_st", stopStation);
    var wholeTrip = firstLeg + secondLeg;
      return wholeTrip;
}

ourTrip('red', 'central', 'green', 'arlington');



