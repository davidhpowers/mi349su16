$(document).ready(function(){

	console.log("Hello World");

	var totalYears = 4;

	var startYear = 2012;

	var margin = 20;

	// Bracket Array
	// [start month , start year , end month , end year , short/medium/tall , up/down]
	var brackets = [
		[5, 2014, 8, 2014, "short", "up"],
		[5, 2015, 8, 2015, "short", "up"],
		[5, 2016, 8, 2016, "short", "up"],
		[8, 2012, 12, 2016, "medium", "up"]
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
				$( ".dateMarkers" ).append('<div id="'+(months + 1)+"-"+year+'" class="dateMarker small"><div class="month">'+ (months + 1) +'</div><div class="year">'+ year +'</div></div>');
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