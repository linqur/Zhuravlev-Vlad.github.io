$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip({html:true});
	

	var sidebarOpen   = $('.sidebar--open'),
		sidebarClose  = $('.sidebar--close'),
		sidebarTag    = $('.sidebarTag'),
		hotelCategory = $('.hotelCategory-itm--js'),
		hotelFood	  = $('.hotelFood-itm--js'),
		adult 		  = $('.adult-itm'),
		child 		  = $('.child-itm');

	sidebarOpen.click(function(){
		sidebarTag.addClass('sidebarTag--show');
	});
	sidebarClose.on('click', function(){
		sidebarTag.removeClass('sidebarTag--show');
	});


//	$('.imgCenter').css({
//		marginTop: -0.5*$('img').height()+'px',
//		marginLeft: -0.5*$('img').width()+'px'
//	});


	hotelCategory.on('click', function(){
		hotelCategory.removeClass('active');
		$(this).addClass('active');
	});
	
	hotelFood.on('click', function(){
		hotelFood.removeClass('active');
		$(this).addClass('active');
	});
	
	adult.on('click', function(){
		adult.removeClass('active');
		$(this).addClass('active');
	});
	
//////
	child.on('click', function(){
		
		var number = $(this).parents('.child').find(".child-itm"),
	    index = $.inArray( this, number );
		
		child.removeClass('active');
		$(this).addClass('active');
		
		
		$('.ageChildGroup .ageChildInput').attr('disabled', true);//Блокирует поля для ввода возраста детей
		
		var i = index;
		while (i != 0) {//Разблокирует поля для ввода возраста детей
			$('.ageChildGroup .ageChildInput:nth-child(' + (i) + ')').attr('disabled', false);
			i--;
		};
		var m = index;
		while (m < 3) {//Отчищает блокированные поля
			$('.ageChildGroup .ageChildInput:nth-child(' + (m + 1) + ')').val('');
			m++;
		};//END
		
	});
	
	//Лимит на возраст ( <= 18)
	function isright(obj) {
		if (obj.value>18) obj.value=18;  
	}
	$('.ageChildInput').keyup(function(){
		this.value=this.value.replace(/[^0-9]+/g,''); isright(this);
	})//END
	
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


});

(function($){
	$(window).on('load',function(){
		$('.filterScroll').mCustomScrollbar({
			scrollButtons: {enable: true},
			theme: 'dark-thick',
			scrollbarPosition: 'outside'
		});
	});
})(jQuery);






//stikySidebar function(){
//	Array.prototype.slice.call(document.querySelectorAll('#aside1, #aside2')).forEach(function(a) { 
//	var b = null, P = 0;
//	window.addEventListener('scroll', Ascroll, false);
//	document.body.addEventListener('scroll', Ascroll, false);
//	function Ascroll() {
//	  if (b == null) {
//		var Sa = getComputedStyle(a, ''), s = '';
//		for (var i = 0; i < Sa.length; i++) {
//		  if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//			s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
//		  }
//		}
//		b = document.createElement('div');
//		b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//		a.insertBefore(b, a.firstChild);
//		var l = a.childNodes.length;
//		for (var i = 1; i < l; i++) {
//		  b.appendChild(a.childNodes[1]);
//		}
//		a.style.height = b.getBoundingClientRect().height + 'px';
//		a.style.padding = '0';
//		a.style.border = '0';
//	  }
//	  var Ra = a.getBoundingClientRect(),
//		  R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article').getBoundingClientRect().bottom + 0);
//	  if ((Ra.top - P) <= 0) {
//		if ((Ra.top - P) <= R) {
//		  b.className = 'stop';
//		  b.style.top = - R +'px';
//		  b.style.left = 0;
//		} else {
//		  b.className = 'sticky';
//		  b.style.top = P + 'px';
//		  b.style.left = Ra.left + 'px';
//		}
//	  } else {
//		b.className = '';
//		b.style.top = '';
//		b.style.left = '';
//	  }
//	  window.addEventListener('resize', function() {
//		a.children[0].style.width = getComputedStyle(a, '').width;
//		b.style.left = (b.className == 'sticky' ? (a.getBoundingClientRect().left + 'px') : '0');
//	  }, false);
//	}
//	})
//};
//stikySidebar();