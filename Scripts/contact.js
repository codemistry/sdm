$(document).ready(function () {
  $(function () {
    $('.input-label').children('input').on('focus', function () {
      $(this).siblings('label').addClass('top');
    }).on('blur', function () {
      if (!$(this).val()) {
        $(this).siblings('label').removeClass('top');
      }
    });
  });

  // if ($('.input-label').val) {
  //   $(this).addClass('top');
  // } else {
  //   $(this).removeClass('top');
  // }


});

$('.calendar').pignoseCalendar();