var $bar = $('.chart');
var $symbol = $('.symbol');
var $female = $('.female');
var $lines = $('.line-1');

$bar.waypoint(function (direction) {
  if (direction == 'down') {
  	$bar.addClass('js-bar-animate')
  } else {
  	$bar.removeClass('js-bar-animate');
  }
}, { offset: '50%' });

$female.waypoint(function (direction) {
  if (direction == 'down') {
  	$symbol.addClass('js-symbol-animate')
  } else {
  	$symbol.removeClass('js-symbol-animate');
  }
}, { offset: '70%' });

$female.waypoint(function (direction) {
  if (direction == 'down') {
    $symbol.addClass('js-symbol-animate')
  } else {
    $symbol.removeClass('js-symbol-animate');
  }
}, { offset: '60%' });
