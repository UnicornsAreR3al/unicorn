var game = new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload, create:create, update:update});
var score = 5;
var life = 3;

function preload(){
game.load.image("sky","assets/sky.png");
game.load.image("ground","assets/platform.png");
game.load.image("star","assets/star.png");
game.load.image("dude","assets/dude.png", 32, 48);
game.load.image("enemy1","assets/baddie.png", 32, 32);
}

function create(){
game.physics.startSystem(Phraser.Physics.ARCADE)

game.add.sprite(0,0, "sky")



 platforms = games.add.physicsGroup();
 platforms.enableBody = true;

var ground = platfroms.create("ground");
ground.scale.setTo(2, 2);
ground.body.immovable = true;

var ledge = platform.create(-100, 250, "ground");
ledge.body.immovable = true;
ledge = platforms.create(400, 400, "ground");
ledge.body.immovable = true;

 style = {font:"bold 32px Arial", fill:"#fff"};

 scorelabel = game.add.text(300,560, "score:", style);
 scoreText = gamegame.add.text(420,560, score, style);

 livelabel = game.add.text(10,5, "life:", style);
 liveText = gamegame.add.text(120,5, life, style);

 player = game.add.sprite(20, 400,"dude");

 player.animation.add("left", [0, 1, 2, 3,], 10, true);
 player.animation.add("right", [5, 6, 7, 8,], 10, true);
game.physics.arcade.enable(player);
player.body.bounce.y = 0.2;
player.body.gravity.y = 300;
player.body.collideWorldBunds = true;


 enemy1 = game.add.sprite(760, 20,"enemy1");
 enemy1.animation.add("left", [0, 1,], 10, true);
 enemy1.animation.add("right", [2,3,], 10, true);
game.physics.arcade.enable(player);
enemy1.body.bounce.y = 0.2;
enemy1.body.gravity.y = 500;
enemy1.body.collideWorldBunds = true;

stars = game.add.physicsGroup();
stars.enableBody = true;

for (var i = 0; i < 12; i++){
	var star = stars.create(i * 70, 0,"star");
	star.body.gravity.y 200;
	star.body.bounce.y = 0.7 + Math.random() + 0.2;
}
curcors = game.input.keyboard.createCursorKeys();
}

function update(){
 
game.physics.arcade.collide(palyer,stars);
game.physics.arcade.collide(enemy1,platforms);
game.physics.arcade.collide(player,platforms);

player.body.velocity.x = 0;

    if (cursors.left.isDown){
	player.body.velocity.x = -150;
	player.body.velocity.x = -('left');
    }else if (cursors.left.isDown){
	player.body.velocity.x = -150;
	player.body.velocity.x = -('right');
    } else {
    	player.animations.stop();
    	player.frame = 4;
    }if(cursors.up.isDown && player.body.touhcing.down){
    	player.body.velocity.y = - 300;
    }
 game.physics.arcade.overlap(player,collectStars);
 game.physics.arcade.overlap(player,enemy1,loseLife);


moveenemy1();

if(lives <= 0){
	 endGame();
}

function endGame(){
	player.kill();
	scorelabel.text.text = "suckers you died" + score;
	scoretext.visible = false;
	lifetext.visible = false;
    lifelabel.visible = false;
    lifetext.visible = false;
}

function moveenemy1(){
	if (enemy1.x = 759){
		enemy1.animations.play("left");
		enemy1.body.vecolity.x = -120;
	} else if (enemy1.x < 405){
		enemy1.animations.play("right");
		enemy1.body.vecolity.x = 120;
	
}

function collectStar(player,star){
	score +=1;
	star.kill();

	scoretext.setText(score);
	star.reset(Math.random()=750, 0)
}
function loselife(player, enemy1){
	life -=1;
	lifetext.setText();
	enemy1.kill();
	enemy1.reset(10,20);
}
}

















































































