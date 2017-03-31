// Анимированная иконка поиска
!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},f=function(n,r,f){var c=(f?"remove":"add")+"EventListener",u=e(n),s=u.length,a={};for(var l in t)a[l]=r&&r[l]?o(r[l]):t[l];for(;s--;)for(var d in a)for(var v=a[d].length;v--;)u[s][c](a[d][v],i)},i=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return f(r,t),n},n.remove=function(r,t){return f(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});
// END Анимированная иконка поиска

// Раскрывает поле поиска при клике на иконку
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
var stickyNavbar = new StickyElement($('#sticky-navbar'));
//END Фиксирует сайдбар


// Не скрывать раскрывающееся мень при нажатии во внутрь
$('.dropdown-menu.subcategory').on('click', function(event){
    var events = $._data(document, 'events') || {};
    events = events.click || [];
    for(var i = 0; i < events.length; i++) {
        if(events[i].selector) {

            if($(event.target).is(events[i].selector)) {
                events[i].handler.call(event.target, event);
            }

            $(event.target).parents(events[i].selector).each(function(){
                events[i].handler.call(this, event);
            });
        }
    }
    event.stopPropagation();
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

function formNavigation(){
	$('.order_link li').removeClass();
	$('.order_link li:nth-child('+(index) +')').addClass('active-neighbor');
	$('.order_link li:nth-child('+(index + 2) +')').addClass('active-neighbor');

	$('.order_link li:nth-child('+(index - 1) +')').addClass('active-neighbor-neighbor');
	$('.order_link li:nth-child('+(index + 3) +')').addClass('active-neighbor-neighbor');
};

$('.order_link a').click(function(){
	allOrderLink = $( this ).parents('.order_link').find('a'),
	index = $.inArray( this, allOrderLink );
	formNavigation();
});

$('.form-btn--js').click(function(){
	allOrderLink = $( this ).parents('.order-form').find('.form-btn--js'),
	index = $.inArray( this, allOrderLink );
	index ++;
	formNavigation();
	$('.order_link li:nth-child('+(index + 1) +')').addClass('active');
});


//$('.menu_link').hover(
//	function(){
//		$(this).next('.menu-collapse').find('.collapse').slideToggle('fast');
//		$(this).next('.menu-collapse').find('.collapse').addClass('in');
//	},
//	function(){
//		$(this).next('.menu-collapse').find('.collapse').slideToggle('fast');
//		$(this).next('.menu-collapse').find('.collapse').removeClass('in');
//	}
//);
//$('.menu-collapse').hover(
//	function(){
//		$(this).find('.collapse').addClass('in')
//	},
//	function(){
//		$(this).find('.collapse').removeClass('in')
//	}
//);
//stikySidebar
function stikySidebar(){
    var a = document.querySelector('#aside-stiky'), 
        b = null, 
        K = null, 
        Z = 0, 
        P = 80, 
        N = 0;
    
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    
    function Ascroll() {
      var Ra        = a.getBoundingClientRect(),
          R1bottom  = document
                    .querySelector('#article-stiky')
                    .getBoundingClientRect()
                    .bottom;
      if (Ra.bottom < R1bottom) {
        if (b == null) {
          var Sa = getComputedStyle(a, ''), s = '';
          b = document.createElement('div');
          b.className = "stop";
          b.style.cssText = s   + ' box-sizing: border-box; width: ' 
                                + a.offsetWidth + 'px;';
          a.insertBefore(b, a.firstChild);
          var l = a.childNodes.length;
          for (var i = 1; i < l; i++) {
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + 'px';
          a.style.padding = '0';
          a.style.border = '0';
        }
        var Rb = b.getBoundingClientRect(),
            Rh = Ra.top + Rb.height,
            W = document.documentElement.clientHeight,
            R1 = Math.round(Rh - R1bottom),
            R2 = Math.round(Rh - W);
        if (Rb.height > W) {
          if (Ra.top < K) {
            if (R2 + N > R1) {
              if (Rb.bottom - W + N <= 0) {
                b.className = 'sticky';
                b.style.top = W - Rb.height - N + 'px';
                Z = N + Ra.top + Rb.height - W;
              } else {
                b.className = 'stop';
                b.style.top = - Z + 'px';
              }
            } else {
              b.className = 'stop';
              b.style.top = - R1 +'px';
              Z = R1;
            }
          } else {
            if (Ra.top - P < 0) {
              if (Rb.top - P >= 0) {
                b.className = 'sticky';
                b.style.top = P + 'px';
                Z = Ra.top - P;
              } else {
                b.className = 'stop';
                b.style.top = - Z + 'px';
              }
            } else {
              b.className = '';
              b.style.top = '';
              Z = 0;
            }
          }
          K = Ra.top;
        } else {
          if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R1) {
              b.className = 'stop';
              b.style.top = - R1 +'px';
            } else {
              b.className = 'sticky';
              b.style.top = P + 'px';
            }
          } else {
            b.className = '';
            b.style.top = '';
          }
        }
        window.addEventListener('resize', function() {
          a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
      }
    }
};
//END stikySidebar

//formLabel
function formLabel(){
	$('.labelFormJs').find('input').each(function() {
	    var input = $(this);
	    var label = input.parent().children('label'); if(label.length==0) return;
	    
	    if(label.hasClass('valid')) label.removeClass('valid');
	    if(!label.hasClass('animate')) label.addClass('animate');
	    
	    label.click(function() { input.focus(); });
	    input.on('keyup focus blur', event);
	});
	
	function event(e) {
	    e = e || window.event;
	    var label = $(this).parent()
						   .children('label');
		
		if(label.length==0) return;
	    if($(this).val().length==0 && label.hasClass('valid')) label.removeClass('valid');
	    else if($(this).val().length>0 && !label.hasClass('valid')) label.addClass('valid');
	}
};
//END formLabel