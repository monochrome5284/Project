$(".navbar-btn").click(function () {
  $(".navbar-collapse").toggleClass("switch");
  $(".navbar-collapse-footer").toggleClass("switch");
  $(".arrow").toggleClass("switch");
});

$('.qa-item').click(function(e) {
  $(this).toggleClass('active');
  $(this).find('.add-icon').toggleClass('d-none');
  $(this).find('.remove-icon').toggleClass('d-block');
  $(this).find('.collapse-content p').toggleClass('show');
});
