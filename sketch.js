var car,wall;
var speed, weight
function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,50,50);
  car.velocityX = speed;
  if(speed< 100){
    car.shapeColor(0,255,0);
  } 

  if(speed = (100-180)){
    car.shapeColor(230,230,0);
  } 

  if(speed > 180){
    car.shapeColor(255,0,0);
  } 
}

function draw() {
  background(255,255,255); 
  car.collide(wall);
  drawSprites();
}
