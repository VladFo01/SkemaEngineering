$(window).on('load', function () {
  var $preloader = $('.preloader-wrapper'),
      $svg_anm   = $preloader.find('.preloader-img_animate-wrapper');
  $svg_anm.delay(1000).fadeOut();
  $preloader.delay(1000).fadeOut('slow');
  $(document.body).removeClass('lock');
});