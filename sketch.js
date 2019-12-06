let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let squid;

function setup() {
  background(255,100,100);
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
//  noCursor();
  resetGame();
}

function draw() {
//  rect(mouseX, mouseY,40,200);
rect(0,200,140,200);
rect(320,200,140,200);
fill(255,240,180,250);
rect(460,200,140,200);
rect(140,200,140,200);
}

function resetGame() {
  fill(255,255,255);
squid = createSprite(300,200,40,200);

}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    squid.position.y += 10;
  }
drawSprites();
}
