var doc_w = $(document).width();
$(document).ready(function() {
	
	$('[data-toggle="tooltip"]').tooltip({html:true}); //Подсказки при наведении (bootstrap)
	
	//Открытие модального окна (bootstrap) в модальном окне
	$(document).on('hidden.bs.modal', '.modal', function () {
		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});//END
	
	//Фиксирование сайтбара при скролле 
	if (doc_w > 991){
		jQuery('.contentSticky, .sidebarSticky').theiaStickySidebar({
		  additionalMarginTop: 85
		});
		jQuery('.sidebarSticky-left, .contentSticky2, .sidebarSticky-right').theiaStickySidebar({
		  additionalMarginTop: 85
		});
	};
	if (doc_w > 768 && doc_w < 991){
		jQuery('.contentSticky2, .sidebarSticky-right').theiaStickySidebar({
		  additionalMarginTop: 85
		});
	};//END
	
	//Прокручивает страницу вверх при клике на "бронировать" для телефонов
	if (doc_w < 991){
		$('#up').click(function() {
			$('#reservation').animate({scrollTop: 0},500);
			return false;
		})	
	};
	
	$(document).on('click', '.tag-link--js', function(){
		var _$ = $(this),
		tagHeight =_$.parent().height();
		
		if(_$.hasClass('tagOpen') != false){
			_$.removeClass('tagOpen');
			_$.parents('.tagJs').css('height', '40px');
		} else {
			_$.addClass('tagOpen');
			_$.parents('.tagJs').css('height', + tagHeight + 'px');
		}
	});
	
	$('.tagJs').each(function() {
		
		var _$ = $(this);
		
		_$.find('.tagList').height();

		if(_$.find('.tagList').height() == 40){
			_$.find('.tag-link--js').css('display', 'none');
			_$.css('padding-right', '0')
		}
	});
	
	var sidebarOpen   = $('.sidebar--open'),
		sidebarClose  = $('.sidebar--close'),
		sidebar    	  = $('.sidebar'),
		child 		  = $('.child-itm'),
		body 		  = $('body'),
		hotel 		  = $('.hotel--js'),
		hotelAll 	  = $('.hotelAll--js'),
		food 		  = $('.food--js'),
		foodAll 	  = $('.foodAll--js');
	
	
	//Раскрытие сайтбара при клике на кнопку для телефонов
	sidebarOpen.click(function(){
		sidebar.addClass('sidebar--show');
		if(doc_w < 991)
			body.css('overflow', 'hidden');
	});
	sidebarClose.on('click', function(){
		sidebar.removeClass('sidebar--show');
		body.css('overflow', '');
	});//END
	$(document).mouseup(function (e) {
		var container = $('.sidebar'),
			body = $('body');
		if(e.target!=container[0]&&!container.has(e.target).length){
			container.removeClass('sidebar--show');
			
			if(container.hasClass('sidebar--show') != true){
				body.css('overflow', '');
			}
		}
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
//////
	
	//Разблокирует select выбора возраста ребенка
	child.on('click', function(){
		
		var number = $(this).parents('.child').find(".child-itm"),
	    index = $.inArray( this, number );
		
		$('.ageChildGroup .ageChildSelect--js').attr('disabled', true);//Блокирует поля для ввода возраста детей
		
		var i = index;
		while (i != 0) {//Разблокирует поля для ввода возраста детей
			$('.ageChildGroup .ageChildSelect--js:nth-child(' + (i) + ')').attr('disabled', false);
			i--;
		};
	});//END
//////
	
//Range
	$( function() {
		$("#slider").slider({
			min: 1,
			max: 30,
			values: [ 1, 7 ],
			range: true,
			stop: function(event, ui) {
				jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
				jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
				
				var opt = $(this).data().uiSlider.options,
					vals = opt.max - opt.min,
					difference = opt.values['1'] - opt.values['0'];
				$('.sliderStep').css('color', '#bcbcbc');
				for(var i = (opt.values['0'] - 1); i < opt.values['1']; i++){
					$('.sliderStep:nth-child(' + (i + 4) + ')').css('color', '#30cd00');
				}		
			},
			slide: function(event, ui){
				jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
				jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
				
				var opt = $(this).data().uiSlider.options,
					vals = opt.max - opt.min,
					difference = opt.values['1'] - opt.values['0'];
				$('.sliderStep').css('color', '#bcbcbc');
				for(var i = (opt.values['0'] - 1); i < opt.values['1']; i++){
					$('.sliderStep:nth-child(' + (i + 4) + ')').css('color', '#30cd00');
				}
			}
		})
		.each(function() {
			var opt = $(this).data().uiSlider.options;
			var vals = opt.max - opt.min;
			for (var i = 0; i <= vals; i++) {
			var el = $('<label class="sliderStep">'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
			$( "#slider" ).append(el);
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
		
		var opt = $('#slider').data().uiSlider.options,
		vals = opt.max - opt.min,
		difference = opt.values['1'] - opt.values['0'];
		$('.sliderStep').css('color', '#bcbcbc');
		for(var i = (opt.values['0'] - 1); i < opt.values['1']; i++){
			$('.sliderStep:nth-child(' + (i + 4) + ')').css('color', '#30cd00');
		}	
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
		var opt = $('#slider').data().uiSlider.options,
		vals = opt.max - opt.min,
		difference = opt.values['1'] - opt.values['0'];
		$('.sliderStep').css('color', '#bcbcbc');
		for(var i = (opt.values['0'] - 1); i < opt.values['1']; i++){
			$('.sliderStep:nth-child(' + (i + 4) + ')').css('color', '#30cd00');
		}	
	});
	
	jQuery('.noText').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});//END range
	
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