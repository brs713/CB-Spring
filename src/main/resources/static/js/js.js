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


});
