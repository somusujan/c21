var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=5
  fixedRect.velocityY=-5

}

function draw() {
  background(0,0,0);  

Bounceoff(movingRect,fixedRect)
  
  drawSprites();
}
