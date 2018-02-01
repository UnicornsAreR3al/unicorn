var c =document.getElementById("canvas");
var ctx =c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 500;

var x, y;
var mx, my;

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle = "DeepPink";
	ctx.fill();
    ctx.stroke();

}

function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw,10);
}

function draw(){
	//clear();
	circle(x,y,50);


	if(x<0 || x+mx>WIDTH){
		mx = -mx;
	}

	if(y<0 || y+my>HEIGHT){
		my = -my;
	}

	x = x + mx;
	y = y + my;
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

init();




