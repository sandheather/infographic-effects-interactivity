var $bar = $('.chart');
var $symbol = $('.symbol');
var $female = $('.female');
var $lineA = $('.line-1');
var $lineB = $('.line-2');
var $lineC = $('.line-3');
var $lineD = $('.line-4');
var $lineE = $('.line-5');
var $middle = $('.middle');

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

$middle.waypoint(function (direction) {
  if (direction == 'down') {
    $lineA.addClass('js-line-1-animate')
  } else {
    $lineA.removeClass('js-line-1-animate');
  }
}, { offset: '80%' });

$middle.waypoint(function (direction) {
  if (direction == 'down') {
    $lineB.addClass('js-line-2-animate')
  } else {
    $lineB.removeClass('js-line-2-animate');
  }
}, { offset: '85%' });

$middle.waypoint(function (direction) {
  if (direction == 'down') {
    $lineC.addClass('js-line-3-animate')
  } else {
    $lineC.removeClass('js-line-3-animate');
  }
}, { offset: '90%' });

$middle.waypoint(function (direction) {
  if (direction == 'down') {
    $lineD.addClass('js-line-4-animate')
  } else {
    $lineD.removeClass('js-line-4-animate');
  }
}, { offset: '95%' });

$middle.waypoint(function (direction) {
  if (direction == 'down') {
    $lineE.addClass('js-line-5-animate')
  } else {
    $lineE.removeClass('js-line-5-animate');
  }
}, { offset: '100%' });
