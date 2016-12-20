// var StickyElement = function(node){
//   var doc = $(document), 
//       fixed = false,
//       anchor = node.find('.sticky-anchor'),
//       content = node.find('.sticky-content');
  
//   var onScroll = function(e){
//     var docTop = doc.scrollTop(),
//         anchorTop = anchor.offset().top;
//     if(docTop > anchorTop){
//       if(!fixed){
//         anchor.height(content.outerHeight());
//         content.addClass('fixed');        
//         fixed = true;
//       }
//     }  else   {
//       if(fixed){
//         anchor.height(0);
//         content.removeClass('fixed'); 
//         fixed = false;
//       }
//     }
//   };
  
//   $(window).on('scroll', onScroll);
// };
// var demo = new StickyElement($('#sticky'));
$.material.init()


// $(".aside-left li").click(function(e) {
//   e.preventDefault();
//   $(".aside-left li").removeClass('active');
//   $(this).addClass('active');
// })

$(".content-top a").click(function(e) {
  e.preventDefault();
  $(".content-top a").removeClass('active');
  $(this).addClass('active');
})