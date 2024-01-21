$(document).ready(function() {
  var $body = $("body"),
      $solarsys = $("#solar-system");

  var init = function() {
    $body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed").dequeue();
    });
  };

  var setView = function(view) { $body.removeClass().addClass(view); };

  $("#toggle-data").on('click', function(e) {
    e.preventDefault();
    $body.toggleClass("data-open data-close");
  });

  $("#toggle-controls").on('click', function(e) {
    e.preventDefault();
    $body.toggleClass("controls-open controls-close");
  });

  $("#data").on('click', 'a', function(e) {
    e.preventDefault();
    var ref = $(this).attr("class");
    $solarsys.removeClass().addClass(ref);
    $(this).siblings().removeClass('active').end().addClass('active');
  });

  $body.on('click', ".set-view", function() { $body.toggleClass("view-3D view-2D"); })
       .on('click', ".set-zoom", function() { $body.toggleClass("zoom-large zoom-close"); })
       .on('click', ".set-speed", function() { setView("scale-stretched set-speed"); })
       .on('click', ".set-size", function() { setView("scale-s set-size"); })
       .on('click', ".set-distance", function() { setView("scale-d set-distance"); });

  init();
});