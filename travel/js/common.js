//Обновление даты в футере
document.getElementById('newDate').innerHTML = (new Date()).getFullYear()
//END Обновление даты в футере

//Разделение чисел по разрядам
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function bitNumber(){
	$('.bit').each(function() {
		var after  = numberWithCommas($(this).text());

		$(this).text(after);
	});
}
bitNumber()
//END Разделение чисел по разрядам

//$(document).on('click', '.sidebarTag-more--open', function(){
//	
//	if ($(this).hasClass('more-active')){
//		$(this).removeClass('more-active');
//		$('.sidebarTag-more').css('display', 'none');
//	} else {
//		$(this).addClass('more-active');
//		$('.sidebarTag-more').css('display', 'block');
//	}
//});
//
//$(document).mouseup(function (e) {
//	var container = $('.sidebarTag-more'),
//		body = $('body');
//	if(e.target!=container[0]&&!container.has(e.target).length){
//		container.css('display', 'none');
//		$('.sidebarTag-more--open').removeClass('more-active');
//	}
//});


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
	
//Прокручивает страницу вверх при клике на "бронировать"
$('a[href="#open-form"]').click(function() {
	
	if($('#open-form').hasClass('in') != true) {
		setTimeout (function(){
			var beforeForm = $('.reservation-form').offset().top - $(window).scrollTop(),
					positionForm = $('#reservation').scrollTop();
					$('#reservation').scrollTop(positionForm + beforeForm);
		}, 250)									
	}

})//END Прокручивает страницу вверх при клике на "бронировать"
	
	
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
	
	function btnTagOpenHidden(){
		$('.tagJs').each(function() {

			var _$ = $(this);

			_$.find('.tagList').height();

			if(_$.find('.tagList').height() == 40){
				_$.find('.tag-link--js').css('display', 'none');
				_$.css('padding-right', '0')
			}
		});
	};
	btnTagOpenHidden()
	
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
	
	function removeChekedBtn(a, b){
		a.find('label').on('click', function(){
			if (!!$(this).parent().find('input').attr('disabled')){
				return
			}
			b.find('input').removeAttr('checked');
		});

		b.find('label').on('click', function(){
			a.find('input').removeAttr('checked');
		});
	};
	function removeCheke(a, b){
		a.find('label').on('click', function(){
			$(this).parent(a).parent().find('input').removeAttr('checked');
			
		});
		b.find('label').on('click', function(){
			a.find('input').removeAttr('checked');
			
			//console.log($('.resortCheckbox--js input').is(':checked'))
		});
	};
	$(document).on('click', '.hotelCheckbox--js input', function(){
		console.log($(this).is(':checked'));
		console.log($('.hotelCheckbox--js input[type=checkbox]:checked').length);
		if ($('.hotelCheckbox--js input[type=checkbox]:checked').length > 10){
			$(this).removeAttr('checked');
			$('#info').modal('show');
			
			setTimeout (function(){
				$('#info').modal('hide');
			}, 2000);
		}
	});
	
	
	
	removeChekedBtn(hotel, hotelAll);
	removeChekedBtn(food, foodAll);
	removeCheke($('.resortRemove--js'), $('.resortCheckbox--js'));
	removeCheke($('.hotelRemove--js'), $('.hotelCheckbox--js'));
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
	var minCost = $('#minCost').val();
	var maxCost = $('#maxCost').val();
	
	//Меняет цвет шага
	function rangeColor(){
		var opt  			 = $("#slider").slider().data().uiSlider.options,
				vals 			 = opt.max - opt.min,
				difference = opt.values['1'] - opt.values['0'];
		
		$('.sliderStep').css('color', '#bcbcbc');
		for(var i = (opt.values['0'] - 1); i < opt.values['1']; i++){
			$('.sliderStep:nth-child(' + (i + 4) + ')').css('color', '#30cd00');
		}	
	}//END Меняет цвет шага
	
	$( function() {
		$("#slider").slider({
			min: 1,
			max: 30,
			values: [ minCost, maxCost ],
			range: true,
			stop: function(event, ui) {
				jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
				jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));

				rangeColor();
			},
			slide: function(event, ui){
				jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
				jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));

				rangeColor();
			}
			
		})
		.each(function() {
			var opt = $(this).data().uiSlider.options;
			var vals = opt.max - opt.min;
			var difference = opt.values['1'] - opt.values['0'];
			for (var i = 0; i <= vals; i++) {
			var el = $('<label class="sliderStep">'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
				$( "#slider" ).append(el);
			}
			rangeColor()
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
		rangeColor()
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
		
		rangeColor()
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
	});	//END
	
	var modalSliderOpts = {
		infinite: true,
		slidesToShow: 1,  
		slidesToScroll: 1,
		prevArrow: $('.modalSlider-prev'),
		nextArrow: $('.modalSlider-next')
	}
	
	//Вызывает модальное окно с описанием отеля
	$(document).on('click', '.descriptionHotel-openModal', function(){
		$('#descriptionHotel').modal('show');
	});//END
	
	//Поправляет слайдер в модалке
	$('#descriptionHotel').on('shown.bs.modal', function (){
		$('#modalSlider').slick(modalSliderOpts);
		$('#modalSlider').slick('setPosition');
	});//END
	
	//Удаляет слайдер при закрытии модалки "Описание отеля"
	$('#descriptionHotel').on('hidden.bs.modal', function (){
		$('#modalSlider').slick('destroy');
	});//END
	
	$('#reservation').on('hidden.bs.modal', function (){
		$('#open-form').removeClass('in');
	});
	
	$('#comments').on('hide.bs.modal', function (){
		$('#vk_comments').html('');
	});
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
		//$('#menu').css('top', '70px')
	} else {
		$(".navbar-default").removeClass("navbar-fixed");
		//$('#menu').css('top', '')
	}
});