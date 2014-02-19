var MBTA = {
			lines: {
				'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
				'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
				'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
			},
			distance_to_park: function(line) {
				var current_line = this.lines[line],
						park = current_line.indexOf('park st');
				return function(stop) {
					var current_stop = current_line.indexOf(stop);
					return Math.abs(current_stop - park);
				}
			}
	};

MBTA.startingLine = prompt("Enter the Starting Line: ");
MBTA.startingStation = prompt("Enter the Starting Station");
MBTA.endingLine = prompt("Enter the Ending Line");
MBTA.endingStation =  prompt("Enter the Ending Station");

MBTA.start_parkst = MBTA.distance_to_park(MBTA.startingLine);
MBTA.end_parkst = MBTA.distance_to_park(MBTA.endingLine);
MBTA.first_stop = MBTA.start_parkst(MBTA.startingStation);
MBTA.ending_stop = MBTA.end_parkst(MBTA.endingStation);

MBTA.total_distance = MBTA.first_stop + MBTA.ending_stop;

alert("The total number of stops for your travel is " + MBTA.total_distance + " stops.");

