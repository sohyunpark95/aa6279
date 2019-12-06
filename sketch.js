let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let squid

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
//  resetGame();
}

function draw() {
  background(30);
  rect(mouseX, mouseY,40,200);
rect(0,200,140,200);
rect(320,200,140,200);
fill(255,240,180,250);
rect(460,200,140,200);
rect(140,200,140,200)


}
