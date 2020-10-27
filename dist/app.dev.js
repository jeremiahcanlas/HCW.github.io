"use strict";

var current = $('.home-page'),
    onDisplay = false;
$("[data-toggle=popover]").popover(); // navbar collapses when user clicks on nav options

$('.navbar-collapse a').on('click', function () {
  $(".navbar-collapse").collapse('hide');
});
$('.main-logo').on('click', function (e) {
  if (current !== $('.home-page')) {
    current.hide();
    $('.home-page').fadeIn();
    $(".navbar-collapse").collapse('hide');
  }

  current = $('.home-page');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var data = _step.value;
    $("#".concat(data, "-btn")).on('click', function () {
      if (current !== $(".".concat(data))) {
        current.hide();
        $(".".concat(data)).fadeIn();
        $(".".concat(data, "-page")).fadeIn();
        $(".".concat(data, "-dynamic")).fadeIn();
        $(".".concat(data, "-nav")).fadeIn();
        $(".".concat(data, "-dyn-out")).hide();
        $('.go-back').hide();
        $('.map-dyn').hide();
        $('.answer').removeClass('p-show');
      }

      current = $(".".concat(data, "-page"));
    });
  };

  for (var _iterator = mainNav[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

$('.go-back').on('click', function (event) {
  var target = $(event.target);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = backDyn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var data = _step2.value;
      var key = data.btn;

      if (target.hasClass("".concat(key, "-b"))) {
        $(".".concat(key, "-page")).fadeIn();
        $(".".concat(key, "-nav")).fadeIn();
        $(".".concat(key, "-dyn-out")).hide();
        $('.go-back').hide();
        $('html, body').animate({
          scrollTop: $(".".concat(key, "-back")).first().offset().top - 200
        }, 700);
        onDisplay = false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
});
$('.abt-page').on('click', function (event) {
  var target = $(event.target);
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = aboutUsBtn[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var data = _step3.value;

      if (target.hasClass(data.btn)) {
        $('.abt-dyn-out').hide().fadeIn().html(data.html);
        $('html, body').animate({
          scrollTop: $('.abt-btn').first().offset().top
        }, 700);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
});
$('.srv-nav').on('click', function (event) {
  var target = $(event.target);
  onDisplay = true;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = servicesBtn[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var data = _step4.value;

      if (target.hasClass(data.btn) || target.parent().hasClass(data.btn)) {
        $('.srv-dyn-out').hide().fadeIn().html(data.html);
        $('.srv-nav').hide();
        $('.go-back').fadeIn();
        $('html, body').animate({
          scrollTop: $('.anchor-dyn').first().offset().top - 190
        }, 700);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
});
$('.pkg-nav').on('click', function (event) {
  var target = $(event.target);
  onDisplay = true;
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = pkgBtn[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var data = _step5.value;

      if (target.hasClass(data.btn) || target.parent().hasClass(data.btn)) {
        $('.pkg-dyn-out').hide().fadeIn().html(data.html);
        $('.pkg-nav').hide();
        $('.go-back').fadeIn();
        $('html, body').animate({
          scrollTop: $('.anchor-dyn2').first().offset().top
        }, 700);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
});
$('.map-nav').on('click', function (event) {
  var target = $(event.target);
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = mapBtn[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var data = _step6.value;

      if (target.hasClass(data.btn)) {
        $('.map-dyn').hide().fadeIn().html(data.html);
        $('html, body').animate({
          scrollTop: $('.map-dyn').first().offset().top
        }, 700);
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
});
$('#questions').on('click', function (event) {
  var target = $(event.target);

  for (var i = 1; i <= 10; i++) {
    if (target.hasClass("q".concat(i))) {
      $(".a".concat(i)).toggleClass('p-show');
    }
  }
});
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 0) {
    $('.scroll-below').fadeOut();
  } else {
    if (!onDisplay) {
      $('.scroll-below').fadeIn();
    } else {
      $('.scroll-below').hide();
    }
  }
});