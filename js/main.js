var $bar = $('.chart');
var $symbol = $('.symbol');
var $female = $('.female');
var $middle = $('.middle');

$bar.waypoint(function (direction) {
  if (direction == 'down') {
    $bar.addClass('js-bar-animate');
  } else {
    $bar.removeClass('js-bar-animate');
  }
}, {offset: '50%'});

$female.waypoint(function (direction) {
  if (direction == 'down') {
    $symbol.addClass('js-symbol-animate');
  } else {
    $symbol.removeClass('js-symbol-animate');
  }
}, {offset: '70%'});

$middle.waypoint(function (direction) {
  if (direction == 'down') {
    $middle.addClass('js-middle-animate');
  } else {
    $middle.removeClass('js-middle-animate');
  }
}, {offset: '65%'});
