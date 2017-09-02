$(function(){
	
	$('.about-img').onScroll('fadeInUp');
	$('.about-text > h2').onScroll('fadeInUp');
	$('.about-text > p').onScroll('fadeInUp');
	$('.services h1').onScroll('fadeInUp');
	$('div.services.wrapper > div.row > div.col.four:first-child').onScroll('fadeInUp', 1);
	$('div.services.wrapper > div.row > div.col.four:nth-child(2)').onScroll('fadeInUp', .9);
	$('div.services.wrapper > div.row > div.col.four:last-child').onScroll('fadeInUp', .8);
	$('.contact h3').onScroll('fadeInUp', .7);
	$('.forms').onScroll('fadeInUp');
	$('.contact-details').onScroll('fadeInUp');
	$('.social-items:first-child').onScroll('fadeInUp', 1);
	$('.social-items:nth-child(2)').onScroll('fadeInUp', .9);
	$('.social-items:nth-child(3)').onScroll('fadeInUp', .8);
	$('.social-items:last-child').onScroll('fadeInUp', .8);

});
$.fn.onScroll = function(animation, trigger){
	$(this).each(function(){
		var controller = new ScrollMagic.Controller();
		$(this).css('opacity', '0');
// create a scene
new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: trigger,
          reverse: false
              // start this scene after scrolling for 50px
    })
    .setClassToggle(this, animation) // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
	});
}