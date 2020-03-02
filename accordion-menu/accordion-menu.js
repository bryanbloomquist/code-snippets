let accordion_head = $('.accordion > li > a');
let accordion_body = $('.accordion li > .sub-menu');

accordion_head.on('click', function(event) {
  event.preventDefault();  // Disable header links
  if ($(this).attr('class') != 'active') {
    accordion_body.slideUp('normal');
    $(this).next().stop(true,true).slideToggle('normal');
    accordion_head.removeClass('active');
    $(this).addClass('active');
  }
});