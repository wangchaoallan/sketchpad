
var input = 16;
var test = 16;

$(document).ready(function(){

	
    for(var i = 0; i<input;i++){
	$('.wrapper').append("<div></div>");
   }

	$('.wrapper').find('div').css({
    width: function(test) {
      return 900/test;
    },
    height: function(test) {
     return 900/test;
    }
  });
	$('.wrapper').find('div').addClass('grid');
	$('.wrapper').find('div').on('mouseenter',function(){
	$(this).addClass('highlight');

});

});

	function toClear(){
	$('.wrapper').find('div').removeClass('highlight');
}

/*	function newGrid(){

		 input = prompt("How many grids per line do you wish to set?");

	}*/
