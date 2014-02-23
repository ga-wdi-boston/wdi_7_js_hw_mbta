// MBTA object
var mbta = {
  start_line: prompt("Enter the Starting Line: ").toLowerCase(),
  start_stop: prompt("Enter the Starting Station").toLowerCase(),
  end_line: prompt("Enter the Ending Line").toLowerCase(),
  end_stop: prompt("Enter the Ending Station").toLowerCase(),
  lines: {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  },
  calc_stops: function () {
    var to_park, from_park;
    if ( this.start_line === this.end_line ) {
      return Math.abs( this.lines[this.start_line].indexOf( this.start_stop ) - this.lines[this.end_line].indexOf( this.end_stop ) );
    } else {
      to_park = Math.abs( this.lines[this.start_line].indexOf( this.start_stop ) - this.lines[this.start_line].indexOf( "park st" ) );
      from_park = Math.abs( this.lines[this.end_line].indexOf( "park st" ) - this.lines[this.end_line].indexOf( this.end_stop ) );
      return to_park + from_park;
    }
  }
};

alert("Staring at " + mbta.start_line + " : " + mbta.start_stop);
alert("Ending at " + mbta.end_line + " : " + mbta.end_stop);

var result = mbta.calc_stops();
console.log("It will take you " + result + " stops for this trip.");
