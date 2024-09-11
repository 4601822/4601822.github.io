// 01 Basics Of Drawing
// Devin Hubbard
// September 11, 2024
//
// 2D primitives, color, animation, mouse/keyboard events

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  fill(50,70,100)
  circle(0,0,50);
  fill(150,255,90);
  circle(width,0,50);
  fill(210,40,0)
  circle(0,height,50)
  fill(0,0,220)
  circle(width,height,50)
  fill(120,120,50)
  circle(width/2,height/2,50)
  fill(150,150,150)
  circle(mouseX,mouseY,20)
  circle(width/3*2,height/3*2,50)
}
