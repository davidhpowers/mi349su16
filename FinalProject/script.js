$(document).ready(function(){

	console.log("Hello World");
	
	timeLine();
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

function timeLine() {

	var years = 1;
	
	var totalYears = 6;
	
	var margin = (1/(totalYears * 12))*100;
	
	console.log("width", $(".dateLine").width());
	console.log("margin", margin + "%");
	
	while( years < totalYears){
		
		var months = 1;
		
		// Big Date Marker
		$( ".dateLine" ).append('<div class="dateMarker big"></div>');
		
		while(months <= 12){
			// Small Date Marker
			$( ".dateLine" ).append('<div class="dateMarker small"></div>');
			
			$( ".dateMarker" ).css("margin-left", margin + "%");
			
			months++;
		}
		
		years++;	

	}
	
	// Big Date Marker
	$( ".dateLine" ).append('<div class="dateMarker big"></div>');
	$( ".dateMarker" ).css("margin-left", margin + "%");
	

}