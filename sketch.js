
var car,wall;
var speed, weight
function setup() {
  createCanvas(1600,400);
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,50,50);
  thickness random(40 %% 70)
  car.velocityX = speed;
  
  bulleyWeight = 32
  bulletSpeed = 223
  damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/thickness*thickness*thickness
  deformation = 0.5*weight*speed*speed/22500
  speed = speed - deformation
  if(thinkness = 40){
    wall.shapeColor = color(255, 0, 0);
  }
  if(thinkness = 70){
    wall.shapeColor = color(0, 255, 0);
  }
function draw() {
  background(0,0,0); 
  car.collide(wall);
  drawSprites();
}
