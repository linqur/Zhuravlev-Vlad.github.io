new WOW().init();

var controller = new ScrollMagic.Controller();
var tween2 = TweenMax.staggerFromTo(".animate3", 2, {top: -145, left: '-100%'}, {top: -145, left: '23%', ease: Power1.easeInOut}, 0.03)
	
    var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 600})
        .setTween(tween2)
        .addTo(controller);
	var delay = 250;
	var timeout = null;
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		var gazPosition = document.getElementById('type-tab1').style.left;
		if (st > lastScrollTop){
			$('.round-tank').css({
				"-webkit-animation-name":"", 
			});
			$('.wheel1').css({
				"-webkit-animation-name":"spin", 
				"-webkit-animation-duration":"1s",
				"-webkit-animation-iteration-count":"infinite", 
				"-webkit-animation-timing-function":"linear"
			});
			$('.wheel2').css({
				"-webkit-animation-name":"spin", 
				"-webkit-animation-duration":"1s",
				"-webkit-animation-iteration-count":"infinite", 
				"-webkit-animation-timing-function":"linear"
			});
			if(gazPosition == "23%"){ 
				console.log('lala');
				$('.round-tank').css({
					"-webkit-animation-name":"gaz-stop", 
					"-webkit-animation-duration":"0.7s",
					"-webkit-animation-iteration-count":"1", 
					"-webkit-animation-timing-function":"linear"
				});
				$('.wheel1').css({
					"-webkit-animation-name":"", 
				});
				$('.wheel2').css({
					"-webkit-animation-name":"", 
				});
			}
		} else if(gazPosition !== "23%") {
			$('.round-tank').css({
				"-webkit-animation-name":"", 
			});
			$('.wheel1').css({
				"-webkit-animation-name":"unspin", 
				"-webkit-animation-duration":"1s",
				"-webkit-animation-iteration-count":"infinite", 
				"-webkit-animation-timing-function":"linear"
			});
			$('.wheel2').css({
				"-webkit-animation-name":"unspin", 
				"-webkit-animation-duration":"1s",
				"-webkit-animation-iteration-count":"infinite", 
				"-webkit-animation-timing-function":"linear"
			});
		}
		lastScrollTop = st;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
				$('.wheel1').css({
					"-webkit-animation-name":"", 
				});
				$('.wheel2').css({
					"-webkit-animation-name":"", 
				});
		}, delay)
	});
