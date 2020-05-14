var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400,200,50,80);
 movingRect.shapeColor = "green";

 fixedRect = createSprite(200,200,80,50);
 fixedRect.shapeColor = "green";
 }

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  console.log(movingRect.x -fixedRect.x);
 
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x -object2.x < object2.width/2 +object1.width/2
    &&  object2.x -object1.x < object2.width/2 +object1.width/2
    &&  object1.y -object2.y < object2.height/2 +object1.height/2
    &&  object2.y -object1.y < object2.height/2 +object1.height/2

    )
    {
return true;
  }
else{
  //movingRect.shapeColor = "green";
//fixedRect.shapeColor = "green";

return false;

}
}