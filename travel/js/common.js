var doc_w = $(document).width();
$(document).ready(function() {
	
	$('[data-toggle="tooltip"]').tooltip({html:true});
	
	$(document).on('hidden.bs.modal', '.modal', function () {
		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});
	
	if (doc_w > 768){
		$('#sidebarSticky').stick_in_parent({sticky_class: 'stickSidebar'});
		
		$('#bannerSidebarSticky').stick_in_parent();
		
		
		$('#sidebarSticky2').stick_in_parent();
	}
	
	var sidebarOpen   = $('.sidebar--open'),
		sidebarClose  = $('.sidebar--close'),
		sidebar    	  = $('.sidebar'),
		child 		  = $('.child-itm'),
		body 		  = $('body'),
		hotel 		  = $('.hotel--js'),
		hotelAll 	  = $('.hotelAll--js'),
		food 		  = $('.food--js'),
		foodAll 	  = $('.foodAll--js');

	sidebarOpen.click(function(){
		sidebar.addClass('sidebar--show');
		if(doc_w < 768)
			body.css('overflow', 'hidden');
	});
	
	sidebarClose.on('click', function(){
		sidebar.removeClass('sidebar--show');
		body.css('overflow', '');
	});

	hotel.find('label').on('click', function(){
		hotelAll.find('input').removeAttr('checked');
	});
	
	hotelAll.find('label').on('click', function(){
		hotel.find('input').removeAttr('checked');
	});
	
	food.find('label').on('click', function(){
		foodAll.find('input').removeAttr('checked');
	});
	
	foodAll.find('label').on('click', function(){
		food.find('input').removeAttr('checked');
	});

//	$('.imgCenter').css({
//		marginTop: -0.5*$('img').height()+'px',
//		marginLeft: -0.5*$('img').width()+'px'
//	});


//	hotelCategory.on('click', function(){
//		if($(this).hasClass('active') === true){
//			$(this).removeClass('active');
//		} else {
//			$(this).addClass('active');
//		}
//		$('.hotelCategory-itm--lg--js').removeClass('active');
//	});
//	$('.hotelCategory-itm--lg--js').on('click', function(){
//		$(this).addClass('active');
//		hotelCategory.removeClass('active')
//	});
//	
//	hotelFood.on('click', function(){
//		if($(this).hasClass('active') === true){
//			$(this).removeClass('active');
//		} else {
//			$(this).addClass('active');
//		}
//		$('.hotelFood-itm--lg--js').removeClass('active');
//	});
	
//	$('.hotelFood-itm--lg--js').on('click', function(){
//		$(this).addClass('active');
//		hotelFood.removeClass('active')
//	});
	
//	adult.on('click', function(){
//		adult.removeClass('active');
//		$(this).addClass('active');
//	});
//	
//	gender.on('click', function(){
//		gender.removeClass('active');
//		$(this).addClass('active');
//	});
	
//////
	child.on('click', function(){
		
		var number = $(this).parents('.child').find(".child-itm"),
	    index = $.inArray( this, number );
		
//		child.removeClass('active');
//		$(this).addClass('active');
		
		
		$('.ageChildGroup .ageChildSelect--js').attr('disabled', true);//Блокирует поля для ввода возраста детей
		
		var i = index;
		while (i != 0) {//Разблокирует поля для ввода возраста детей
			$('.ageChildGroup .ageChildSelect--js:nth-child(' + (i) + ')').attr('disabled', false);
			i--;
		};
//		var m = index;
//		while (m < 3) {//Отчищает блокированные поля
//			$('.ageChildGroup .ageChildSelect--js:nth-child(' + (m + 1) + ')').val('');
//			m++;
//		};//END
		
	});
	
//	//Лимит на возраст ( <= 18)
//	function isright(obj) {
//		if (obj.value>18) obj.value=18;  
//	}
//	$('.ageChildInput').keyup(function(){
//		this.value=this.value.replace(/[^0-9]+/g,''); isright(this);
//	})//END
	
//////
	
//range
	$( function() {
		$("#slider").slider({
			min: 0,
			max: 30,
			values: [ 1, 7 ],
			range: true,
			stop: function(event, ui) {
				jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
				jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
			},
			slide: function(event, ui){
				jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
				jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
			}
		});
	});
	jQuery("input#minCost").change(function(){
		var value1=jQuery("input#minCost").val();
		var value2=jQuery("input#maxCost").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost").val(value1);
		}
		jQuery("#slider").slider("values",0,value1);	
	});


	jQuery("input#maxCost").change(function(){
		var value1=jQuery("input#minCost").val();
		var value2=jQuery("input#maxCost").val();

		if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost").val(value2);
		}
		jQuery("#slider").slider("values",1,value2);
	});
	
	jQuery('.noText').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
//END range
	
	//Слайдер
	$('#mainSlider').slick({
		infinite: true,
		slidesToShow: 2,  
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: false,
      	nextArrow: $('.slick-next'),
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			}
		}] 
	});//END
	
	
	//Вызывает модальное окно с описанием отеля
	$('.descriptionHotel-openModal').click(function(){
		$('#descriptionHotel').modal('show');
	});//END
	
	//Вызывает слайдер в модалке
	$('#descriptionHotel').on('shown.bs.modal', function (){
		$('#modalSlider').slick({
			infinite: true,
			slidesToShow: 1,  
			slidesToScroll: 1,
			prevArrow: $('.modalSlider-prev'),
			nextArrow: $('.modalSlider-next'),
		});	
	});//END

//	$('#modalSlider').slick({
//			infinite: true,
//			slidesToShow: 1,  
//			slidesToScroll: 1,
//			prevArrow: $('.modalSlider-prev'),
//			nextArrow: $('.modalSlider-next'),
//		});
	
	function resizeSlider(){
		var widthSlider = $('.mainSlider').width(),
			mainSliderItm = $('.mainSlider-itm');

		if (widthSlider > 768){
			mainSliderItm.css('width', widthSlider * 0.41 + 'px')
		} else
		if (widthSlider > 480){
			mainSliderItm.css('width', widthSlider * 0.7 + 'px')
		}

		var k = 606/500
		mainSliderItm.height($('.mainSlider-itm').width() / k);
		$('.slick-next').height($('.mainSlider-itm').width() / k);
	};
	
	$( window ).resize(resizeSlider);
	$( document ).ready(resizeSlider);
	
	
	$('.open-form--js').on('click', function(){
		$('.reservation-info--js').toggle();
		$('.reservation-form--js').toggle();
	});
	$('.close-form--js').on('click', function(){
		$('.reservation-info--js').toggle();
		$('.reservation-form--js').toggle();
	});
	
//	$('.tabNavigation a').click(function(){
//		$('.tabNavigation a').removeClass('active');
//		$(this).addClass('active');
//	});
	
//	var countType = $('.tabNavigation a').size(),
//    	step = 100 / countType;
	
//	var widthListPr = 0;
//	$('.tabNavigation li').each(function(){ 
//		widthListPr = widthListPr + $(this).width() 
//	});
//	console.log(widthListPr);

//	var summ=0;
//	$('tabNavigation li').each(function(){
//		summ += 1*$(this).width();
//	});

//	$('.tabNavigation li').click(function () {
//		var widthLink = $(this).width(),
//			summ = 0,
//			step = $(this).prevAll().each(function () {
//				summ += 4 + 1 * $(this).outerWidth(true);
//			});
//
//		$('.tabNavigation a')
//			.parents('.tabNavigation')
//			.find('hr')
//			.css('margin-left', summ + 'px');
//
//		$('.tabNavigation hr').css('width', widthLink + 'px')
//	});

});

(function($){
	$(window).on('load',function(){
		$('.filterScroll').mCustomScrollbar({
			scrollButtons: {enable: true},
			theme: 'dark-thick',
			scrollbarPosition: 'outside'
		});
		
		$('.formScroll').mCustomScrollbar({
			scrollButtons: {enable: true},
			theme: 'dark-thick'
		});
		
		$('.tourist-scroll').mCustomScrollbar({
			axis: 'x',
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
		
		if (doc_w > 768){
			$('.scroll').mCustomScrollbar({
				scrollButtons: {enable: false},
				theme: 'minimal-dark',
				//scrollbarPosition: 'outside'
			});
		}
	});
})(jQuery);


$(window).scroll(function() {
	if ($(".navbar").offset().top > 100) {
		$(".navbar-default").addClass("navbar-fixed");
	} else {
		$(".navbar-default").removeClass("navbar-fixed");
	}
});


function leftStiky(){
	var a = document.querySelector('#filterStiky'), b = null, K = null, Z = 0, P = 50, N = 0; 
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  var Ra = a.getBoundingClientRect(),
      R1bottom = document.querySelector('#article').getBoundingClientRect().bottom;
  if (Ra.bottom < R1bottom) {
    if (b == null) {
      var Sa = getComputedStyle(a, ''), s = '';
      b = document.createElement('div');
      b.className = "stop";
      b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
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
      if (Ra.top < K) {  // скролл вниз
        if (R2 + N > R1) {  // не дойти до низа
          if (Rb.bottom - W + N <= 0) {  // подцепиться
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
      } else {  // скролл вверх
        if (Ra.top - P < 0) {  // не дойти до верха
          if (Rb.top - P >= 0) {  // подцепиться
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