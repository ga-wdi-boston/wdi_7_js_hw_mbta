// Code here.

var startingLine;
var startingStation;
var endingLine;
var endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
var lines = {
  green:['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  red: ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  orange: ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

if (startingLine === "red") {
    startingLine = lines.red;
}
else if (startingLine === "orange") {
    startingLine = lines.orange;
}
else {
    startingLine = lines.green;
}

if (endingLine === "red") {
    endingLine = lines.red;
}
else if (endingLine === "orange") {
    endingLine = lines.orange;
}
else {
    endingLine = lines.green;
}

var trip = function () {
    var start;
    var finish;
    var count;

    for (var i = 0; i < startingLine.length; i++) {
        if (startingStation === startingLine[i]) {
            start = startingLine.indexOf(startingStation);
            break;
        }
    }

    for (var k = 0; k < endingLine.length; k++) {
        if (endingStation === endingLine[k]) {
            finish = endingLine.indexOf(endingStation);
            break;
        }
    }
    if (startingLine === endingLine) {
        count = Math.abs(start - finish);
        return alert(count);
    }
    else {
        count = function () {
            var split1;
            var split2;
            var total;

            for (var i = 0; i < startingLine.length; i++) {
                if (startingLine[i] === 'park st') {
                    split1 = startingLine.indexOf(startingLine[i]);
                    break;
                }
            }
            for (var k = 0; k < endingLine.length; k++) {
                if (endingLine[k] === 'park st') {
                    split2 = endingLine.indexOf(endingLine[k]);
                    break;
                }
            }
            total = Math.abs(start - split1) + Math.abs(finish - split2);
            return total;
        };
        return alert(count());
    }

};

trip();
