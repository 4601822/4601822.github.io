// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(15);
}

let circleTime = 5;
let circleInterval = 0.1; 

function draw() {
  background(225);
  line(width/2,0,width/2,height);
  //random()
  randomCircle();
  //noide()
  noiseCirlce();
  //staricase
  staircase();
}

function staircase(){
  //use a for loop to draw a series of rectangles for use as terrain
  let rectWidth = 20;
  for(let x = 0; x <= width; x += rectWidth){
    noFill();
    let rectHeight = random(50,500);
    rect(x, height, rectWidth, -rectHeight);
  }
}

function noiseCirlce(){ 
//amount to push clock fwd
//draw circle on screen using noise for values (diameter,color)
let cSize = noise(circleTime);
cSize = map(cSize, 0, 1, 10, 255)
circle(width*0.75, height/2, cSize);
text(round(cSize), width * 0.75, height/2);
circleTime += circleInterval;
fill(cSize, cSize/2,255-cSize)
}

function randomCircle(){
  let cSize = random(10,255);
  fill(cSize, cSize/2,255-cSize)
  circle(width*0.25, height/2, cSize);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(round(cSize), width * 0.25, height/2);
}