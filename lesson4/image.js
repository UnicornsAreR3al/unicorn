var c =document.getElementById("canvas");
var ctx =c.getContext("2d");

var img = new Image();
img.src ="unicorn.png";

var imgTwo = new Image();
imgTwo.src = "galaxyUnicorn.png"

img.onload = function(){
ctx.drawImage(img,150,150,100,150);
}

imgTwo.onload = function(){
	ctx.drawImage(imgTwo,0,150,150,150);
}

ctx.font = "50px Arial"
ctx.strokeStyle = "blue";
ctx.strokeText("#loveUnicorns",10,150);

ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(215,100);
ctx.lineTo(150,200);
ctx.lineTo(65,100);
ctx.closePath();
ctx.stroke();
ctx.fillstyle = "SpringGreen"
ctx.fill();










