$(function () {
$("[rel='tooltip']").tooltip();
});
$(function () {
$("[data-toggle='popover']").popover();
});
$('input[type=file]').bootstrapFileInput();
$('.file-inputs').bootstrapFileInput();

$("#checkAll").click(function () {
     $('.check-name input:checkbox').not(this).prop('checked', this.checked);
 });
$("#checkAll-filter").click(function () {
     $('.add-filter input:checkbox').not(this).prop('checked', this.checked);
 });
//  $("#mytable td").mouseover(function() {
//     var tds = $( this ).parent().find("td"),
//         index = $.inArray( this, tds );

// 	$("#mytable td:nth-child("+( index + 1 )+")").css("background-color", "#ecf0f1");
// 	}).mouseout(function() {
//         var tds = $( this ).parent().find("td"),
//             index = $.inArray( this, tds );

//         $("#mytable td:nth-child("+( index + 1 )+")").css("background-color", "");
// });

//Добавление фильтра
$(document).ready(function() {

  $('.add-filter_btn').click(function() {
    // $('.btn-edit').css('display', 'none');
    // $('.btn-save').css('display', 'inline-block');
    $(this).closest('.input-disabled').find('input').removeAttr('disabled');
    $(this).toggle();
  	$(this).parent('div').parent('th').find('.btn-accept-group').toggle();
  });
  
  $('.btn-accept-group .delete').click(function(){
  	$(this).closest('.input-disabled').find('input').attr('disabled', true);
    $('.add-filter input').attr('disabled', true);
    $(this).parent('div').toggle();
    $(this).parent('div').parent('th').find('.add-filter_btn').toggle();
  	// $(this).closest('div').find('.btn-accept-group').toggle();
  });

});

$('.period a').click(function(){
	$(this).addClass('active');
	$('.period a').removeClass('active');
});

// Календарь
$('#datepicker-ask').datepicker({
    position: "bottom right"
});
$('#datepicker-period').datepicker({
    position: "bottom left"
});
// cl = console.log;

// $(".table-hover tbody tr").click(function(){
// 	if ($(this).hasClass('greenGreen')) {
// 		$(this).removeClass('greenGreen');
// 	} else {
// 		$(this).addClass('greenGreen');
// 	}
// });


