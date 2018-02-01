var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "blue";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "DarkTurquoise";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(225,100);
ctx.lineTo(150,200);
ctx.lineTo(75,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "DeepPink";
ctx.fill();


ctx.arc(150,150,100,0,6.28);
ctx.strokeStyle ="DodgerBlue";
ctx.stroke();
ctx.fillStyle ="DodgerBlue";

