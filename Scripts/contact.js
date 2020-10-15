$(document).ready(function () {

  $(document).on('focus', '.input-label', function () {
    $(this).siblings('label').addClass('active');
  })

  // if ($('.input-label').val) {
  //   $(this).addClass('top');
  // } else {
  //   $(this).removeClass('top');
  // }


});

$('.calendar').pignoseCalendar();