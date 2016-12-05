new WOW().init();

var controller = new ScrollMagic.Controller();


$(document).ready(function() {

    $('.select-city').select2({
        placeholder: "Выберите город"
    });

    $('.select-company').select2({
        placeholder: "Выберите транспортную компанию"
    });

    $("#slider").slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $(".about-slider").slick({
        autoplay: true,
        arrows: true,
        dots: false,
        autoplaySpeed: 5000,
        adaptiveHeight: true
    });

    $('.advantage-item').hover(
        function(){
            $(this).find('.advantage-caption').slideDown(350);
        },
        function(){
            $(this).find('.advantage-caption').slideUp(350);
        }
    );

    $(function() {
        $('a.scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top -0
                    }, 800);
                    return false;
                }
            }
        });
    });

    var tween = TweenMax.staggerFromTo(".animate4", 2, {left: -75}, {left: 75, ease: Power1.easeInOut}, 0.15);

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 400})
        .setTween(tween)
        .addTo(controller);

    var tween2 = TweenMax.staggerFromTo(".animate3", 2, {top: -145, left: '-60%'}, {top: -145, left: '23%', ease: Power1.easeInOut}, 0.0001)
	
    var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 660})
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
	
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    })

});
