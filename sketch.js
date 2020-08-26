var bullet,speed,weight;
var wall,thickness
function setup() {
  createCanvas(800,400);
  speed=random(30,50)
  weight=random(400,1500)
  createSprite(400, 200, 50, 50);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(400,200,60,height/2)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.collide(wall);
}
