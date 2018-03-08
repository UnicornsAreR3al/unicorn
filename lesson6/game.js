var c = document.getElementById("canvas");
var ctx = c.getContext("2d")

//width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;

//position and size of player
var x = 300;
var y = 300;
var size = 50;

//player speed
var speedX = 0;
var speedY = 0;

//position of ball
var itemX;
var itemY
var itemSize = 50;

var score = 0;
var collision = false;










function drawGoldR(){
	var GoldR = new Image();
	GoldR.src = "goldenRetriver.png"
	ctx.drawImage(GoldR, x, y, size, size)
   
}

function drawTball(){
	var Tball = new Image();
	Tball.src = "tennisBall.png"
	ctx.drawImage(Tball, itemX, itemY, itemSize, itemSize)


}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}


function init(){
	itemX = Math.floor(Math.random()*(WIDTH- itemSize));
	itemY = Math.floor(Math.random()*(HEIGHT- itemSize));
	
	window.onkeydown = keydownControl;

//keyboard event
	return setInterval(draw, 10);
}

function keydownControl(e){
if (e.keyCode == 37){
		speedX = -4;
		speedY = 0;
	}	
	if (e.keyCode == 38){
		speedX = 0;
		speedY = -4;
	}

	else if (e.keyCode == 39){
	
		speedX = 4;
		speedY = 0;
	}
	else if (e.keyCode == 40){
	
		speedX = 0;
		speedY = 4;
	}

}

function draw(){
	clear();
	drawGoldR();
	drawTball();

	if(x+speedX < 0 || x+speedX > WIDTH - size){
		speedX = -speedX;
	}
if(y+speedY < 0 || y+speedY > HEIGHT - size){
		speedY = -speedY;
	}
	x += speedX;
	y += speedY;

	collisionCheck();
	collisionHandle();
}
function collisionCheck(){
	if( (x+size > itemX) && (x <itemX+itemSize)&&
	(y+size > itemY) && (y <itemY+itemSize)) {
    collision = true;
	}else{
	collision = false;
	}
	
   }
    function collisionHandle(){
	if(collision){
	score += 1;
	document.getElementById("score").innerHTML = score;
	itemX = Math.floor(Math.random()*(WIDTH- itemSize));
	itemY = Math.floor(Math.random()*(HEIGHT- itemSize));

	
	}
}

init();





