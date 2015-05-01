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

// Create a array for each line
var mbta = {
  green: ["haymarket", "government_center", "park_st", "bolyston", "arlington", "copley"],
  red: ["south_station", "park_st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  orange: ["north_station", "haymarket", "park_st", "state", "downtown_crossing", "chinatown", "back_bay", "forest_hills"]
};

function ourTrip(start_ln, start_st, dest_ln, dest_st){
  console.log("start line " + start_ln);
  console.log("start station " + start_st);
  console.log("dest line " + dest_ln);
  console.log("dest line " + dest_st);

  var distance;

  if(start_ln === dest_ln){
    distance = Math.abs(mbta[start_ln].indexOf(start_st) - mbta[dest_ln].indexOf(dest_st));
  }else {
    var firsthalf = Math.abs(mbta[start_ln].indexOf(start_st) - mbta[start_ln].indexOf("park_st"));
    var secondhalf = Math.abs(mbta[dest_ln].indexOf("park_st") - mbta[dest_ln].indexOf(dest_st));

    distance = firsthalf + secondhalf;

  }

  return distance;

}


ourTrip(startingLine, startingStation, endingLine, endingStation );
