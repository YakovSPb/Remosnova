document.addEventListener("DOMContentLoaded", function() {


// SLIDER
	$('.promo').slick({
		autoplay: true,
		dots: true,
		arrows: false,
	});

 $(".slick-dots").wrapAll("<div class='dots_wrap'></div>");

$('.slick-dots').before('<div class="left_arrow"><img src="../img/@2x/slider-arrow.png" alt="alt" /></div>');
$('.slick-dots').after('<div class="right_arrow"><img src="../img/@2x/slider-arrow.png" alt="alt" /></div>');

$('.dots_wrap .left_arrow').on('click', function() {
  $('.promo').slick('slickPrev');
});
$('.dots_wrap .right_arrow').on('click', function() {
  $('.promo').slick('slickNext');
});
// END SLIDER

// SECOND SLIDER
$('.media-slider__wrap').slick({
	prevArrow: '<div class="y_prevArrow"><img alt="" src="img/@2x/arrow_tube.png"></div>',
	nextArrow: '<div class="y_nextArrow"><img alt="" src="img/@2x/arrow_tube.png"></div>',
	
});
// END SECOND SLIDER

});