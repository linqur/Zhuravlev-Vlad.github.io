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
var myLatlng = new google.maps.LatLng(-34.397, 150.644);
var mapOptions = {
  zoom: 8,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scrollwheel: false,
};
var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);


$(document).ready(function(){
  $(".carousel").swipe( {
    swipeLeft: function() {
      $(this).carousel("next");
    },
    swipeRight: function() {
      $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });
});
    