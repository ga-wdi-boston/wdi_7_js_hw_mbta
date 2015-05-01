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
lvar lines = {
  'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};




function trip(startingLine,startingStation,endingLine,endingStation){
    if (startingLine === endingLine){
       return  Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation) );
    }
}
console.log(trip("red","southstation","red","central"));
