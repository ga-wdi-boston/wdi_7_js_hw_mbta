// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

// Create a array for each line
lines = {
  'green':{'haymarket':-2, 'government center':-1, 'park st':0, 'bolyston':1, 'arlington':2, 'copley':3},
  'red': {'south station':-1, 'park st':-0, 'kendall':1, 'central':2, 'harvard':3, 'porter':4, 'davis':5, 'alewife':6},
  'orange': {'north station':-2, 'haymarket':-1, 'park st':0, 'state':1, 'downtown crossing':2, 'chinatown':3, 'back bay':4, 'forest hills':5}
};


function trip(startingLine,startingStation,endingLine,endingStation){
  if (startingLine!==endingLine){
    lines[startingLine][startingStation] = (Math.abs(lines[startingLine][startingStation]));
    lines[endingLine][endingStation] = -(Math.abs(lines[endingLine][endingStation]));
  }
  console.log(Math.abs(lines[startingLine][startingStation] - lines[endingLine][  endingStation]));
}

trip('red','alewife','green','haymarket');
trip('red','alewife','red','south station');
trip('red','alewife','green','copley');
trip('red','alewife','red','park st');
trip('red','alewife','orange','north station');
trip('green','haymarket','green','government center');
trip('green','haymarket','orange','north station');
