//Форма
$(function(){
      $('#contact').submit(function(){
        var errors = false;
        $(this).find('span').empty();

        $(this).find('input, textarea').each(function(){
          if( $.trim( $(this).val() ) == '' ) {
            errors = true;
          $(this).next().html("<span class='glyphicon glyphicon-remove'></span>" + $(this).prev().text());
        }
        });

    if( !errors ){
      var data = $('#contact').serialize();
      $.ajax({
        url: '../mail.php',
        type: 'POST',
        data: data,
        beforeSend: function(){
          $('#submit').next().html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>');
        },
        success: function(res){
          if( res == 1 ){
            $('#contact').find('input:not(#submit), textarea').val('');
            $('#submit').next().empty();
            alert('Письмо отправлено');
          }else{
            $('#submit').next().empty();
            alert('Ошибка отправки');
          }
        },
        error: function(){
          alert('Error!');
        }
      });
    }

    return false;
  });

});
//Навигация
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//Карта
var map;
var mapCoordinates = new google.maps.LatLng(40.7143528, -74.0059731);

function initialize()
{
var mapOptions = {
zoom: 10,
center: mapCoordinates,
mapTypeId: google.maps.MapTypeId.ROADMAP,
scrollwheel: false,
styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#dddddd"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#dddddd"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#1f425d"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#979797"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]}]
};
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Анимация
new WOW().init();

      $(function() {
        $('a.scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top -0
              }, 1000);
              return false;
            }
          }
        });
      });
//Label
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
one.onmouseover = function(){
  three_.style.opacity = '0.5'
  two_.style.opacity = '0.5'
};
one.onmouseout = function(){
  three_.style.opacity = '1'
  two_.style.opacity = '1'
};
two.onmouseover = function(){
  three_.style.opacity = '0.5'
  one_.style.opacity = '0.5'
};
two.onmouseout = function(){
  three_.style.opacity = '1'
  one_.style.opacity = '1'
};
three.onmouseover = function(){
  one_.style.opacity = '0.5'
  two_.style.opacity = '0.5'
};
three.onmouseout = function(){
  one_.style.opacity = '1'
  two_.style.opacity = '1'
};

h_img_one.onmouseover = function(){
  h_img_two.style.opacity = '0.2'
  h_img_three.style.opacity = '0.2'
  h_img_four.style.opacity = '0.2'
  menu_one.style.background = '#297df4'
};
h_img_one.onmouseout = function(){
  h_img_two.style.opacity = '1'
  h_img_three.style.opacity = '1'
  h_img_four.style.opacity = '1'
  menu_one.style.background = ''
};
h_img_two.onmouseover = function(){
  h_img_one.style.opacity = '0.2'
  h_img_three.style.opacity = '0.2'
  h_img_four.style.opacity = '0.2'
  menu_two.style.background = '#297df4'
  
};
h_img_two.onmouseout = function(){
  h_img_one.style.opacity = '1'
  h_img_three.style.opacity = '1'
  h_img_four.style.opacity = '1'
  menu_two.style.background = ''
};
h_img_three.onmouseover = function(){
  h_img_one.style.opacity = '0.2'
  h_img_two.style.opacity = '0.2'
  h_img_four.style.opacity = '0.2'
  menu_three.style.background = '#297df4'
  
};
h_img_three.onmouseout = function(){
  h_img_one.style.opacity = '1'
  h_img_two.style.opacity = '1'
  h_img_four.style.opacity = '1'
  menu_three.style.background = ''
};
h_img_four.onmouseover = function(){
  h_img_one.style.opacity = '0.2'
  h_img_two.style.opacity = '0.2'
  h_img_three.style.opacity = '0.2'
  menu_four.style.background = '#297df4'
  
};
h_img_four.onmouseout = function(){
  h_img_one.style.opacity = '1'
  h_img_two.style.opacity = '1'
  h_img_three.style.opacity = '1'
  menu_four.style.background = ''
};



/*
one.onmouseover = function(){two_.style.opacity = '0.5'};
one.onmouseout = function(){two_.style.opacity = '1'};*/