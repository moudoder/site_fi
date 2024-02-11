$(document).ready(function () {
  $("select").selectize();

  $('.carry-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,

  speed: 3000, // медленная смена слайдов - скорость бегущей строки
  autoplay: true, // устанавливаем автозапуск слайдера
  autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
  cssEase: 'linear', // делаем анимацию однотонной при смене слайда
  pauseOnFocus: false,
  pauseOnHover: false,
  });


  $('.rates-slider').slick({
  	variableWidth: true,
  	speed: 3000, // медленная смена слайдов - скорость бегущей строки
    autoplay: true, // устанавливаем автозапуск слайдера
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    pauseOnFocus: false,
    pauseOnHover: false,
  })

  $('body').on('click', function() {
    //$('.thanks-form-slider').addClass('final');
    return false;
  })

  $('.phone').inputmask("+7 (999) 999-9999");

  $('.modal-window').css("display", "flex");
  $('.modal-window').hide();

  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      var div = $('.modal-window .inner'); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
          $('.modal-window').fadeOut();
      }
    });
  });

  $('.open-urgency').on('click', function() {
    $('.modal-urgency').fadeIn()
    return false;
  })
  $('.modal-window__close').on('click', function() {
    $('.modal-urgency').fadeOut()
    return false;
  })


  AOS.init();
})