
// Расскрытое пари
$('.js--vote-title a').on('click', function(){

	allBet = $( this ).parents('.vote-left').find("a"),
  	index = $.inArray( this, allBet );
  	console.log(index);

  	$('.vote-right').removeClass('active');
  	$('.vote-right:nth-child('+(index + 1)+')').addClass('active');

	$('.vote-left .js--vote-panel').removeClass('active');
	$(this).parents('.js--vote-panel').addClass('active');

});
// END Расскрытое пари

// 
// console.log($('.vote-left').find('.vote-title a'));
// 

// Скроллбар
(function($){
    $(window).on("load",function(){
        $(".what-happens_content").mCustomScrollbar();
    });
})(jQuery);
// END Скроллбар

// Slick Слайдер
$('.bet-slider').slick({
  lazyLoad: 'ondemand',
  // slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false
});
// END Slick Слайдер

// Тач для bootstrap слайдера
$("#carousel-header").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});
// END Тач для bootstrap слайдера