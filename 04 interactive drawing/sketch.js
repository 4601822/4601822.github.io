// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}
let sunX = 100
let sunY = 180
let time = 220

function draw() {
  //draw background
  background(100,60,time);
  fill(40,220,80)
  stroke(0,190,0)
  ellipse((windowWidth/2), windowHeight,(windowWidth*2),(windowHeight*0.7))

  if (time === 220){
  //draw sun
  fill(237, 231, 43);
  stroke(237, 171, 43);
  strokeWeight(7);
  circle(sunX,sunY,100);
  }
  else if (time === 180){
    
  }

  //move sun
  if (keyIsPressed === true){
    if (key === 'a'){
      sunX -=5
    }
    else if (key === 'd'){
      sunX +=5
    }
  }
  if (sunX > (windowWidth+100)){
    sunX = (-95);
    if (time === 220){ //day or night
      time = 180;
    }
    else if (time === 180){
      time = 220;
    }
  }
  if (sunX < (-100)){
    sunX = (windowWidth+95);
    if (time === 220){ //day or night
      time = 180;
    }
    else if (time ===180){
      time = 220;
    }
    }
  }
