$(document).ready(function(){
		$('.slide').slick({
			slidesToShow: 40,
		});
	});

		/*slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var currentSlideEl = $(slick.$slides[currentSlide]),
				nextSlideEl = $(slick.$slides[nextSlide]),

				currentClass = currentSlideEl.data('watch'),
				nextClass = nextSlideEl.data('watch');

				$('.ba-header').removeClass(currentClass).addClass(nextClass);
		});*/
