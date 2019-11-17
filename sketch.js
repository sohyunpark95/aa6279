let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var Ghost;

function preload() {
  Ghost = loadAnimation('G/UP.png', 'G/DOWN.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(255);
  animation(Ghost, 250, 200);
}
