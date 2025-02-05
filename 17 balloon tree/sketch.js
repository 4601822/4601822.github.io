// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dir = 18;
let seed;
let scale = 15;
function setup() {
  createCanvas(500, 500);
  background(255);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(255);
  dir = map(mouseX,0,windowWidth,5,50)
  drawTree(width/2, height*0.9, 90, 6, 7);
}

function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth, stroke) {
  fill(random(255),random(255),random(255));
  strokeWeight(stroke);
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    drawTree(x2, y2, angle-dir, depth-1, stroke*0.5);
    drawTree(x2, y2, angle+dir, depth-1, stroke*0.5);
    drawTree(x2, y2, angle+0, depth-1, stroke*0.5);
    if (depth<5){
      drawLeaf(x2,y2,depth+random(-1,1));
    }
  }
}

function drawLeaf(x,y,d){
  circle(x,y,d*5);
}