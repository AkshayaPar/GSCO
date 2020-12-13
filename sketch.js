// To create the variables
var car;
var wall;
var speed;
var weight;

function setup() {
// To create the canvas
createCanvas(1600,400);

// To give speed and weight random properties
speed=random(55, 90);
weight= random(400,1500);

// To create the car sprite
car=createSprite(50, 200, 50, 50);
car.velocityX=speed;  
car.shapeColor=color(255);

// To create the wall sprite
wall=createSprite(1500,200, 400, height/2);
wall.shapeColor=color(80, 80, 80);

// To calculate deformation using this formula 
deformation=0.5*weight*speed*speed/22500;
}
    
function draw() {
  
  // setting up the background
  background(0,0,0); 

  // To detect the collision and change the color
  if (car.isTouching(wall) ){
  if(wall.x-car.x<(car.width+wall.width)){
  car.velocityX=0;
  var deformation=0.5 * weight *speed * speed/22509;

  if(deformation>180){
  car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
  }

  if(deformation<100){
  car.shapeColor=color(0,255,0);
  }
  }
  }

  // To draw the sprites
  drawSprites();
}