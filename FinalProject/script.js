$(document).ready(function(){

	console.log("Hello World");

	console.log($( window ).width());

	var totalYears = 8;

	var startYear = 2008;

	// Default Margin Value
	var margin = 15;

	// Extra spacing for dateLine
	var extra = 13.75;

	if ($( window ).width() < 1000){

		console.log("SIZE: < 1000");

		margin = 5;

		extra = 16;

	}

	if ($( window ).width() < 840){

		console.log("SIZE: < 840");

		$(".fa-bars").show();

		$("#menuBar h1").addClass("shift");

	}
	else{
		$(".fa-bars").hide();

		$("#menuBar h1").removeClass("shift");
	}



	// Bracket Array
	// [start month , start year , end month , end year , short/medium/tall , up/down, title, tag]
	var brackets = [
		// High School
		[9, 2008, 6, 2012, "tall", "up", "Michigan Center High School", "education"],

		// MSU
		[8, 2012, 12, 2016, "tall", "up", "Michigan State University", "education"],

		// GM 1st Internship
		[5, 2014, 8, 2014, "tall", "up", "GPSC Data Software Development Intern", "work"],

		// GM 2nd Internship
		[5, 2015, 8, 2015, "tall", "up", "Global End User Experience SharePoint Development Intern", "work"],

		// GM 3rd Internship
		[5, 2016, 8, 2016, "tall", "up", "GCCX Onstar Web Development Intern", "work"],

		// Tru Design Internship
		[12, 2014, 1, 2015, "medium", "up", "Tru Design Home Automation Intern", "work"],

		// University Activities Board
		[1, 2013, 5, 2013, "short", "up", "University Activities Board Member", "extra-curricular"],

		// Big Brothers Big Sisters
		[8, 2011, 6, 2012, "short", "down", "Big Brothers Big Sisters", "volunteer"],

		// National Honor Society
		[8, 2010, 6, 2012, "medium", "up", "National Honor Society Member", "volunteer"],

		// FIRST Robotics
		[12, 2011, 4, 2012, "medium", "up", "FIRST Robotics Member", "extra-curricular"],

		// Dave Powers Fence Co.
		[6, 2011, 8, 2012, "short", "down", "Dave Powers Fence Co. Technology Manager", "work"],

		// Audio Enthusiasts & Engineers
		[1, 2015, 5, 2015, "short", "up", "Audio Enthusiasts & Engineers Member", "extra-curricular"],

		// Student Representative on School Board
		[9, 2011, 5, 2012, "short", "up", "Student Representative on the Michigan Center School Board", "extra-curricular"],

		// Lyle A. Torrant Center Volunteer
		[8, 2011, 5, 2012, "short", "up", "Lyle A. Torrant Center Volunteer", "volunteer"],

		// Varsity Cross Country & Track - Team Captain & Academic All Conference
		[9, 2008, 6, 2012, "medium", "down", "Varsity Cross Country & Track Team Captain", "extra-curricular"],

		// MSU Detroit Semester
		[5, 2015, 8, 2015, "short", "up", "MSU Detroit Semester", "volunteer"]
	];

	// Event Array
	// [start month , start year, title, tag]
	var events = [
		[9, 2008, "Started at Michigan Center High School", "education"],
		[6, 2012, "Graduated from Michigan Center High School", "education"],
		[8, 2012, "Started at Michigan State University", "education"],
		[12, 2016, "Graduation from Michigan State University", "education"]
	];

	//timeLine(totalYears, startYear, margin, extra);

	//enterBrackets(brackets);

	//enterEvents(events);

	//hideShow(brackets, events);


	$(".fa-bars, .leftArrow").click(function(){
		$("#scrollMenu").toggle();

		if ( $("#scrollMenu").css('display') == 'none' ){
			$("#menuBar").removeClass("slide");
			$(".fa-bars").show();
			$(".leftArrow").hide();
			$("#menuBar h1").removeClass("slide");
		}
		else {
			$("#menuBar").addClass("slide");
			$(".fa-bars").hide();
			$(".leftArrow").show();
			$("#menuBar h1").addClass("slide");
		}


	});

});

$( window ).resize(function() {
	if ($( window ).width() < 840){

		console.log("SIZE: < 840");

		$(".fa-bars").show();

		$("#menuBar h1").addClass("shift");

	}
	else{
		$(".fa-bars").hide();

		$("#menuBar h1").removeClass("shift");
	}
});


$(document).scroll(function() {
	console.log("scroll");
	if ($(document).scrollTop() >= $("#profile").height() - 30) {
		// user scrolled 50 pixels or more;
		// do stuff
		$("#menuBarNav").show();
	} else {
		$("#menuBarNav").hide();
	}
});

function hideShow(brackets, events) {
	$("input[value='All']").click(function() {

		$(".event").show();
		$(".bracket").show();
	});

	$("input[value='Education']").click(function() {

		$(".bracket").hide();
		$(".event").hide();

		$(".bracket.education").show();
		$(".event.education").show();

	});

	$("input[value='WorkExperience']").click(function() {

		$(".bracket").hide();
		$(".event").hide();

		$(".bracket.work").show();

	});

	$("input[value='Volunteering']").click(function() {

		$(".event").hide();
		$(".bracket").hide();

		$(".bracket.volunteer").show();

		$(".bracket.extra-curricular").show();
	});

	/*
	 $("input[value='ExtraCurricular']").click(function() {

	 $(".event").hide();
	 $(".bracket").hide();

	 $(".bracket.extra-curricular").show();

	 });
	 */

	$("input:radio:first").prop("checked", true).trigger("click");
}

function enterEvents(events){
	var count = 1;

	$.each(events, function (index, value) {
		//console.log(value);
		$( ".events" ).append('<div id="event'+ count +'" class="event"></div>');
		$( "#event" + count ).addClass(value[3]);

		var position1 = $("#"+value[0]+"-"+value[1]).position();

		//console.log("position1: ", position1);

		$( "#event"+ count ).css({"left": position1.left + "px"});

		count++;
	});
}

function enterBrackets(brackets){
	console.log("Enter Brackets");

	var count = 1;

	$.each(brackets, function (index, value) {
		//console.log(value);
		$( ".brackets" ).append('<div id="bracket'+ count +'"></div>');

		$( "#bracket" + count ).addClass("bracket");
		$( "#bracket" + count ).addClass(value[4]);
		$( "#bracket" + count ).addClass(value[5]);
		$( "#bracket" + count ).addClass(value[7]);

		$( "#bracket" + count ).append(value[6]);

		var position1 = $("#"+value[0]+"-"+value[1]).position();

		var position2 = $("#"+value[2]+"-"+value[3]).position();

		//console.log("position1: ", position1);
		//console.log("position2: ", position2);

		$( "#bracket"+ count ).css({"left": position1.left + "px", "width": (position2.left - position1.left) + "px"});

		count++;
	});
}

function timeLine(totalYears, startYear, margin, extra) {

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

	var width = (totalYears + 1) * extra * margin;

	$( ".dateLine" ).css({"width": width + "px", "margin-left": -width/2 +"px"});

	$( "#timeLine" ).css({"min-width": width});
}