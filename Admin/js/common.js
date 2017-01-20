$(function () {
$("[rel='tooltip']").tooltip();
});
$(function () {
$("[data-toggle='popover']").popover();
});
$('input[type=file]').bootstrapFileInput();
$('.file-inputs').bootstrapFileInput();
//  $("#mytable td").mouseover(function() {
//  	// console.log('awfwfw');
//     var tds = $( this ).parent().find("td"),
//         index = $.inArray( this, tds );
//         console.log(index);
// 	$("#mytable td:nth-child("+( index + 1 )+")").css("background-color", "#ecf0f1");
// 	}).mouseout(function() {
//         var tds = $( this ).parent().find("td"),
//             index = $.inArray( this, tds );

//         $("#mytable td:nth-child("+( index + 1 )+")").css("background-color", "");
// });
$(".checkAll").click(function () {
	console.log('fesfsef');
     $('.check-name input:checkbox').not(this).prop('checked', this.checked);
 });
$('.period a').click(function(){
	$('.period a').removeClass('active');
	$(this).addClass('active');
});
$('.timeline a').click(function(){
	$('.timeline a').removeClass('active');
	$(this).addClass('active');
});

// Календарь
$('#datepicker-ask').datepicker({
    position: "bottom right"
});
$('#datepicker-period').datepicker({
    position: "bottom left"
});// Календарь

// horizontal scrollbar
$(window).on("load",function(){
    $(".mCustomScrollbar-content").mCustomScrollbar({
	    axis:"x",
	    theme:"minimal-dark",
		advanced:{ autoScrollOnFocus: false}
	});
});// horizontal scrollbar

// Клонирует и фиксирует шапку таблицы
var tableOffset = $("#filter-content").offset().top;
var tableOffsetAddFilter = $("#add-filter").offset().top;
var tableOffsetPeopleList = $("#people-list").offset().top;

var $header = $("#filter-content > thead").clone();
var $headerAddFilter = $("#add-filter > thead").clone();
var $headerPeopleList = $("#people-list > thead").clone();

var $fixedHeader = $("#header-fixed").append($header);
var $fixedHeaderAddFilter = $("#header-fixed-add-filter").append($headerAddFilter);
var $fixedHeaderPeopleList = $("#header-fixed-people-list").append($headerPeopleList);

$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();
    
    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
        $fixedHeader.show();
    }
    var offset2 = $(this).scrollTop();
    
    if (offset2 >= tableOffsetAddFilter && $fixedHeaderAddFilter.is(":hidden")) {
        $fixedHeaderAddFilter.show();
    }
    var offset3 = $(this).scrollTop();
    
    if (offset3 >= tableOffsetPeopleList && $fixedHeaderPeopleList.is(":hidden")) {
        $fixedHeaderPeopleList.show();
    }
    // else if (offset < tableOffset) {
    //     $fixedHeader.hide();
    // }

});// Клонирует и фиксирует шапку таблицы

$(".checkAll-filter").click(function () {
     $('.add-filter input:checkbox').not(this).prop('checked', this.checked);
 });

//disabled/enabled input
	//для готовых фильтров
	$('.filter-content .add-filter_btn').click(function() {
		var tds = $( this ).parents('thead').find(".add-filter_btn"),
	    index = $.inArray( this, tds );
	    console.log(index);
		$(this).toggle();
		$(this).parent('div').parent('th').find('.btn-accept-group').toggle();
		$(".filter-content td:nth-child("+( index + 1 )+")").children('input').removeAttr('disabled');
	});

	$('.filter-content .btn-accept-group .delete').click(function(){
		var tds = $( this ).parents('thead').find(".btn-accept-group .delete"),
	    index = $.inArray( this, tds );

		$(this).parent('div').toggle();
		$(this).parent('div').parent('th').find('.add-filter_btn').toggle();
		$(".filter-content td:nth-child("+( index + 1 )+")").children('input').attr('disabled', true);
	});//END
	//для создания фильтра
	$('#header-fixed-add-filter .add-filter_btn').click(function(){
		$(this).toggle();
		$(this).parent('div').parent('th').find('.btn-accept-group').toggle();
		$(this).closest('.input-disabled').find('input').removeAttr('disabled');
	});
	$('#header-fixed-add-filter .btn-accept-group .delete').click(function(){
		$(this).parent('div').toggle();
		$(this).parent('div').parent('th').find('.add-filter_btn').toggle();
		$('.add-filter input').attr('disabled', true);
	});//END
	//Добавление/удаление людей и активирование строки таблицы
	$('#people-list .add-filter_btn').click(function(){

		var trs = $( this ).parents('tbody').find(".add-filter_btn"),
	    index = $.inArray( this, trs );
	    console.log(index);

		$(this).toggle();
		$(this).parent('div').parent('td').find('.btn-accept-group').toggle();
		$('.filter-content tr:nth-child('+( index + 1 )+')').find('input').removeAttr('disabled');
	});
	$('#people-list .delete').click(function(){

		var trs = $( this ).parents('tbody').find(".btn-accept-group .delete"),
	    index = $.inArray( this, trs );

		$(this).parent('div').toggle();
		$(this).parent('div').parent('td').find('.add-filter_btn').toggle();
		$(this).parents('tr').removeClass('new');
		$('.filter-content tr:nth-child('+( index + 1 )+')').find('input').attr('disabled', true);
	});//END
//END disabled/enabled input



// cl = console.log;

// $(".table-hover tbody tr").click(function(){
// 	if ($(this).hasClass('greenGreen')) {
// 		$(this).removeClass('greenGreen');
// 	} else {
// 		$(this).addClass('greenGreen');
// 	}
// });

