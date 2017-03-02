
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


$('.bet-slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});