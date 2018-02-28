
(function ($) {	$(document).ready(function () {

var handlers={
    focus: function() {
        var elm=$(this),
            value=elm.val(),
            old=elm.data("placeholder");
        if (typeof old==="undefined"){
            elm.data("placeholder", value);
            old=value;
        }
        if (old==value){
            elm.val("");
        }
    },
    blur:function() {
        var elm=$(this);
        if( elm.val() == "" ) {
            elm.val( elm.data("placeholder") );
        }
    }
};
$('input, textarea').each(function(i, elem){
    $(elem).
        focus(handlers.focus).
        blur(handlers.blur);
});
//not tested, should work!

});




});


$(window).bind('scroll', function () {
	   $('.innerheader').on("mousewheel", function() {
      // alert($(document).scrollTop());
    });
    if ($(window).scrollTop() > 650) {
		
		
        $('.innerheader').addClass('fixed fixed-menu');
    } else {
        $('.innerheader').removeClass('fixed fixed-menu');
    }
});		


		$(document).ready(function($){
            
	
	$('.faq-list li h3').click( function(){
		
	 var thisId = $(this).attr('id');
    
$('.faq-list li h3').removeClass('active');
$('.faq-list li  > div').hide();
$('.faq-list li .'+thisId).fadeIn();  
        
$('.faq-list li #'+thisId).addClass('active');
      
		
	});
	
	
 
  
  
	$('.slider-area').slick({
		infinite: true,dots: true, 
		slidesToShow: 1,
		autoplay: true,
		 arrows: false,
		autoplaySpeed: 3000,
		slidesToScroll: 1
});	
	
		$('.client-says').slick({
		infinite: true,dots: true,
		 arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1
});	
	
	   $('.rentcar-slider').slick({
        infinite: true,dots: false,
         arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1
}); 
    
	$('.ldetail-list').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    infinite: true,
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
	
	
	
	
	  
    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

	
	      });

