let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(30);
  rect(mouseX, mouseY, 100, 100);
rect(0,200,250,100);
rect(350,200,250,100);
rect(0,300,300,100);
rect(350,300,300,100);
}
