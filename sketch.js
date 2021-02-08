var fixed,moving






function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.velocityY=3
  moving=createSprite(500,300,50,50);
  moving.velocityY=-3
}

function draw() {
  background(0); 

/*if(moving.x-fixed.x < moving.width/2+fixed.width/2
  &&fixed.x -moving.x < moving.width/2+fixed.width/2
  &&moving.y-fixed.y < moving.width/2+fixed.width/2
  &&fixed.y -moving.y < moving.width/2+fixed.width/2){
  fixed.shapeColor = "red";
  moving.shapeColor=  "red";
}

else{
fixed.shapeColor = "green";
moving.shapeColor = "green";


}*/

if(moving.x-fixed.x < moving.width/2+fixed.width/2
  &&fixed.x -moving.x < moving.width/2+fixed.width/2){
    moving.velocityX=moving.velocityX*(-1);
    fixed.velocityX=fixed.velocityX*(-1);
  }
  
  if (moving.y-fixed.y < moving.width/2+fixed.width/2
  &&fixed.y -moving.y < moving.width/2+fixed.width/2){
    moving.velocityY=moving.velocityY*(-1);
    fixed.velocityY=fixed.velocityY*(-1);
  }


  drawSprites();
}