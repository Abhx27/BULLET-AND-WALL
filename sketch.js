var car,wall;
var speed, weight
function setup() {
  createCanvas(1600,400);
bullet = createSprite(50,200,50,50);
wall = createSprite(1500,200,50,50);
  thickness = random(40,70)
  weight = random(30,52)
  speed = random(100,200)

  bullet.velocityX = speed;
}
function draw() {
  background(0,0,0);
  if(hasCollided(bullet,wall)){
    bullet.velocity = 0;
    var  damage = 0.5*weight*speed*speed/thickness*thickness*thickness
    
    if(damage>10){
        wall.shapeColor = color(255, 0, 0);
    }
    
    if (damage<10){
    wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
  }
