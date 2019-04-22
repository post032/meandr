  $('.development__open').click(function(e) {
    e.preventDefault();
    $('.development__mobile').css({
      'display': 'none'
    });
    $('.development__tablet').css({
      'display': 'inline-block'
    });
    $('.development__open').toggleClass('development__button');
    $('.development__close').toggleClass('development__button');
  });

  $('.development__close').click(function(e) {
    e.preventDefault();
    $('.development__mobile').css({
      'display': 'inline-block'
    });
    $('.development__tablet').css({
      'display': 'none'
    });
    $('.development__open').toggleClass('development__button');
    $('.development__close').toggleClass('development__button');
  });


  jQuery(function($) {
    $("#phone").mask("+7(999) 999-99-99");
  });

  $("#mail").blur(function() {
    var email = $(this).val();
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  });

  $('#name').on("input", function(ev) {
    if ($(ev.target).val().length < 4) {
      $(this).addClass('about-me__invalid');
    }
    else {
      $(this).removeClass('about-me__invalid');
    }
  });
