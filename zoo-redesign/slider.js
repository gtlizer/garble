
$(function() {

	var width = 1440;
	var animationSpeed = 20000;
	var pause = 100;
	var currentSlide = 1;

	var $slider = $('.carousel');
	var $slideContainer = $slider.find('.sliderbox');
	var $slides = $slideContainer.find('.slide');

	setInterval(function() {
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
			currentSlide++;
			if (currentSlide === $slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
	}, pause);

});



// $(document).ready(function(){

// 	var totalSlide = 3
// 	var currentSlide = 1

// 	$(".right").click(function(){

// 		if(currentSlide<totalSlide){
// 			$(".sliderbox").animate({left:"-=1440"},"300")
// 			currentSlide = currentSlide+1  //currentSlide++
// 		} //end conditional
// 	}) //end right click

// 	$(".left").click(function(){
// 		if(currentSlide>1){
// 			$(".sliderbox").animate({left:"+=1440"},"300")
// 			currentSlide = currentSlide-1 //currentSlide--
// 		}
// 	}) //end left click
// }) //end doc ready
















