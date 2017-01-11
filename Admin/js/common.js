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


// cl = console.log;

// $(".table-hover tbody tr").click(function(){
// 	if ($(this).hasClass('greenGreen')) {
// 		$(this).removeClass('greenGreen');
// 	} else {
// 		$(this).addClass('greenGreen');
// 	}
// });

