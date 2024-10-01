// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  terrain();
}

function terrain(){
  let rectWidth = 20;
  for(let x = 0; x <= width; x += rectWidth){
    fill(0);
    let rectHeight = noise(5);
    rectHeight = map(rectHeight,0,1,10,255);
    rect(x,height,rectWidth,-rectHeight)
  }
}
