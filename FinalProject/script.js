$(document).ready(function(){

	console.log("Hello World");

	var totalYears = 8;

	var startYear = 2008;

	var margin = 20;

	// Bracket Array
	// [start month , start year , end month , end year , short/medium/tall , up/down]
	var brackets = [
		// High School
		[9, 2008, 6, 2012, "medium", "up"],

		// MSU
		[8, 2012, 12, 2016, "tall", "up"],

		// GM 1st Internship
		[5, 2014, 8, 2014, "tall", "up"],

		// GM 2nd Internship
		[5, 2015, 8, 2015, "tall", "up"],

		// GM 3rd Internship
		[5, 2016, 8, 2016, "tall", "up"],

		// Tru Design Internship
		[12, 2014, 1, 2015, "medium", "up"],

		// University Activities Board
		[1, 2013, 5, 2013, "short", "up"],

		// Big Brothers Big Sisters
		[8, 2011, 6, 2012, "short", "up"],

		// National Honor Society
		[8, 2010, 6, 2012, "short", "up"],

		// FIRST Robotics
		[12, 2011, 4, 2012, "medium", "up"],

		// Student Council
		[9, 2008, 6, 2012, "short", "up"],

		// Dave Powers Fence Co.
		[6, 2011, 8, 2012, "short", "up"],

		// Audio Enthusiasts & Engineers
		[1, 2015, 5, 2015, "short", "up"],

		// Student Representative on School Board
		[9, 2011, 5, 2012, "short", "up"],

		// Lyle A. Torrant Center Volunteer
		[8, 2011, 5, 2012, "short", "up"],

		// Varsity Cross Country & Track - Team Captain & Academic All Conference
		[8, 2008, 6, 2012, "short", "up"],

		// MSU Detroit Semester
		[5, 2015, 8, 2015, "medium", "up"]
	];

	// Event Array
	// [start month , start year]
	var events = [
		[6, 2012],
		[8, 2012],
		[12, 2016]
	];


	timeLine(totalYears, startYear, margin);

	enterBrackets(brackets);

	enterEvents(events);

});

$(document).scroll(function() {
	if ($(document).scrollTop() > 0) {
		// user scrolled 50 pixels or more;
		// do stuff
		$("#menuBar").addClass("black");
	} else {
		$("#menuBar").removeClass("black");
	}
});


function enterEvents(events){
	var count = 1;

	$.each(events, function (index, value) {
		console.log(value);
		$( ".events" ).append('<div id="event'+ count +'" class="event"></div>');

		var position1 = $("#"+value[0]+"-"+value[1]).position();

		console.log("position1: ", position1);

		$( "#event"+ count ).css({"left": position1.left + "px"});

		count++;
	});
}

function enterBrackets(brackets){
	console.log("Enter Brackets");

	var count = 1;

	$.each(brackets, function (index, value) {
		console.log(value);
		$( ".brackets" ).append('<div id="bracket'+ count +'" class="bracket '+ value[4] + " " + value[5] + ' "></div>');

		var position1 = $("#"+value[0]+"-"+value[1]).position();

		var position2 = $("#"+value[2]+"-"+value[3]).position();

		console.log("position1: ", position1);
		console.log("position2: ", position2);

		$( "#bracket"+ count ).css({"left": position1.left + "px", "width": (position2.left - position1.left) + "px"});

		count++;
	});


}

function timeLine(totalYears, startYear, margin) {

	var year = startYear;

	var endYear = startYear + totalYears;

	console.log("Create TimeLine");

	console.log("margin", margin);

	while( year <= endYear){

		var months = 1;

		// Big Date Marker
		$( ".dateMarkers" ).append('<div id="'+(months)+"-"+year+'" class="dateMarker big"><div class="month">'+ months +'</div></div>');

		while(months <= 11){

			if (months == 6) {
				$( ".dateMarkers" ).append('<div id="'+(months + 1)+"-"+year+'" class="dateMarker small"><div class="month">'+ (months + 1) +'</div><div class="year">'+ year +'<div class="yearBracket"><span class="curlyBrace">}</span></div></div></div></div>');
			}
			else{
				// Small Date Marker
				$( ".dateMarkers" ).append('<div id="'+(months + 1)+"-"+year+'" class="dateMarker small"><div class="month">'+ (months + 1) +'</div></div>');
			}


			$( ".dateMarker" ).css("margin-right", margin + "px");

			months++;
		}

		year++;

	}

	// Big Date Marker
	$( ".dateMarkers" ).append('<div id="'+1+"-"+year+'" class="last dateMarker big"><div class="year"></div></div>');
	$( ".dateMarker.last" ).css("margin-right", 15 + "px");

	var width = (totalYears + 1) * 13 * margin;

	$( ".dateLine" ).css({"width": width + "px", "margin-left": -width/2 +"px"});

	$( "#timeLine" ).css({"min-width": width});


	//$( ".dateLine" ).css("margin-left", "-" + ($( ".dateLine" ).width()/2) + "px" );

	//console.log("width", ($( ".dateLine" ).width()/2));
}