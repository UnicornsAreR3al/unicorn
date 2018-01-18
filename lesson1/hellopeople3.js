console.log("testing...")
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.strokeStyle ="rgb(146,120,252)"
ctx.stroke();

ctx.strokeRect(100,100,200,200)
ctx.fillStyle = "rgb(0,160,200)"
ctx.fillRect(200,200,100,100);
ctx.clearRect(200,200,25,25);

var c1 = document.getElementById("mycanvas2");
var ctx1 = c1.getContext("2d");
ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150)




