var fixRect , movingRect ,rect1 , rect2
function setup() {
  createCanvas(800,400);
  fixRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(100,200,20,20);
  rect1 = createSprite(200,300,30,60);
  rect2 = createSprite(260,60,40,55);
  fixRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  rect1.shapeColor = "blue";
  rect2.shapeColor = "yellow";
  fixRect.debug = true;
  movingRect.debug = true;
 

  
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(movingRect,rect2)){
  movingRect.shapeColor= "red";
  rect2.shapeColor = "red";
 }
 else{
  movingRect.shapeColor= "green";
  rect2.shapeColor = "yellow";
 }
  drawSprites();
}
