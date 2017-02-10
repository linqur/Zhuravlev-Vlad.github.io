// Анимированная иконка поиска
!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},f=function(n,r,f){var c=(f?"remove":"add")+"EventListener",u=e(n),s=u.length,a={};for(var l in t)a[l]=r&&r[l]?o(r[l]):t[l];for(;s--;)for(var d in a)for(var v=a[d].length;v--;)u[s][c](a[d][v],i)},i=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return f(r,t),n},n.remove=function(r,t){return f(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});
// END Анимированная иконка поиска

// Раскрывает поле поиска при клиике на иконку
transformicons.add('.tcon')
$('.navbar-bottom .tcon').on('click',function(){
	if($('.navbar-bottom #search').hasClass('focus')){
		$('.navbar-bottom #search').removeClass('focus');
		$('.navbar-bottom_search').removeClass('col-xs-12');
	}else{
		$('.navbar-bottom #search').addClass('focus');
		$('.navbar-bottom_search').addClass('col-xs-12');
	}
});
//END  Раскрывает поле поиска при клиике на иконку
// Кнопка "Купить" при ховере на продукт
$('.product').hover(function(){
  $(this).find('.price').toggle();
  $(this).find('.btn-basket-block').toggle();
});
// Кнопка "Купить" при ховере на продукт
// $(function () {
//     $("[rel='tooltip']").tooltip();
// });
	
// Фиксирует сайдбар
var StickyElement = function(node){
  var doc = $(document), 
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');
  
  var onScroll = function(e){
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
    if(docTop > anchorTop){
      if(!fixed){
        anchor.height(content.outerHeight());
        content.addClass('fixed');        
        fixed = true;
      }
    }  else   {
      if(fixed){
        anchor.height(0);
        content.removeClass('fixed'); 
        fixed = false;
      }
    }
  };
  
  $(window).on('scroll', onScroll);
};
//END Фиксирует сайдбар


// Не скрывать раскрывающееся мень при нажатии во внутрь
$('ul.dropdown-menu.subcategory').on('click', function(event){
    var events = $._data(document, 'events') || {};
    events = events.click || [];
    for(var i = 0; i < events.length; i++) {
        if(events[i].selector) {

            //Check if the clicked element matches the event selector
            if($(event.target).is(events[i].selector)) {
                events[i].handler.call(event.target, event);
            }

            // Check if any of the clicked element parents matches the 
            // delegated event selector (Emulating propagation)
            $(event.target).parents(events[i].selector).each(function(){
                events[i].handler.call(this, event);
            });
        }
    }
    event.stopPropagation(); //Always stop propagation
});
//END Не скрывать раскрывающееся мень при нажатии во внутрь

 $(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$('.order_link a').click(function(){

  allOrderLink = $( this ).parents('.order_link').find('a'),
  index = $.inArray( this, allOrderLink );

  console.log(index);
  $('.order_link li').removeClass();
  $('.order_link li:nth-child('+(index) +')').addClass('active-neighbor');
  $('.order_link li:nth-child('+(index + 2) +')').addClass('active-neighbor');

  $('.order_link li:nth-child('+(index - 1) +')').addClass('active-neighbor-neighbor');
  $('.order_link li:nth-child('+(index + 3) +')').addClass('active-neighbor-neighbor');

});
$(document).ready(function() {
  $(form0).find('input').each(function() {
    var input = $(this);
    var label = input.parent().children('label'); if(label.length==0) return;
    
    if(label.hasClass('valid')) label.removeClass('valid');
    if(!label.hasClass('animate')) label.addClass('animate');
    
    label.click(function() { input.focus(); });
    input.on('keyup focus blur', event);
  });

  function event(e) {
    e = e || window.event;
    var label = $(this).parent().children('label'); if(label.length==0) return;
    if($(this).val().length==0 && label.hasClass('valid')) label.removeClass('valid');
    else if($(this).val().length>0 && !label.hasClass('valid')) label.addClass('valid');
  }
});