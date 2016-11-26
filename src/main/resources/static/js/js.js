$(document).ready(function() {




	/**********  LOC, CAL, PPL MOUSEENTER & MOUSELEAVE NAV ACTIONS ***********
//		
//	// $('#'+ page + '-img').mouseenter(function() {});
//	$('#cal-link').mouseenter(function() {
//		$('#cal-img').attr('src', '../img/cal2_2.png');
//		$(this).parent().css('background-color', '#fffcee')
//				.css('border', '1px solid #eec212')
//				.css('border-radius', '10px');
//	});
//	$('#cal-link').mouseleave(function() {
//		$('#cal-img').attr('src', '../img/cal_black.png');
//		$(this).parent().css('border', '0')
//				.css('background-color', 'inherit')
//	});
//
//	$('#loc-link').mouseenter(function() {
//		$('#loc-img').attr('src', '../img/loc2_1.png');
//	});
//	$('#loc-link').mouseleave(function() {
//		$('#loc-img').attr('src', '../img/loc_black.png');
//	});
//
//	$('#ppl-img').mouseenter(function() {
//		$(this).attr('src', 'img/ppl2_3.png');
//	});
//	$('#ppl-img').mouseleave(function() {
//		$(this).attr('src', 'img/ppl_black.png');
//	});
// END MOUSEOVER COLORCHANGE */	




	/**********  TURNS OUT IT'S REALLY TOUGH TO USE A CAROUSEL TO CHANGE PAGES ***********
//	
//	let path = $(location).attr('pathname');
//	let item = $('#carousel').find('.active');
//	
//	if (path === "/loc") {
//		item.find('img').attr('src', '/img/loc2_1.png');
//		item.find('a');
//		$('#left-control').attr('src', '/img/cal_black.png');
//		$('#right-control').attr('src', '/img/ppl_black.png');
//		$('#carousel-output').text("Locations")
//				.css('border-color', '#1F78D4;')
//				.css('color', '#1F78D4');
//	}
//	if (path === "/cal") {
//		item.find('img').attr('src', '/img/cal2_2.png');
//		$('#left-control').attr('src', '/img/ppl_black.png');
//		$('#right-control').attr('src', '/img/loc_black.png');
//		$('#carousel-output').text("Calendar")
//			.attr('border-color', '#FAD53F;')
//			.css('color', '#FAD53F');
//	}
//	if (path === "/ppl") {
//		item.find('img').attr('src', '/img/ppl2_3.png');
//		$('#left-control').attr('src', '/img/loc_black.png');
//		$('#right-control').attr('src', '/img/cal_black.png');
//		$('#carousel-output').text("People")
//			.prop('border-color', '#A1663A;')
//			.css('color', '#A1663A');
//	}
//	
//	//jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 200;
//	
//	$('#carousel').on('slid.bs.carousel', function () {
//		let ctr = $('#carousel').find('.active').find('img').attr('src');
//		console.log('ctr is ', ctr);
//		if (ctr === "/img/loc2_1.png") {
//			console.log("good");
//			$('#left-control').attr('src', '/img/cal_black.png');
//			$('#right-control').attr('src', '/img/ppl_black.png');
//			$('#carousel-output').text("Locations")
//					.css('border-color', '#1F78D4;')
//					.css('color', '#1F78D4');
//			$(location).attr('href', 'loc');
//					//.css('', '')
//		}
//		if (ctr === "/img/cal2_2.png") {
//			console.log("good");
//			$('#left-control').attr('src', '/img/ppl_black.png');
//			$('#right-control').attr('src', '/img/loc_black.png');
//			$('#carousel-output').text("Calendar")
//				.attr('border-color', '#FAD53F;')
//				.css('color', '#FAD53F');
//			$(location).attr('href', 'cal');
//		}
//		if (ctr === "/img/ppl2_3.png") {
//			console.log("good");
//			$('#left-control').attr('src', '/img/loc_black.png');
//			$('#right-control').attr('src', '/img/cal_black.png');
//			$('#carousel-output').text("People")
//				.prop('border-color', '#A1663A;')
//				.css('color', '#A1663A');
//			$(location).attr('href', 'ppl');
//			//$(location).attr('href', 'http://www.sitefinity.com')
//		}
//	});
//  END CAROUSEL EXPERIMENT	*/


	let path = $(location).attr('pathname');
	console.log(path);

	if (path === "/loc.html") {
		$('#loc-img').attr('src', '/img/loc2_1.png');
		$('#carousel-output').text("Locations")
		.css('border-color', '#1F78D4;')
		.css('color', '#1F78D4');
	}
	if (path === "/cal.html") {
		$('#cal-img').attr('src', '/img/cal2_2.png');
		$('#carousel-output').text("Calendar")
		.attr('border-color', '#FAD53F;')
		.css('color', '#FAD53F');
	}
	if (path === "/ppl.html") {
		$('#ppl-img').attr('src', '/img/ppl2_3.png');
		$('#carousel-output').text("People")
		.prop('border-color', '#A1663A;')
		.css('color', '#A1663A');
	}

	
	
	// CLIMB CALENDAR CONTROL
	$('#climb-calendar').datepicker({
	});



	// NEW CLIMB CALENDAR CONTROL
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
		$('#ampm').text('pm');
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
	mapWrap.click(map.removeClass('scrolloff'));

	// re-enable scrolling on mouseleave
	mapWrap.mouseleave(function () {
		map.addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
	});

});


