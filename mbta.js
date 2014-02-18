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
var lines = {
  'green':['green/haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'orange/haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var station_count = function(startingLine, startingStation, endingLine, endingStation){
  var count = 0;
  if (startingLine === endingLine){
    count = Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf(endingStation));
  } else {
    count = (Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('park st')) + Math.abs(lines[endingLine].indexOf(endingStation) - lines[endingLine].indexOf('park st')));
  };
  return count;
}
var stops = station_count(startingLine, startingStation, endingLine, endingStation);
alert('You will take ' + stops + ' stations totally!');


