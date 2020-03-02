// Global Variables

var globalWindowWidth = $(window).width();

/////// ---------------- > CSSE Preset Dropdown Selectable Animations

function ApplyAnimations() {
  $(".CSSEanim-zoomIn")
    .addClass("hideme")
    .viewportChecker({
      classToAdd: "showme animated zoomIn",
      offset: 100
    });
  $(".CSSEanim-fadeInDown")
    .addClass("hideme")
    .viewportChecker({
      classToAdd: "showme animated fadeInDown",
      offset: 100
    });
  $(".CSSEanim-fadeInUp")
    .addClass("hideme")
    .viewportChecker({
      classToAdd: "showme animated fadeInUp",
      offset: 100
    });
  $(".CSSEanim-fadeInLeft")
    .addClass("hideme")
    .viewportChecker({
      classToAdd: "showme animated fadeInLeft",
      offset: 100
    });
  $(".CSSEanim-fadeInRight")
    .addClass("hideme")
    .viewportChecker({
      classToAdd: "showme animated fadeInRight",
      offset: 100
    });
  $(".CSSEanim-lightSpeedIn")
    .addClass("hideme")
    .viewportChecker({
      classToAdd: "showme animated lightSpeedIn",
      offset: 100
    });
}

/////// ---------------- > Dustin's Simple Little Parallax Function

function parallax() {
  parallaxItem = $(".parallax");
  if (parallaxItem.length > 0) {
    var windowScroll = $(document).scrollTop();
    var distanceFromTop = $(parallaxItem).offset().top;
    var eventscroll = windowScroll / 4;
    var distance = distanceFromTop / 2;
    $(".parallax-up").css({
      "background-position": "center " + (-distance - eventscroll) + "px" //-distance
    });
    $(".parallax-down").css({
      "background-position": "center " + (-distance + eventscroll) + "px" //-distance
    });
  }
}

/////// ---------------- > Apply se_button class to buttons in aurora that still do not have the proper se_button class

function ApplyButtonClass() {
  $(".read_more_div, a.read_more_link").addClass("se_button");
  $(
    '#blog_post_comment_new_comment_actions input[type="submit"], #search_form_button'
  ).addClass("seFormButton");
}

// ------ Doc Ready ------ \\

$(function() {

  // =========================== social circle icon dropdown =========================== \\

  $(document).ready(function() {
    $(".more").click(function() {
      $(".menu a")
        .not(":last-child")
        .toggleClass("show");
    });
  });

  $("#lightbox-nav img").addClass("wow fadeInUp");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".menu").hide("slide", { direction: "right" }, 500);
    } else {
      $(".menu").show("slide", { direction: "right" }, 500);
    }
  });

  $(".more").click(function() {
    $(this).toggleClass("toggle");
  });

  var btn = $("#back-to-top");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // =========================== Theme Functions =========================== \\

  // --------- Do things on all sizes ---------- \\

  //////// ------------- > Edit in full screen

  var acc = $("#auroraContentContainer");
  acc.prepend('<div class="expander" title="Toggle Expanded View"></div>');
  $(".expander").on("click", function() {
    $("body").toggleClass("expanded-view");
  });

  /////// --------------- > Add empty region class to feature if does not contain content

  if ($(".feature-content .le_content").length <= 0) {
    $(".header-wrap").addClass("no-feature");
  } else {
    $(".feature-container").addClass("has-feature");
  }

  ApplyButtonClass();

  /// Menu Toggle

  $(".navicon").click(function(event) {
    $("body").toggleClass("OpenMobileMenu");
  });

  /////// ---------------- > Other General Aurora Items

  $(".htmlSlide").removeAttr("style");

  // --------- Do things based on screensize ---------- \\

  if (globalWindowWidth > 767) {
    parallax();
    ApplyAnimations();
    $(window).scroll(function() {
      parallax();
    });
  } //End desktop only
  
}); // ------ END Doc Ready ------ \\
