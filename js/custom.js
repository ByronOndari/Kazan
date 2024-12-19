
(function ($) {

  "use strict";

  // NAVBAR
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 60;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);

//CLIENTS
const root = document.documentElement;
const clientsElementsDisplayed = getComputedStyle(root).getPropertyValue("--clients-elements-displayed");
const clientsContent = document.querySelector("ul.clients-content");

root.style.setProperty("--clients-elements", clientsContent.children.length);

for (let i = 0; i < clientsElementsDisplayed; i++) {
  clientsContent.appendChild(clientsContent.children[i].cloneNode(true));
}

// TESTIMONIALS
$(document).ready(function () {
  $(".testimonial .indicators li").click(function () {
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
  });
  $(".testimonial .tabs li").click(function () {
    var targetElement = $(".testimonial .tabs li");
    targetElement.addClass('active');
    targetElement.not($(this)).removeClass('active');
  });
});
$(document).ready(function () {
  $(".slider .swiper-pagination span").each(function (i) {
    $(this).text(i + 1).prepend("0");
  });
});
