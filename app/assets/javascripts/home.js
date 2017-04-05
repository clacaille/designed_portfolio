$(document).ready(function() {
  $("#title").hide().fadeIn(3000);

  setTimeout(function() {
    $(".map-label").fadeIn(3000);
  }, 3000);

  $("#north-america").hover(function() {
    $('#about-label').addClass("label-hover");
  }, function() {
    $('#about-label').removeClass("label-hover");
  });

  $("#south-america").hover(function() {
    $('#skills-label').addClass("label-hover");
  }, function() {
    $('#skills-label').removeClass("label-hover");
  });

  $("#eurasia-africa").hover(function() {
    $('#work-label').addClass("label-hover");
  }, function() {
    $('#work-label').removeClass("label-hover");
  });

  $("#australia").hover(function() {
    $('#contact-label').addClass("aus-label-hover");
  }, function() {
    $('#contact-label').removeClass("aus-label-hover");
  });

  $(".arrow-up").click(function(e) {
    e.preventDefault();
    console.log('test');
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
});
