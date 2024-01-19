// equal height
function equalHeight() {
  jQuery.fn.extend({
    equalHeight: function () {
      var top = 0;
      var row = [];
      var classname = ("equalHeight" + Math.random()).replace(".", "");
      jQuery(this)
        .each(function () {
          var thistop = jQuery(this).offset().top;
          if (thistop > top) {
            jQuery("." + classname).removeClass(classname);
            top = thistop;
          }
          jQuery(this).addClass(classname);
          jQuery(this).height("auto");
          var h = Math.max.apply(
            null,
            jQuery("." + classname)
              .map(function () {
                return jQuery(this).outerHeight();
              })
              .get()
          );
          jQuery("." + classname).height(h);
        })
        .removeClass(classname);
    },
  });
  jQuery(
    ".niveshaay-news .niveshaay-news-slider .niveshaay-news-item .niveshaay-news-inner"
  ).equalHeight();
  jQuery(
    ".niveshaay-client .niveshaay-client-content .client-content-wrapper .content-wrapper p"
  ).equalHeight();
  jQuery(
    ".niveshaay-client .niveshaay-client-content .client-content-wrapper .client-profile-wrapper"
  ).equalHeight();
  jQuery(".niveshaay-siksha .siksha-grid-inner h3").equalHeight();
  jQuery(".twitter-feeds-section .twitter-content-wrapper").equalHeight();
  jQuery(
    ".twitter-feeds-section .feeds-content-inner .feeds-image-wrapper"
  ).equalHeight();
  jQuery(
    ".research-card-section .research-card-grid .white-card .card-content-wrapper"
  ).equalHeight();

  jQuery(
    ".featured-on .list-wrapper .list-inner-wrapper .list-item ul"
  ).equalHeight();
  jQuery(
    ".list-catagory-section .list-catagory-wrapper .list-wrapper .list-item-wrapper .list-item .item-content-wrapper .content-wrap"
  ).equalHeight();
  setTimeout(function () {
    jQuery(".twitter-feeds-section .twitter-content-wrapper").equalHeight();
    jQuery(
      ".twitter-feeds-section .feeds-content-inner .feeds-image-wrapper"
    ).equalHeight();
    jQuery(
      ".list-catagory-section.niveshaay-research-block .list-catagory-wrapper .list-wrapper .list-inner-wrapper .list-item-wrapper .list-item .item-content-wrapper h3"
    ).equalHeight();
    jQuery(
      ".list-catagory-section.niveshaay-research-block .list-catagory-wrapper .list-wrapper .list-inner-wrapper .list-item-wrapper .list-item .item-content-wrapper .item-inner-content p"
    ).equalHeight();
    jQuery(
      ".niveshaay-pick-smallcase .smallcase-grid .grid-item .title-block"
    ).equalHeight();
    jQuery(
      ".list-catagory-section.niveshaay-research-block.has-left-content .list-catagory-wrapper .list-wrapper .list-inner-wrapper .item-img-wrapper"
    ).equalHeight();
    jQuery(".research-card-section .white-card .card-title").equalHeight();
    jQuery(
      ".research-card-section .white-card .card-content-wrapper"
    ).equalHeight();
    // jQuery(
    //   ".recommendtion-table-section .company-logo-list-wrap .company-logo-list .company-logo a"
    // ).equalHeight();
    // jQuery(
    //   ".our-team-section .team-slider-wrapper .team-member-wrapper .team-member-inner .member-detail p"
    // ).equalHeight();
  }, 500);
}

function adj_header(){
  var hheight = ($(".niveshaay-header").height());
   $(".main-wrapper").css("padding-top",hheight)
}
function adj_footer() {
  var fheight = $(".site-footer-wrap").height();
  $(".main-wrapper").css("padding-bottom", fheight);
  $(".site-footer-wrap").css("margin-top", -fheight);
}

function init() {
  var vidDefer = document.getElementsByTagName("iframe");
  for (var i = 0; i < vidDefer.length; i++) {
    if (vidDefer[i].getAttribute("data-src")) {
      vidDefer[i].setAttribute("src", vidDefer[i].getAttribute("data-src"));
    }
  }
}
function mobileMenu() {
  if (jQuery(window).width() <= 1024) {
    jQuery(".hamburger")
      .unbind("click")
      .click(function () {
        jQuery("html,body").toggleClass("mobile-menu");
        if (
          jQuery(".niveshaay-header .header-wrapper .user-dropdown-wrapper")
            .length
        ) {
          if (jQuery("html,body").hasClass("mobile-menu")) {
            if (
              jQuery(
                ".niveshaay-header .header-wrapper .user-dropdown-wrapper"
              ).hasClass("open")
            ) {
              jQuery(
                ".niveshaay-header .header-wrapper .user-dropdown-wrapper"
              ).removeClass("open");
            }
            jQuery(
              ".niveshaay-header .header-wrapper .user-dropdown-wrapper"
            ).css({
              opacity: 0,
              visibility: "hidden",
            });
          } else {
            jQuery(
              ".niveshaay-header .header-wrapper .user-dropdown-wrapper"
            ).removeAttr("style");
          }
        }
      });
  } else {
    jQuery("html,body").removeClass("mobile-menu");
  }
}

function addPadding() {
  var headerHeight = jQuery(".niveshaay-header").innerHeight();
  jQuery(".main-wrapper").css("padding-top", headerHeight);

  if (jQuery(".home-page-banner-section .banner-slider-wrapper").length) {
    jQuery(
      ".home-page-banner-section .banner-slider-wrapper .home-banner-slider"
    ).css("min-height", jQuery(window).height() - headerHeight);
    jQuery(".home-page-banner-section").addClass("loaded");
  }
}

// Tab to accordion service page
var service_flag = true;
function serviceAccordion() {
  if (jQuery(window).width() <= 991) {
    if (service_flag) {
      jQuery(".services-tabbing-section .tab-heading-block li a").each(
        function () {
          var _id = jQuery(this).attr("data-tab");
          var element = jQuery(
            ".services-tabbing-section .tab-content-block .tab-content-inner[data-id='" +
              _id +
              "']"
          );
          element.detach().appendTo(jQuery(this).parent());
        }
      );
      service_flag = false;
    }
  } else {
    if (!service_flag) {
      var current_id = jQuery(
        ".services-tabbing-section .tab-heading-block li.active a"
      ).attr("data-tab");
      jQuery(".services-tabbing-section .tab-heading-block li").each(
        function () {
          jQuery(this)
            .children(".tab-content-inner")
            .detach()
            .appendTo(".services-tabbing-section .tab-content-block");
        }
      );
      setTimeout(function () {
        if (current_id == undefined) {
          console.log("if");
          jQuery(
            ".services-tabbing-section .tab-content-block .tab-content-inner:first-child"
          ).addClass("active");
          jQuery(
            ".services-tabbing-section .tab-heading-block li:first-child"
          ).addClass("active");
        } else {
          jQuery(
            ".services-tabbing-section .tab-content-block .tab-content-inner[data-id='" +
              current_id +
              "']"
          )
            .siblings()
            .removeClass("active");
          jQuery(
            ".services-tabbing-section .tab-content-block .tab-content-inner[data-id='" +
              current_id +
              "']"
          ).addClass("active");
          jQuery(
            ".services-tabbing-section .tab-heading-block li a[data-tab='" +
              current_id +
              "']"
          )
            .parent()
            .addClass("active");
          jQuery(
            ".services-tabbing-section .tab-heading-block li a[data-tab='" +
              current_id +
              "']"
          )
            .parent()
            .siblings()
            .removeClass("active");
        }
        jQuery(
          ".services-tabbing-section .tab-content-block .tab-content-inner"
        ).removeAttr("style");
      }, 100);
      service_flag = true;
    }
  }
}

//services-tabbing-section
function serviceTabbing() {
  jQuery(
    ".services-tabbing-section .tab-heading-block a:not(.services-click-btn)"
  )
    .unbind("click")
    .click(function (e) {
      e.preventDefault();
      if (jQuery(window).width() <= 991) {
        var _this = jQuery(this).attr("data-tab");
        var _thisvar = jQuery(this);
        jQuery(this)
          .closest("li")
          .siblings()
          .find(".tab-content-inner")
          .slideUp("slow");
        jQuery(".tab-content-inner[data-id='" + _this + "']")
          .stop(true, true)
          .slideToggle();
        jQuery(this)
          .closest("li")
          .find(".tab-content-inner[data-id='" + _this + "']")
          .toggleClass("active");
        jQuery(this)
          .closest("li")
          .siblings()
          .find(".tab-content-inner")
          .removeClass("active");
        jQuery(this).closest("li").toggleClass("active");
        jQuery(this).closest("li").siblings().removeClass("active");
        if (jQuery(".tab-content-inner.active").find(".slick-slider")) {
          console.log("found-slider");
          jQuery(".tab-content-inner.active .slick-slider").slick("refresh");
          equalHeight();
          setTimeout(function () {
            jQuery(".tab-content-inner.active")
              .toggleClass("opacity")
              .closest("li")
              .siblings()
              .find(".tab-content-inner")
              .removeClass("opacity");
          }, 700);
        }
      } else {
        var _this = jQuery(this).attr("data-tab");
        jQuery(".tab-content-inner[data-id='" + _this + "']")
          .siblings()
          .fadeOut(0);
        jQuery(".tab-content-inner[data-id='" + _this + "']").fadeIn(300);
        jQuery(".tab-content-inner[data-id='" + _this + "']")
          .addClass("active")
          .siblings()
          .removeClass("active");
        jQuery(this).closest("li").addClass("active");
        jQuery(this).closest("li").siblings().removeClass("active");
        if (jQuery(".tab-content-inner.active").find(".slick-slider")) {
          jQuery(".slick-slider").slick("refresh");
          equalHeight();
          setTimeout(function () {
            jQuery(".tab-content-inner.active")
              .addClass("opacity")
              .siblings()
              .removeClass("opacity");
          }, 700);
        }
      }
    });
}

jQuery(document).ready(function () {
  jQuery(".custom-dropdown").select2({
    placeholder: "Select a State/UnionTerritory",
    // minimumResultsForSearch: Infinity,
  });
  $(".investor-list").select2({
    placeholder: "Select letter",
  });
  adj_header();
  adj_footer();
  mobileMenu();
  addPadding();
  equalHeight();
  serviceAccordion();
  serviceTabbing();
  jQuery("html,body").click(function () {
    if (
      jQuery(
        ".niveshaay-header .header-wrapper .user-dropdown-wrapper"
      ).hasClass("open")
    ) {
      jQuery(
        ".niveshaay-header .header-wrapper .user-dropdown-wrapper"
      ).removeClass("open");
    }
  });
  jQuery(
    ".niveshaay-header .header-wrapper .user-dropdown-wrapper .dropdown-link"
  ).click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    jQuery(this).closest(".user-dropdown-wrapper").toggleClass("open");
  });

  jQuery(".niveshaay-complaints-section .tab-heading-wrapper span").click(
    function () {
      jQuery(this).closest(".tab-heading-wrapper").toggleClass("open");
    }
  );
  jQuery(
    ".niveshaay-complaints-section .tab-heading-wrapper .tab-heading li"
  ).click(function () {
    var _id = jQuery(this).attr("data-id");
    jQuery(".niveshaay-complaints-section .tab-heading-wrapper").removeClass(
      "open"
    );
    jQuery(this).addClass("active").siblings().removeClass("active");
    jQuery(
      ".niveshaay-complaints-section .tab-content-wrapper .niveshhay-table-responsive[data-attr='" +
        _id +
        "']"
    )
      .addClass("active")
      .siblings()
      .removeClass("active");
    jQuery(this)
      .closest(".niveshaay-complaints-section .tab-heading-wrapper")
      .find("span")
      .text(jQuery(this).text());
  });

  // Home page banner slider
  if (jQuery(".home-page-banner-section .banner-slider-wrapper").length) {
    jQuery(".home-page-banner-section .banner-slider-wrapper").slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      fade: true,
      infinite: true,
      speed: 1000,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 0.7)",
    });
    setTimeout(function () {
      jQuery(
        ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content h2"
      ).removeClass("aos-animate");
      jQuery(
        ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content .banner-content"
      ).removeClass("aos-animate");
      setTimeout(function () {
        jQuery(
          ".home-page-banner-section .banner-slider-wrapper .home-banner-slider"
        ).removeClass("not-visible");
        jQuery(
          ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content h2"
        ).addClass("aos-animate");
        jQuery(
          ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content .banner-content"
        ).addClass("aos-animate");
      }, 800);
    }, 400);

    jQuery(".home-page-banner-section .banner-slider-wrapper")
      .on("beforeChange", function () {
        jQuery(
          ".home-page-banner-section .banner-slider-wrapper .home-banner-slider"
        ).addClass("not-visible");
        setTimeout(function () {
          jQuery(
            ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content h2"
          ).removeClass("aos-animate");
          jQuery(
            ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content .banner-content"
          ).removeClass("aos-animate");
        }, 400);
      })
      .on("afterChange", function (event, slick, currentSlide) {
        jQuery(
          ".home-page-banner-section .banner-slider-wrapper .home-banner-slider"
        ).removeClass("not-visible");
        jQuery(
          ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content h2"
        ).addClass("aos-animate");
        jQuery(
          ".home-page-banner-section .banner-slider-wrapper .home-banner-slider .home-banner-content .banner-content"
        ).addClass("aos-animate");
      });
  }
  //custom-modal
  jQuery(".modal-link").click(function (e) {
    e.preventDefault();
    jQuery("body,html").addClass("open-modal");
    var obj = jQuery(this).attr("data-link");
    var activemodal = jQuery("[data-tab='" + obj + "']");
    activemodal.addClass("visible");

    if (obj == "home-video-modal") {
      var _this_link = jQuery(this).attr("data-video");
      jQuery(".home-video-modal .video-inner-wrapper iframe").attr(
        "src",
        _this_link
      );
    }
  });
  // jQuery('.signup-page .login-link').click(function(e){
  //    jQuery('#login-modal').addClass('visible');
  // });
  jQuery(".modal-close, .modal-backdrop").click(function (e) {
    e.preventDefault();
    jQuery("body,html").removeClass("open-modal");
    jQuery(this).closest(".custom-modal").removeClass("visible");
    jQuery(".home-video-modal .video-inner-wrapper iframe").attr("src", " ");
  });
  jQuery(".custom-modal").click(function (e) {
    e.preventDefault();
    jQuery("body,html").removeClass("open-modal");
    jQuery(this).removeClass("visible");
  });
  jQuery(".custom-modal .modal-body").click(function (e) {
    e.stopPropagation();
  });

  //slider-opacity
  equalHeight();

  // Datepicker
  if (jQuery(".datepicker").datepicker) {
    jQuery(".datepicker").datepicker({
      dateFormat: "dd/mm/yy",
      changeMonth: true,
      changeYear: true,
      yearRange: "1960:",
    });
  }
  // // our-research-slider
  // if (jQuery('.niveshaay-research-block .list-inner-wrapper:not(.featured-on)').length) {
  //     jQuery('.niveshaay-research-block .list-inner-wrapper:not(.featured-on)').slick({
  //         arrows: true,
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         dots: true,
  //         autoplay:false,
  //         responsive: [{
  //                 breakpoint: 991,
  //                 settings: {
  //                     slidesToShow: 2,
  //                 },
  //             },
  //             {
  //                 breakpoint: 574,
  //                 settings: {
  //                     slidesToShow: 1,
  //                 },
  //             },
  //         ]
  //     });
  // }
  if (
    jQuery(".niveshaay-research-block .list-inner-wrapper.featured-on").length
  ) {
    jQuery(".niveshaay-research-block .list-inner-wrapper.featured-on").slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 574,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // pick-smallcase-slider
  // if (jQuery('.niveshaay-pick-smallcase .smallcase-grid').length) {
  //     jQuery('.niveshaay-pick-smallcase .smallcase-grid').slick({
  //         arrows: true,
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         dots: true,
  //         autoplay:true,
  //         responsive: [{
  //                 breakpoint: 991,
  //                 settings: {
  //                     slidesToShow: 2,
  //                 },
  //             },
  //             {
  //                 breakpoint: 574,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     adaptiveHeight:true,
  //                 },
  //             },
  //         ]
  //     });
  // }
  // our-team-slider
  // if (jQuery(".our-team-section .team-slider-wrapper").length) {
  //   jQuery(".our-team-section .team-slider-wrapper").slick({
  //     arrows: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     dots: true,
  //     autoplay: true,
  //     autoplaySpeed: 10000,
  //     responsive: [
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 574,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });
  // }
  // our-client-slider
  if (jQuery(".niveshaay-client .our-clients-slider").length) {
    jQuery(".niveshaay-client .our-clients-slider").on(
      "init",
      function (event, slick) {
        equalHeight();
      }
    );
    jQuery(".niveshaay-client .our-clients-slider").slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  //in-the-news-slider
  if (jQuery(".niveshaay-news .niveshaay-news-slider").length) {
    jQuery(".niveshaay-news .niveshaay-news-slider").slick({
      slidesToShow: 5,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
  //twitter-feeds-slider
  if (jQuery(".twitter-feeds-section .twitter-feeds-slider").length) {
    jQuery(".twitter-feeds-section .twitter-feeds-slider").slick({
      slidesToShow: 4,
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 574,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  // as seen section
  if (jQuery(".as-seen-on-section .seen-on-wrap").length) {
    jQuery(".as-seen-on-section .seen-on-wrap").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 574,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
  $(".answer").hide();
  $(".question").click(function () {
    $(this).closest(".faq-wrap").find(".answer").slideToggle();
    $(this).closest(".faq-wrap").toggleClass("open");
    $(".answer").not($(this).closest(".faq-wrap").find(".answer")).slideUp();
    $(".faq-wrap").not($(this).closest(".faq-wrap")).removeClass("open");
  });
  
  $(".financial-year-content").hide();
  $(".financial-year-heading").click(function () {
    $(this).closest(".financial-year-detail").find(".financial-year-content").slideToggle();
    $(this).closest(".financial-year-detail").toggleClass("open");
    $(".financial-year-content").not($(this).closest(".financial-year-detail").find(".financial-year-content")).slideUp();
    $(".financial-year-detail").not($(this).closest(".financial-year-detail")).removeClass("open");
  });
  if($("#allocation-recommendations").length>0){
    new DataTable("#allocation-recommendations", {
      scrollX: true,
      pagingType: "full_numbers",
      info: false,
      paging: false
    });
    $("#globalSearch").on("keyup", function () {
      $("#allocation-recommendations").DataTable().search(this.value).draw();
    });
  }

if($("#Current-recommendations").length>0){
  new DataTable("#Current-recommendations", {
    scrollX: true,
    pagingType: "full_numbers",
    info: false,
    paging: false
  });
  $("#Current-recommendation").on("keyup", function () {
    $("#Current-recommendations").DataTable().search(this.value).draw();
  });
}
 if($("#past-recommendation").length>0){
  new DataTable("#past-recommendation", {
    scrollX: true,
    pagingType: "full_numbers",
    info: false,
    paging: false
  });
  $("#past-recommendations").on("keyup", function () {
    $("#past-recommendation").DataTable().search(this.value).draw();
  });
 }
if($("#recent-recommendation").length>0){
  new DataTable("#recent-recommendation", {
    scrollX: true,
    pagingType: "full_numbers",
    info: false,
    paging: false
  });

  $("#recent-recommendations").on("keyup", function () {
    $("#recent-recommendation").DataTable().search(this.value).draw();
  });
}
 
  $(".switch").click(function(){
    $(".company-detail-wrap").toggleClass("toggle")
  })
  $(".profile-img").click(function(){
    $(".profile-block .dropdown-menu").slideToggle()
  })
  $(window).click(function(e){
   
    var container = $(".profile-img");
    var container1 = $(".profile-block .dropdown-menu");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container1.slideUp();
    }
  })
  jQuery("#login-modal form").submit(function (e) {
    e.preventDefault();
    jQuery.ajax({
      url: "https://www.niveshaay.com/front-login",
      type: "POST",

      data: jQuery("#login-modal form").serialize(),
      success: function (data) {
        if (data.success == 1) {
          window.location.href = "https://www.niveshaay.com/dashboard";
        } else {
          if (data.message.email) {
            jQuery("#login-modal-email-error").html(data.message.email[0]);
          } else if (data.message.password) {
            jQuery("#login-modal-error").html(data.message.password[0]);
          } else {
            jQuery("#login-modal-error").html(data.message);
          }
        }
      },
      error: function (res) {
        console.log(res.status);
      },
    });
  });
});
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
    // setTimeout(function(){
    // },1400);
  });
}
function reloadJs(src) {
  src = $('script[src$="' + src + '"]').attr("src");
  $('script[src$="' + src + '"]').remove();
  $("<script defer/>").attr("src", src).appendTo("body");
}
jQuery(window).load(function () {
  setTimeout(function () {
    equalHeight();
  }, 1000);
  // AOS.init();
});

jQuery(window).on("resize", function () {
  mobileMenu();
  addPadding();
  adj_header();
  adj_footer();
  setTimeout(function () {
    serviceAccordion();
    serviceTabbing();
  }, 100);
  setTimeout(function () {
    equalHeight();
  }, 500);
});

// jQuery(document).ready(function () {
//   // Read the cookie and if it's defined scroll to id
//   var scroll = jQuery.cookie('scroll');
//   if(scroll){
//       scrollToID(scroll, 1000);
//       jQuery.removeCookie('scroll');
//   }

//   // Handle event onclick, setting the cookie when the href != #
//   jQuery('.redirect-link').click(function (e) {
//       e.preventDefault();
//       var id = jQuery(this).data('id');
//       var href = jQuery(this).attr('href');
//       if(href === '#'){
//           scrollToID(id, 1000);
//       }else{
//           jQuery.cookie('scroll', id);
//           window.location.href = href;
//       }
//   });

//   // scrollToID function
//   function scrollToID(id, speed) {
//       var offSet = 70;
//       var obj = jQuery('#' + id);
//       if(obj.length){
//         var offs = obj.offset();
//         var targetOffset = offs.top - offSet;
//         jQuery('html,body').animate({ scrollTop: targetOffset }, speed);
//       }
//   }
// });

jQuery(function ($) {
  jQuery('a[href*="#"]:not([href="#"])').click(function (e) {
    // e.preventDefault();
    var target = jQuery(this)[0].hash;
    var tar = jQuery(this.hash);
    jQuery("html,body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 60,
        },
        1100
      );
  });
  if (location.hash) {
    var id = jQuery(location.hash);
  }
  jQuery(window).load(function () {
    init()
    setTimeout(function () {
      if (location.hash) {
        jQuery("html,body").animate({ scrollTop: id.offset().top - 90 }, 600);
      }
    }, 500);
  });
  jQuery(document).ready(function () {
    if (location.hash) {
      jQuery("html,body").animate({ scrollTop: id.offset().top - 90 }, 600);
    }
  });
});
