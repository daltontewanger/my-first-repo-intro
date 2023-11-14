$(document).ready(function () {
  setTimeout(function () {
    $(".logo-fade-in").animate({ opacity: 1 }, 2000);
  }, 500);

  // Handle the scroll event
  $(window).on("scroll", function () {
    $(".fade-in").each(function () {
      var elementTop = $(this).offset().top;
      var elementHeight = $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (
        elementTop + elementHeight >= viewportTop &&
        elementTop <= viewportBottom
      ) {
        $(this).addClass("in-viewport");
      }
    });
  });

  function adjustAboutUsLayout() {
    const imageContainer = document.getElementById("about-us-image");
    const aboutUsLeft = document.querySelector(".about-us-left");

    if (window.innerWidth < 600) {
      imageContainer.style.display = "none";
      aboutUsLeft.style.flex = "80%";
    } else {
      imageContainer.style.display = "block";
      aboutUsLeft.style.flex = "40%";
    }
  }

  window.addEventListener("resize", adjustAboutUsLayout);
  window.addEventListener("load", adjustAboutUsLayout);
});
