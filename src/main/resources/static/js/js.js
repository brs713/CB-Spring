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

//NOT WORKING RIGHT NOW... FIX IT!	
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


