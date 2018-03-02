(function ($) {
  $(document).ready(function () {

    var handlers = {
      focus: function () {
        var elm = $(this),
          value = elm.val(),
          old = elm.data("placeholder");
        if (typeof old === "undefined") {
          elm.data("placeholder", value);
          old = value;
        }
        if (old == value) {
          elm.val("");
        }
      },
      blur: function () {
        var elm = $(this);
        if (elm.val() == "") {
          elm.val(elm.data("placeholder"));
        }
      }
    };
    $('input, textarea').each(function (i, elem) {
      $(elem).focus(handlers.focus).blur(handlers.blur);
    });
  });
});


$(window).bind('scroll', function () {
  $('.innerheader').on("mousewheel", function () {
    // alert($(document).scrollTop());
  });
  if ($(window).scrollTop() > 650) {
    $('.innerheader').addClass('fixed fixed-menu');
  } else {
    $('.innerheader').removeClass('fixed fixed-menu');
  }
});

$(document).ready(function ($) {
  $('.faq-list li h3').on('click', function () {
    var thisId = $(this).attr('id');
    $('.faq-list li h3').removeClass('active');
    $('.faq-list li  > div').hide();
    $('.faq-list li .' + thisId).fadeIn();
    $('.faq-list li #' + thisId).addClass('active');
  });

  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
});
