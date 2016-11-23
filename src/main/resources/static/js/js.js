$(document).ready(function() {

	// $('#'+ page + '-img').mouseenter(function() {});
	$('#cal-img').mouseenter(function() {
		$(this).attr('src', '../img/cal2_2.png');
	});
	$('#cal-img').mouseleave(function() {
		$(this).attr('src', '../img/cal_black.png');
	});

	$('#loc-img').mouseenter(function() {
		$(this).attr('src', '../img/loc2_1.png');
	});
	$('#loc-img').mouseleave(function() {
		$(this).attr('src', '../img/loc_black.png');
	});

	$('#ppl-img').mouseenter(function() {
		$(this).attr('src', 'img/ppl2_3.png');
	});
	$('#ppl-img').mouseleave(function() {
		$(this).attr('src', 'img/ppl_black.png');
	});

	
	// DATEPICKER
	let now = new Date();
    $('#new-climb-cal').datepicker({
    	minDate: now,
    	defaultDate: +1
    });
    console.log($('#new-climb-cal'));
	
    
    // NEW CLIMB HOUR CONTROLS
    /*
    start-hour
    start-hour-plus : 1
    start-hour-minus : -1

    start-minute
    start-minute-plus : 15
    start-minute-minus : -15
    
    dur-hour
    dur-minute
    dur-plus : 15
    dur-minus : -15
    */
    
    let startHour = $('#start-hour');
    let startMinute = $('#start-minute');
    let durHour = $('#dur-hour');
    let durMinute = $('#dur-minute');
    
    $('#reset').click(function() {
    	startHour.val(12);
    	startMinute.val("00");
    	durHour.val(1);
    	durMinute.val(30);
    });
    
    $('#start-hour-plus').click(function() {
    	let newHour = parseInt(startHour.val()) + 1;
    	if (newHour > 12) {
    		newHour -= 12;
    	}
    	startHour.val(newHour);
    	if (newHour == 12) {
    		$('#ampm').text(($('#ampm').text() == 'pm') ? 'am' : 'pm');
    	}

    });
    $('#start-hour-minus').click(function() {
    	let newHour = parseInt(startHour.val()) - 1;
    	if (newHour < 1) {
    		newHour += 12;
    	} 
    	startHour.val(newHour);
    	if (newHour == 11) {
    		$('#ampm').text(($('#ampm').text() == 'pm') ? 'am' : 'pm');
    	}

    });    
    
    
    $('#start-minute-plus').click(function() {
    	let newMinute = parseInt(startMinute.val()) + 15;
    	if (newMinute >= 60) {
    		newMinute -= 60;
    	} 
    	startMinute.val((newMinute == 0) ? '00' : newMinute);
    });
    $('#start-minute-minus').click(function() {
    	let newMinute = parseInt(startMinute.val()) - 15;
    	if (newMinute < 0) {
    		newMinute += 60;
    	} 
    	startMinute.val((newMinute == 0) ? '00' : newMinute);
    });
    

    $('#dur-plus').click(function() {
    	let newMinute = parseInt(durMinute.val()) + 15;
    	if (newMinute >= 60) {
    		newMinute -= 60;
    		let newHour = parseInt(durHour.val()) + 1;
        	durHour.val(newHour);
    	} 
    	durMinute.val((newMinute == 0) ? '00' : newMinute);
    });
    
    $('#dur-minus').click(function() {
    	let newMinute = parseInt(durMinute.val()) - 15;
		let newHour = parseInt(durHour.val());
    	if (newMinute < 0 && newHour == 0)
        	return;
    	else if (newMinute < 0 && newHour != 0) {
    		newMinute += 60;
    		durHour.val(newHour - 1);
     	}
    	durMinute.val((newMinute == 0) ? '00' : newMinute);
    });
    
	
    // DISABLE MAP SCROLL ON LOAD, TOGGLE ON CLICK
    let mapWrap = $('#map-wrap');
    let map = $('#map');
    
    map.addClass('scrolloff');
    mapWrap.click(map.toggleClass('scrolloff'));

    // re-enable scrolling on mouseleave
    mapWrap.mouseleave(function () {
        map.addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
	
});


