$.material.init()
//Маска для телефона
$(function(){
  $("#inputTel").mask("+7(999) 999-9999");
});//Маска для телефона
// Кастомизация input file
$('input[type=file]').bootstrapFileInput();
//END Кастомизация input file

//Индикатор загруженных фотографий

$("input.zagruzit-foto").change(function() {
  if ($(this).parents('.foto-form_block').find('input.zagruzit-foto').val() != '') {

    $(this).parents('.foto-form_block').addClass('loaded');

  } else {

    $(this).parents('.foto-form_block').removeClass('loaded');

  }
});
//END Индикатор загруженных фотографий

//Подчеркивание активных типов людей

$('.type-people a').click(function(){
	$('.type-people a').removeClass('active');
	$(this).addClass('active');
});

var countType = $('.type-people a').size(),
    step = 100 / countType;

//ширина линии
function widthHr(){
  $('.type-people hr').css('width', step + '%');
};
widthHr();//ширина линии

// Двигает линию
$('.type-people a').click(function(){
  allType = $( this ).parents('.type-people').find("a"),
  index = $.inArray( this, allType );
  console.log($('.type-people a:nth-child('+(index + 1)+').active'))
  $('.type-people a:nth-child('+(index + 1)+').active')
    .parents('.type-people')
    .find('hr')
    .css('margin-left', index * step + '%');
});// Двигает линию

//END Подчеркивание активных типов людей