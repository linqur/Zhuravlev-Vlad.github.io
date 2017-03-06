
$.material.init()
 $(document).ready(function() { 
    $("a.fancyimage").fancybox(); 
  }); 
 //Навигация
// $(window).scroll(function() {
// 	if ($(".navfix").offset().top > 100) {
// 		$(".navbar-fixed-top").addClass("top-nav-collapse");
// 	} else {
// 		$(".navbar-fixed-top").removeClass("top-nav-collapse");
// 	}
// });//Навигация

// $(document).scroll(function() {
//     checkOffset();
// });
// function checkOffset() {
//     if($('.sidebar').offset().top + $('.sidebar').height() 
//                                            >= $('.footer-top').offset().top - 10)
//         $('.sidebar').removeClass('fixed');
//     if($(document).scrollTop() + window.innerHeight < $('.footer-top').offset().top)
//         $('.sidebar').addClass('fixed'); // restore when you scroll up
// }
var StickyElement = function(node){
  var doc = $(document), 
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content'),
      sidebar = node.find('.sticky-sidebar');
  var onScroll = function(e){
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
    if(docTop > anchorTop){

      if(!fixed){
        anchor.height(content.outerHeight());
        content.addClass('fixed');        
        sidebar.addClass('fixed');        
        fixed = true;
      }

    }  else {

      if(fixed){
        anchor.height(0);
        content.removeClass('fixed'); 
        sidebar.removeClass('fixed'); 
        fixed = false;
      }
    }
    if($('.sidebar').offset().top + $('.sidebar').height() 
                                  >= $('.footer-top').offset().top - 10){
      sidebar.removeClass('fixed');
      sidebar.css('bottom', 0)
      fixed = false;
    } else {
      sidebar.css('bottom', '');
    }
    // console.log(saidbar)
  };
  
  $(window).on('scroll', onScroll);
};
var demo = new StickyElement($('#sticky'));
// 

// 

$(document).ready(function() {

  $('.btn-edit').click(function() {
    $('.btn-edit').css('display', 'none');
    $('.btn-save').css('display', 'inline-block');
    $('.dis.form-horizontal input').removeAttr("disabled");
    $('.dis.form-horizontal textarea').removeAttr("disabled");
    return false;
  });
  
  $('.btn-save').click(function() {
    $('.btn-edit').css('display', 'inline-block');
    $('.btn-save').css('display', 'none');
    $('.dis.form-horizontal input').attr('disabled', true);
    $('.dis.form-horizontal textarea').attr('disabled', true);
    return false;
  });

});

$('#select-product').on('rendered.bs.select', function (e) {
  $('#select-product a[data-tokens="reference"]').click(function(){
    $('#reference-form').css('display', 'block');
    $('#normal-form').css('display', 'none');
    $('#product-etalon-form').css('display', 'none');
  });
  $('#select-product a[data-tokens="normal"]').click(function(){
    $('#normal-form').css('display', 'block');
    $('#reference-form').css('display', 'none');
    $('#product-etalon-form').css('display', 'none');
  });
  $('#select-product--etalon a').click(function(){
    $('#product-etalon-form').css('display', 'block');
    $('#Name-product').val($(this).text());
  });
});