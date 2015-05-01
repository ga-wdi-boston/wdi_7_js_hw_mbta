

// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = 'green';
startingStation = 'boylston';
endingLine = 'green';
endingStation =  'haymarket';

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  'green': ['haymarket', 'goverment center', 'park st', 'boylston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

2
-2

function stopToPark(line, stop) {
  return Math.abs(lines[line].indexOf(stop) - lines[line].indexOf('park st'));

}

function stopIndex(line, stop) {
  return lines[line].indexOf(stop);

}

// function getOff(endingLine, endingStation) {
//   return lines[endingLine].indexOf(endingStation);
// }


function stopCount(startingLine, startingStation, endingLine, endingStation) {
  if (startingLine === endingLine) {
    return Math.abs(stopIndex(endingLine, endingStation) - stopIndex(startingLine, startingStation));
  } else {
    return stopToPark(endingLine, endingStation) + stopToPark(startingLine, startingStation);
  }
}

console.log(stopCount(startingLine, startingStation, endingLine, endingStation));

