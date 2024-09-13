// Drawing challenge
// Devin Hubbard
// september 13, 2024
//
// 

let headsize = 3
let rx = 150, ry = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();

//creature creation
  fill(50, 150, 255)
  rect(rx, ry, headsize*70, headsize*70, headsize*70, headsize*70, headsize*0);//head
  rect(rx,(ry+headsize*70),headsize*10,headsize*20)//left leg
  rect((rx+headsize*60),(ry+headsize*70),headsize*10,headsize*20)//right leg
  fill(0)
  circle((rx+headsize*50),(ry+headsize*40),headsize*7)//right eye
  circle((rx+headsize*20),(ry+headsize*40),headsize*7)//left eye
  rect((rx+headsize*25),(ry+headsize*55),headsize*20,headsize*3)//mouth
}