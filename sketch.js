let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var FIGHT;

function preload() {
  FIGHT = loadAnimation('FIGHT/UP.png', 'FIGHT/DOWN.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(255);
  animation(FIGHT, 250, 200);
}
