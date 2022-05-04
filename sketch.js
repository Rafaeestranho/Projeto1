var sea,ship;
var seaImg,shipImg;
var letBoundary;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);
  leftBoundary=createSprite(180,200,150,1);
  leftBoundary.visible = false;

  
  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;
  reset();
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  if (keyIsDown(DOWN_ARROW)) 
  {
ship.y = ship.y +4;
  }
  if (keyIsDown(UP_ARROW)) 
  {
ship.y = ship.y -4;
  }
if (ship.collide(leftBoundary));
reset;
drawSprites();
}

function reset() {
ship.y = 130;
ship.x = 200;
}


