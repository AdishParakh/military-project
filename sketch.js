var wall,bullet
var speed, weight
var thickness



function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, thickness, height/2)
  wall.shapeColor=80,80,80
  
  bullet=createSprite(50, 200, 50, 25);
  bullet.shapeColor="white"


  speed=random(223,321)
  weight=random(30,52)
  thickness = random(22,83)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if (wall.x-bullet.x<   bullet.width/2+wall.width/2){
 var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
 bullet.velocityX=0
 if (damage<10){
   wall.shapeColor="green"
 }
if (damage>10){
  wall.shapeColor="red"
}
  }
  console.log(damage)
  drawSprites();
}