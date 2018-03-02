module.exports = {
  initClientSaysSlider: function () {
    $('.client-says').slick({
      infinite: true, dots: true,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1
    });
  },
  initAreaSlider: function () {
    $('.slider-area').slick({
      infinite: true, dots: true,
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      slidesToScroll: 1
    });
  },
  initRentCarSlider: function () {
    $('.rentcar-slider').slick({
      infinite: true, dots: false,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1
    });
  },
  initDetailListSlider: function () {
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
  }
};
