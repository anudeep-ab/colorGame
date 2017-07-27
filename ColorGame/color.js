var colors=[
// "rgb(128, 0, 0)",
// "rgb(128 ,128, 0)",
// "rgb(255, 0, 255)",
// "rgb(255, 215, 0)",
// "rgb(0, 100, 0)",
// "rgb(0,250,154)"

]

var squares=document.querySelectorAll(".square");




var colorDisplay=document.getElementById("colorDisplay");

var testDisplay=document.getElementById("testDisplay");

var tryAgain=document.getElementById("tryAgain");

var main=document.getElementById("main");


for(var i=0;i<6;i++){
	colors.push(randomColor());

}
var pickedColor=colors[randomNumber()];
colorDisplay.textContent=pickedColor;








for(var  i=0;i<squares.length;i++){

	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){

		var selectedcolor=this.style.background;
		
		console.log(selectedcolor,pickedColor);
		if(selectedcolor === pickedColor)
		{
			
			changeColor(selectedcolor);
			main.style.background=pickedColor;
		}
		else{
			
			this.style.background="#232323";
			tryAgain.textContent="Wrong";

			
		}

		

	});




}


	function changeColor(color){
		for(var i=0;i<squares.length;i++){

			squares[i].style.background=color;
			tryAgain.textContent="Correct!   ";

			}
	}


function randomColor(){

	for(var i=0;i<6;i++){
		var r=Math.floor(Math.random()*256);

		var g=Math.floor(Math.random()*256);

		var b=Math.floor(Math.random()*256);
	}
	

	 return  "rgb(" +r+','+" "+g+','+" "+b+")";



}

function randomNumber(){

	var num=Math.floor(Math.random()*6);

	return num;
}





