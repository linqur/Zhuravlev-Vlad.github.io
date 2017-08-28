$(document).on('click', '.generate-link', function(){
	if($('.generate').hasClass('open')){
		$('.generate').removeClass('open');
	} else {
		$('.generate').addClass('open');
		$('.link').select()
	}
});