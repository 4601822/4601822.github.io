// 3D basics + CSS centering
// Devin
// 11/18/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;
stroke(255,255,255);
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateY(frameCount);
  angle = map(mouseX,0,windowWidth,-80,80);
  for (i=0; i < 360; i += 10){
    push();
    rotateY(i);
    boxes(70);
    pop();
  }
}

function boxes(size){
  if (size > 3){
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);
  }
}