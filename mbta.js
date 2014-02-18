// Code here.
var mbta = {
  start_line: prompt("Enter the Starting Line: "),
  start_stop: prompt("Enter the Starting Station"),
  end_line: prompt("Enter the Ending Line"),
  end_stop: prompt("Enter the Ending Station"),
  lines: {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  },
  calc_stops: function (start_line, start_stop, end_line, end_stop) {
    var to_park, from_park;
    if ( start_line === end_line ) {
      return Math.abs( this.lines[start_line].indexOf( start_stop ) - this.lines[end_line].indexOf( end_stop ) );
    } else {
      to_park = Math.abs( this.lines[start_line].indexOf( start_stop ) - this.lines[start_line].indexOf( "park st" ) );
      from_park = Math.abs( this.lines[end_line].indexOf( "park st" ) - this.lines[end_line].indexOf( end_stop ) );
      return to_park + from_park;
    }
  }
};

alert("Staring at " + mbta.start_line + " : " + mbta.start_stop);
alert("Ending at " + mbta.end_line + " : " + mbta.end_stop);

result = mbta.calc_stops(mbta.start_line.toLowerCase(), mbta.start_stop.toLowerCase(), mbta.end_line.toLowerCase(), mbta.end_stop.toLowerCase());
console.log("It will take you " + result + " stops for this trip.");
