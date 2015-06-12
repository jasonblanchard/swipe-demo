$(document).on('swipe', '.box', function(e) {
  var startX = e.swipestart.coords[0];
  var stopX = e.swipestop.coords[0];
  var diff = startX - stopX;

  if (diff > 0) {
    console.log("swiped left");
    // Open nav div on the left
    $('.nav').fadeOut();
  } else {
    console.log("swiped right");
    // close the nav div on the left
    $('.nav').fadeIn();
  }
});
