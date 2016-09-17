$(document).ready(function(){
	$("input[type=text]").keypress(function(e) {
		// if the key pressed is the enter key
		if (e.which == 13) {
			submit(); 
		}
	});

	$("#submit").on("click", function() {
		$("#answer").hide(); 
		var medicine = $("input[type=text]").val(); 
		$.get( "https://hackahackahack.herokuapp.com/lookup?drug=" + medicine , function( data ) {
			switch(data.shortAnswer) {
			    case 1:
			        $("#short").html("safe");
			        $("body").animate({
			        	backgroundColor: "#5C8AD1"
					}, 400, function() {
					    // Animation complete.
					});
			        break;
			    case 2:
			        $("#short").html("not recommended");
			        $("body").animate({
			        	backgroundColor: "#FFC914"
					}, 400, function() {
					    
					});
			        break;
			    case 3: 
			    	$("#short").html("dangerous");
			    	$("body").animate({
			        	backgroundColor: "#FF6700"
					}, 400, function() {
					   
					}); 
			    	break;
			    case 4: 
			    	$("#short").html("very dangerous"); 
			    	$("body").animate({
			        	backgroundColor: "#D72638"
					}, 400, function() {
					    
					}); 
			    	break;
			    default:
			        $("#short").html("not found"); 
			}
		  $("input[type=text]").val(data.drugName); 
		  $("#long").html(data.longAnswer);
		  $("#answer").fadeIn();
		});
	});
});