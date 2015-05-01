// Code here.
// var startingLine,
// startingStation,
// endingLine,
// endingStation;

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
var lines = {
  green:['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'],
  red:['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  orange:['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};


function singleLineDistance(startingLine,startingStation,endingStation){
    var getOn = lines[startingLine].indexOf(startingStation);
    var getOff = lines[startingLine].indexOf(endingStation);
     return Math.abs(getOff - getOn);
}

function mbtaDistance(startingLine,startingStation,endingLine,endingStation){
    if (startingLine === endingLine){
        return singleLineDistance(startingLine,startingStation,endingStation);
    }
    else {
        return singleLineDistance(startingLine,startingStation,'park st') + singleLineDistance(endingLine,'park st', endingStation);
    }
}


console.log(singleLineDistance('green','haymarket','boylston'));
console.log(mbtaDistance('green','haymarket','red','central'));
