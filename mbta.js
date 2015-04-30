// Code here.

var startingLine = "red"
startingStation = 'alewife',
endingLine = "red",
endingStation = 'south station';

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
var lines = {
  green:['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  red: ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  orange: ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

if (startingLine === "red") {
    startingLine = lines.red;
}
else if (startingLine === "blue") {
    startingLine = lines.blue;
}
else {
    startingLine = lines.green;
}

if (endingLine === "red") {
    endingLine = lines.red;
}
else if (endingLine === "blue") {
    endingLine = lines.blue;
}
else {
    endingLine = lines.green;
}

var trip = function () {
    var start;
    var finish;

    for (var i = 0; i < startingLine.length; i++) {
        if (startingStation === startingLine[i]) {
            x = startingLine.indexOf(startingStation);
        }
    }

    for (var k = 0; k < endingLine.length; k++) {
        if (endingStation === endingLine[k]) {
            y = endingLine.indexOf(endingStation);
        }
    }

    return Math.abs(start - finish);
}
