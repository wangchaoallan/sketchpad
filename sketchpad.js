
var input = 16;


$(document).ready(function(){
	makeGrid(input);
	GridBlueColor();
});

function toClear(){
	$('.wrapper').find('div').css('background-color','white');
}

function makeGridWithBlue(){

input = getInput();

if(input>0&&input<=100){
deleteGrid();
makeGrid(input);
GridBlueColor();
}

}

function getInput(){

	do{
		input = prompt("How many grids per line do you wish to set?(Please input 1-100 :blue color)");
		if (input === "") {
        // user pressed OK, but the input field was empty
        alert("Ops, it seems you entered nothing");
        
        break;
        
    } else if (input<0||input>100) {
        // user typed something and hit OK
        alert("I told you not to excess the range of 1-100! You don't want to crush your broswer, do you?");

    }

    else if(input>0&&input<=100){

    } else {
    	
    	break;
    }


}while(input<=0||input>100);

return input;

}

function makeGridWithRandomColor(){

	input = getInput();
	if(input>0&&input<=100){
	deleteGrid();
	makeGrid(input);
	GridrandomColor();
}
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


}

function deleteGrid(){
	$('.wrapper').find('div').remove();
}


function GridBlueColor(){

	$('.wrapper').find('div').on('mouseenter',function(){
		$(this).css('background-color','blue');

	});

}

function GridrandomColor(){

	$('.wrapper').find('div').on('mouseenter',function(){
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$(this).css('background-color',randomColor);

	});

}