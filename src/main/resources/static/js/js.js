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
		addClickEvents();
	}


	/**
	 *  ---  NEWCLIMB  ---
	 */

	// NEW CLIMB CALENDAR CONTROL
	let now = new Date();
	let startDate;
	$('#new-climb-cal').datepicker({
		autoSize: true,
		minDate: now,
		defaultDate: +1,
		monthNamesShort: true,
		dateFormat: "yy-mm-dd",
		onSelect: function(startDate, obj){
			startDate = startDate==="" ? this.defaultDate : startDate;
			$('#required-to-display-calendar').val(startDate);
		}
	});
	let pageLoadDate = $('#new-climb-cal').datepicker("getDate");
	let dateFormatted = new Date(pageLoadDate);
	dateFormatted = $.datepicker.formatDate("yy-mm-dd", dateFormatted);
	$('#required-to-display-calendar').val(dateFormatted);


	// NEW CLIMB HOUR CONTROLS
	/*
    start-hour-plus : 1
    start-hour-minus : -1

    start-minute-plus : 15
    start-minute-minus : -15

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
		$('#ampm').val('pm');
	});

	$('#start-hour-plus').click(function() {
		let newHour = parseInt(startHour.val()) + 1;
		if (newHour > 12) {
			newHour -= 12;
		}
		startHour.val(newHour);
		if (newHour == 12) {
			$('#ampm').val(($('#ampm').val() == 'pm') ? 'am' : 'pm');
		}

	});
	$('#start-hour-minus').click(function() {
		let newHour = parseInt(startHour.val()) - 1;
		if (newHour < 1) {
			newHour += 12;
		} 
		startHour.val(newHour);
		if (newHour == 11) {
			$('#ampm').val(($('#ampm').val() == 'pm') ? 'am' : 'pm');
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

	/**  ---  END NEWCLIMB  ---  **/

//	------------------------------------------------------------------------


	/**
	 *  ---  CAL  ---
	 */

	// CLIMB CALENDAR CONTROL
	let calendarDate = new Date();
	console.log(calendarDate);
	$('#climb-calendar').datepicker({
		autoSize: true,
		hideIfNoPrevNext: true,
		defaultDate: calendarDate,
		monthNamesShort: true,
		dateFormat: "yy-mm-dd",
		onSelect: function(calendarDate, obj){
			$('#cal-input').val(calendarDate);
			$('#date-filter').dropdown('toggle');
			filterDate();
		}
	});

	console.log("getting date:", $('#climb-calendar').datepicker("getDate"));
	pageLoadDate = $('#climb-calendar').datepicker("getDate");
	console.log("pageLoad:", pageLoadDate);
	dateFormatted = new Date(pageLoadDate);
	dateFormatted = $.datepicker.formatDate("yy-mm-dd", dateFormatted);
	$('#cal-input').val(dateFormatted);	

	console.log($('#cal-input').val());

//
//	$('.climblist-item-caret').click(function(){
//		
//		let cs = $(this).parent().parent();
//		let climbId = cs.find('.climblist-item-id').text();
//		console.log(cs);
//		console.log(cs.find('.climblist-item-name').find('span').text(), cs.find('.climblist-item-date-month').text(), cs.find('.climblist-item-date-date').text());
//		console.log(cs.find('.climblist-item-id').text());
//		
//		let form = $('<form method="post"></form>');
//		form.append('<input name="isAccepted" value="true"/><input name="climbId" value='+climbId+'><button type="submit"></button>');
//		cs.append(form);
//		form.find('button').click();
//	});
//


////	something.oninput(console.log("it worked?"));
////	$.inputField.addEventListener('input', function(e) {
////	console.log("it worked?");
////	console.log(e.target( $('#cal-input')));
////	});

//	$('#climb-calendar.ui-datepicker').mouseenter(console.log($('#cal-input').val()));
//	let calendar = $('#climb-calendar')[0];
//	let inpt = $('#cal-input')[0];
//	inpt.addEventListener('input', function(){
//	console.log("blah");
//	});
//	inpt.addEventListener('change', function(){
//	console.log("inpt - change");
//	});
//	calendar.addEventListener('input', function(){
//	console.log("blargh");
//	});
//	calendar.addEventListener('change', function(){
//	console.log("cal-change");
//	});




	/**  ---  END CAL  ---  **/

//	------------------------------------------------------------------------

	/**
	 *  ---  PPL  ---
	 */

	//  additional functions below - addClickEvents()

	/**  ---  END PPL  ---  **/

//	------------------------------------------------------------------------

	/**
	 *  ---  FILTERS  ---
	 */

	// FILTER DATE
	let filterDate = function(){
		// hide everything
		$('.climblist-item').attr('hidden', true);

		// flag if there are matching climbs
		let noClimbs = true;

		// hide the "no climbs found" message
		$('#no-climbs').attr('hidden', true);

		// get date
		let filterDate = $('#climb-calendar').datepicker("getDate");
//		console.log("filterDate is:", filterDate);

		// parse date into month...
		let filterMonth = filterDate.getMonth();
//		console.log("fm is", filterMonth);

		// ...& day
		let filterDay = filterDate.getDate();
//		console.log("fd is", filterDay);

		// get all climbs & store into a variable
		let climbs = $('.climblist-item');

		//iterate through each climb
		$.each(climbs, function(){
//			console.log($(this));

			// get climb month
			let climbMonth = $(this).find('.climblist-item-date-month').text();
//			console.log("climbMonth is:", climbMonth);

			// get integer value
			let intClimbMonth = parseMonth(climbMonth);
//			console.log("intCM is:", intClimbMonth);

			// if (climbMonth === filterMonth) {
			if (intClimbMonth == filterMonth) {

				// get climb date
				let climbDay = $(this).find('.climblist-item-date-date').text();
//				console.log("climbDay is:", climbDay);

				// if (climbDay === filterDate) {
				if (climbDay == filterDay) {
					noClimbs = false;
//					console.log("***************  MATCH **************");
//					console.log("FM/FD is:", filterMonth + "/" + filterDay);
//					console.log("CM/CD is:", intClimbMonth + "/" + climbDay);

					// unhide this element
					$(this).attr('hidden', false);	
				}	
			}		
		});

		if (noClimbs) {
			$('#no-climbs').attr('hidden', false);
		}
	};



	//FILTER LOCATION & PERSON

	//when clicked, get selected .dropdown-menu list item
//	let item;
//	$('.dropdown-menu li').click(function(){
//		item = $(this).text();
//		console.log("filtering...clicked!")
//
//		// hide everything
//		$('.climblist-item').attr('hidden', true);
//
//		// flag if there are matching climbs
//		let noClimbs = true;
//
//		// hide the "no climbs found" message
//		$('#no-climbs').attr('hidden', true);
//
//		// get all climbs & store into a variable
//		let climbs = $('.climblist-item');
//
//		//iterate through each climb
//		$.each(climbs, function(){
//
//			// LOCATION PATH
//			//get location
//			let climbLoc = $(this).find('.climblist-item-location span').text();
//			console.log("climbLoc",climbLoc);
//
//			// PERSON PATH
//			//get person
//			let climber = $(this).find('.climblist-item-name span').text();
//			console.log("climber",climber);
//
//			//if location or person match
//			if (item === climbLoc || item === climber) {
//
//				//display this climb
//				$(this).attr('hidden', false);
//				noClimbs = false;
//			}
//
//		});
//		if (noClimbs) {
//			$('#no-climbs').attr('hidden', false);
//		}
//
//	});


	//FILTER AVAILABILITY
	
	$('.dropdown-menu li').click(function(){
		item = $(this).text();
		console.log("item is", item);

		// hide everything
		$('.climblist-item').attr('hidden', true);

		// flag if there are matching climbs
		let noClimbs = true;
		
		// hide the "no climbs found" message
		$('#no-climbs').attr('hidden', true);

		// get all climbs & store into a variable
		let climbs = $('.climblist-item');
		
		
		
		if ((item == "Available Requests") || (item == "Unavailable Requests") || (item == "All Requests")) {  
			
			console.log(item, "here");
			
			//iterate through each climb
			$.each(climbs, function(){
				
				// set availability flag
				let avail = true;
	
				// AVAILABILITY PATH
				let accepted = $(this).find('.climblist-item-isAccepted').text();
				console.log("accepted is", accepted);

				//if accepted
				if (accepted == "true") {
	
					// avail = false;
					avail = false;
					console.log("<<<  acceptedTrue, availFalse  >>>", avail);
				}
	
				//else {
				else {
	
					//get month
					let climbMonth = $(this).find('.climblist-item-date-month').text();
	
					//get int value
					let intClimbMonth = parseMonth(climbMonth);				
	
					//get day of month
					let climbDay = $(this).find('.climblist-item-date-date').text();
	
					//make a date
					let climbDate = new Date("2016-"+(intClimbMonth+1)+"-"+(parseInt(climbDay)+1));
	//				console.log("month", intClimbMonth+1, climbMonth, "  day", climbDay);
	//				console.log(climbMonth + "/" + climbDay);
	//				console.log("\nDate is ", climbDate);
	
					//get now
					let now = new Date();
					console.log("\t\t\t\t\tnow is ", now.getTime(), "avail", avail);
					console.log("\t\t\t\t\tdate is", climbDate.getTime());
	
					//if now > climbDate
					if (now.getTime() > climbDate.getTime()) {
//						console.log("***** DATE TEST ------- now > climbDate")
	
						//avail = false
						avail = false;
					}
				}
	
//				console.log("\n\t\t\tavail", avail, "   item", item);
				
				//if (avail == true && item == avail)  ||  (avail == false && item == unavail)
				if ((avail == true && item == "Available Requests")  ||  (avail == false && item == "Unavailable Requests")) {
//					console.log('true test;')
					
					//display item.
					$(this).attr('hidden', false);
					noClimbs = false;
	
				}
			
			});

		}
		
		else {
			
			//iterate through each climb
			$.each(climbs, function(){

				// LOCATION PATH
				//get location
				let climbLoc = $(this).find('.climblist-item-location span').text();
//				console.log("climbLoc",climbLoc);

				// PERSON PATH
				//get person
				let climber = $(this).find('.climblist-item-name span').text();
//				console.log("climber",climber);

				//if location or person match
				if (item === climbLoc || item === climber) {

					//display this climb
					$(this).attr('hidden', false);
					noClimbs = false;
				}

			});
			
		}
		
		//if item = all
		if (item == "All Requests") {

			//display all climbs
			$('.climblist-item').attr('hidden', false);
			noClimbs = false;
		}
		
		if (noClimbs) {
			$('#no-climbs').attr('hidden', false);
		}
	
	});	

	
	// FILTER DATE ON PAGE LOAD
	if (path === "/search-climbs.html" || path === "/search-climbs") {
		filterDate();
	}



			/**
			 *  ---  $(document).ready()  ---
			 */

			// DISABLE MAP SCROLL ON LOAD, TOGGLE ON CLICK
//			let mapWrap = $('#map-wrap');
//			let map = $('#map');

//			map.addClass('scrolloff');
//			mapWrap.click(map.removeClass('scrolloff'));

//			// re-enable scrolling on mouseleave
//			mapWrap.mouseleave(function () {
//			map.addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
//			});

//			let mapWrap = $('#map-wrap');
//			let map = $('#map');

//			map.addClass('scrolloff');
//			mapWrap.click(function () {
//			map.toggleClass('scrolloff');
//			});

//			// re-enable scrolling on mouseleave
//			mapWrap.mouseleave(function () {
//			map.addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
//			});








		});

//		------------------------------------------------------------------------


		/**
		 *  ---  External Functions  ---
		 */

		let addClickEvents = function(){
//			console.log("made it");
//			console.log("what I want is:", $('#main').find('.ppl-content'));
			$('.ppl-content').attr('hidden', true);
			let mainContent = $('#main').find('.ppl-content');
//			console.log("mainContent is:", mainContent);
			$.each(mainContent, function(){
//				console.log('each');
//				console.log($(this), $(this).attr('id'));
			})
			let alsoMainContent = $('.ppl-content');
//			console.log("alsoMainContent is:", alsoMainContent);

//			store all children of the main div as an object (variable)
			let users = $('#ppl-detail').find('button');
//			console.log(users);
//			for each child of variable
//			users.each(function(){
			$.each(users, function(){
//				get it's id 
				let id = $(this).attr('id');
//				console.log("id is: ", id);
//				get it's name
//				name = id - "#" "-detail"
				let name = id.substring(0, id.length-7);
//				console.log("name is: ", name);
//				add click function
				$(this).click(function(){
					$('.ppl-content').attr('hidden', true);
//					console.log("$('#' + name + '-main') is: ", $('#' + name + '-main'));
					$('#' + name + '-main').attr('hidden', false);
				});
			});
		}

		let parseMonth = function(month) {
			let ordinalMonth = -1;
			switch (month) {
			case "Jan":
				ordinalMonth = 0;
				break;
			case "Feb":
				ordinalMonth = 1;
				break;
			case "Mar":
				ordinalMonth = 2; 
				break;
			case "Apr":
				ordinalMonth = 3;
				break;
			case "May":
				ordinalMonth = 4;
				break;
			case "Jun":
				ordinalMonth = 5;
				break;
			case "Jul":
				ordinalMonth = 6;
				break;
			case "Aug":
				ordinalMonth = 7;
				break;
			case "Sep":
				ordinalMonth = 8;
				break;
			case "Oct":
				ordinalMonth = 9;
				break;
			case "Nov":
				ordinalMonth = 10;
				break;
			case "Dec":
				ordinalMonth = 11;
				break;
			default:
			}
			return ordinalMonth;
		}
