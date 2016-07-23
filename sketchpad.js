$(document).ready(function(){

	
    for(var i = 0; i<256;i++)
	$('.wrapper').append("<div></div>");

	$('.wrapper').find('div').addClass('grid');
	$('.wrapper').find('div').on('mouseenter',function(){
	$(this).addClass('highlight');

});

});

	function toClear(){
	
	$('.wrapper').find('div').removeClass('highlight');
}

