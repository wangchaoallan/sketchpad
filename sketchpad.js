
var input = 3;


$(document).ready(function(){

	makeGrid(input);


});

function toClear(){
	$('.wrapper').find('div').removeClass('highlight');
}

function newGrid(){

	input = prompt("How many grids per line do you wish to set?");
	deleteGrid();
	makeGrid(input);
	
}

function makeGrid(input){

	for(var i = 0; i<input*input;i++){
		$('.wrapper').append("<div></div>");
	}

	var grid = $('.wrapper').find('div');

	grid.width(900/input);
	grid.height(900/input);
	$('.wrapper').width(900+input*4);
	$('.wrapper').height(900+input*4);
	grid.addClass('gridStyle');
	grid.on('mouseenter',function(){
		$(this).addClass('highlight');

	});
}

function deleteGrid(){
$('.wrapper').find('div').remove();
}