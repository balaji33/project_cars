jQuery(document).ready(function ($) {
  $(".slider").slick({
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: true,
      responsive: [
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 400,
              settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });
});

(function ($) {
  "use strict";

  $(document).ready(function () {
      $(".popup-with-zoom-anim").magnificPopup({
          type: "inline",

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: "auto",

          closeBtnInside: true,
          preloader: false,

          midClick: true,
          removalDelay: 300,
          mainClass: "my-mfp-zoom-in",
      });

      $(".popup-with-move-anim").magnificPopup({
          type: "inline",

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: "auto",

          closeBtnInside: true,
          preloader: false,

          midClick: true,
          removalDelay: 300,
          mainClass: "my-mfp-slide-bottom",
      });
  });
  var headermain = $("header nav > ul").clone();
  var mobileleftmenu = $(".mobile-menu nav");
  mobileleftmenu.append(headermain);
  if ($(mobileleftmenu).find(".header-sub-menu ").length != 0) {
      $(mobileleftmenu).find(".header-sub-menu ").parent().append('<i class="fas fa-chevron-down d-flex align-items-center"></i>');
  }

  var mobileleftmenulist = $(".mobile-menu nav > ul > li > i");
  $(mobileleftmenulist).on("click", function () {
      if (!$(this).siblings(".header-sub-menu ").hasClass("d-block")) {
          $(this).siblings(".header-sub-menu ").addClass("d-block");
      } else {
          $(this).siblings(".header-sub-menu ").removeClass("d-block");
      }
  });

  $(".mobile-menu-close").on("click", function () {
      if (!$(".mobile-menu-close").hasClass("closemenu")) {
          $(".mobile-menu-close").addClass("closemenu");
      } else {
          $(".mobile-menu-close").removeClass("closemenu");
      }
  });

  $(".mobile-menu-close").on("click", function () {
      if (!$(".mobile-menu").hasClass("showmenu")) {
          $(".mobile-menu").addClass("showmenu");
      } else {
          $(".mobile-menu").removeClass("showmenu");
      }
  });

  $(".custom-select").each(function () {
      var classes = $(this).attr("class"),
          id = $(this).attr("id"),
          name = $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + "</span>";
      template += '<div class="custom-options">';
      $(this)
          .find("option")
          .each(function () {
              template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + "</span>";
          });
      template += "</div></div>";

      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(
      function () {
          $(this).parents(".custom-options").addClass("option-hover");
      },
      function () {
          $(this).parents(".custom-options").removeClass("option-hover");
      }
  );
  $(".custom-select-trigger").on("click", function () {
      $("html").one("click", function () {
          $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
  });
  $(".custom-option").on("click", function () {
      $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });

  $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 1,
          },
          1000: {
              items: 1,
          },
      },
  });
})(jQuery);
