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


var mbta = {

red: ['south_station', 'park_st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],

green: ['haymarket', 'government_center', 'park st', 'bolyston', 'arlington', 'copley'],

orange: ['north_station', 'haymarket', 'park_st', 'state', 'downtown_crossing', 'chinatown', 'back_bay', 'forest_hills']

};

function ourTrip(strt_ln, strt_st, dest_ln, dest_st) {

  var distance;

  if(strt_ln === dest_ln) {
    distance = Math.abs(mbta.strt_ln.indexOf(strt_st) - mbta.dest_ln.indexOf(dest_st));
  }
    else {

         var firstHalf = Math.abs(mbta.strt_ln.indexOf(strt_st) - mbta.strt_ln.indexOf('park_street'))

         var secondHalf = Math.abs(mbta.dest_ln.indexOf('park_street') - mbta.dest_ln.indexOf(dest_st));

         distance = firstHalf + secondHalf;
    }

    return distance;

console.log(mbta.strt_ln);

}
var prop = 'red';
console.log(mbta[prop]);
//ourTrip(red);




