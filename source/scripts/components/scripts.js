// initialize animation
new WOW().init();

// initialize mask
jQuery(function($) {
  $("input[name='phone']").mask("XXX XXX XX XX");
});

// only for mobile version
if (screen.width < 768) {

  // initialize dropdown
  function dropDown(el) {
      this.dd = el;
      this.initEvents();
  }
  dropDown.prototype = {
      initEvents : function() {
          var obj = this;
          obj.dd.on('click', function(event) {
              $(this).toggleClass('active');
              event.stopPropagation();
          });
      }
  }
  $(function() {
      var dd = 0;

      dd = new dropDown($('#dd'));
      $(document).click(function() {
          $('.dd').removeClass('active');
      });
  });

  $(".article__publications--list, .article__catalog--list").wrap($("<div id='dd' class='dd'/>")).addClass("dropdown");
  $(".article__catalog--tabs").wrap($("<div id='dd' class='dd dd__catalog'/>")).addClass("dropdown");
  $("<p>Все статьи</p>").insertBefore($(".article__publications--list"));
  $("<p>Все упаковки</p>").insertBefore($(".article__catalog--list, .article__catalog--tabs"));

  // mobile main menu
  var opened = false;

  $(".header__hood--burger").click(function() {

    (!opened) ? (
      $(".open").css("display", "none"),
      $(".close, .header__hood--buttons").css("display", "block"),
      $(".header__hood--menu").stop(true, true).fadeIn({
        duration: 0, queue: false
      }).slideDown(0),
      $(".header__hood--menu").bind("touchmove", function(e) {
        e.preventDefault()
      })
    ) : (
      $(".open").css("display", "block"),
      $(".close, .header__hood--buttons").css("display", "none"),
      $(".header__hood--menu").stop(true, true).fadeOut({
        duration: 0, queue: false
      }).slideUp(0),
      $(".header__hood--menu").bind()
    );

    opened = !opened;
  });
}

// initialize anchor
$(document).on("click", "a[href^='#']", function(event) {

  event.preventDefault();

  $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 1200);
});

// modal window
$(document).mouseup(function(e) {
  if ($(".modal").has(e.target).length === 0)
    modalClose();
});

function modalOpen() {
  $("body").css("overflow", "hidden");
  $(".modal").addClass("opened");
  $(".modal").fadeIn(250);
}

function modalClose() {
  $("body").css("overflow", "auto");
  $(".modal").removeClass("opened");
  $(".modal").delay(250).fadeOut(250);
}

// project window
$(document).mouseup(function(e) {
  if ($(".project").has(e.target).length === 0)
    projectClose();
});

function projectOpen() {
  $("body").css("overflow", "hidden");
  $(".project").addClass("opened");
  $(".project").fadeIn(250);
}

function projectClose() {
  $("body").css("overflow", "auto");
  $(".project").removeClass("opened");
  $(".project").delay(250).fadeOut(250);
}

// changing logotype color
if ($(".dark-elements").length) {
  var logo = $(".header__hood--logo object");

  for (var i = 0; i < logo.length; i++) {
    logo[i].addEventListener("load", function() {
      var doc = this.getSVGDocument(),
        elem = doc.querySelector("g");

      elem.setAttribute("fill", "#090909");
    });
  }
}

// swiper touch slider on the about page
var clients = new Swiper("#clients", {
    simulateTouch: false,
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 1
      }
    }
});

// swiper touch slider on the services and portfolio pages
var swiper = new Swiper("#swiper", {
    simulateTouch: false,
    autoHeight: true,
    speed: 1000,
    loop: true,
    pagination: {
      type: "fraction",
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
});

// swiper touch slider on the blog page
var blog = new Swiper("#blog", {
    simulateTouch: false,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
});

// swiper touch slider on the post page
$(".swiper-container").each(function (index) {
    var post = new Swiper($(this)[0], {
        simulateTouch: false,
        speed: 1000,
        loop: true,
        pagination: {
          type: "fraction",
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
    });
});

// map
(function() {
  var center = { lat: 50.3639966, lng: 30.5514101 };
  var map = new google.maps.Map(document.querySelector("#map"), {
      gestureHandling: "cooperative",
      streetViewControl: false,
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      zoomControl: true,
      panControl: false,
      zoom: 15,
      center: {
        lat: center.lat - 0.00021,
        lng: center.lng + 0.0003
      },
      panControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": 36
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 40
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "lightness": "33"
            },
            {
              "saturation": "35"
            },
            {
              "color": "#b08bdf"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": "8"
            },
            {
              "saturation": "-100"
            },
            {
              "gamma": "1.09"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "lightness": "-8"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "lightness": "-3"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "lightness": "19"
            },
            {
              "color": "#a188b6"
            },
            {
              "saturation": "33"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#bb84ff"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "lightness": "66"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#553b76"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "lightness": "49"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4c4c4c"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text",
          "stylers": [
            {
              "hue": "#ff0000"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": "-91"
            },
            {
              "lightness": "100"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "lightness": 17
            }
          ]
        }
      ]
  });

  var marker = new google.maps.Marker({
    icon: '/images/map.svg',
    position: center,
    map: map
  });
})();
