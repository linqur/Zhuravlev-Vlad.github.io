
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
var demo = new StickyElement($('#sticky'));


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