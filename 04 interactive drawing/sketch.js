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
let mountain = false

function draw() {
  //draw background
  background(100,60,time);
  if (mountain){
    fill(100,80,120)
    stroke(80,80,80)
    triangle(mouseX-600,windowHeight,mouseX-300,windowHeight,mouseX-450,300)
    triangle(mouseX-700,windowHeight,mouseX-400,windowHeight,mouseX-550,350)
    triangle(mouseX-500,windowHeight,mouseX-200,windowHeight,mouseX-350,400)
    triangle(mouseX-400,windowHeight,mouseX-100,windowHeight,mouseX-250,320)
    triangle(mouseX-800,windowHeight,mouseX-500,windowHeight,mouseX-650,380)
    triangle(mouseX-300,windowHeight,mouseX,windowHeight,mouseX-150,340)
    triangle(mouseX-200,windowHeight,mouseX+100,windowHeight,mouseX-50,300)
    triangle(mouseX-100,windowHeight,mouseX+200,windowHeight,mouseX+50,300)
    triangle(mouseX+100,windowHeight,mouseX+400,windowHeight,mouseX+250,350)
    triangle(mouseX+400,windowHeight,mouseX+700,windowHeight,mouseX+550,420)
    triangle(mouseX+520,windowHeight,mouseX+820,windowHeight,mouseX+670,300)
    triangle(mouseX+200,windowHeight,mouseX+500,windowHeight,mouseX+350,270)
    triangle(mouseX+300,windowHeight,mouseX+600,windowHeight,mouseX+450,300)
    triangle(mouseX+0,windowHeight,mouseX+300,windowHeight,mouseX+150,300)
  }
  fill(40,220,80)
  stroke(0,190,0)
  ellipse((windowWidth/2), windowHeight,(windowWidth*2),(windowHeight*0.7))

  
  //draw sun
  if (time === 220){
  fill(237, 231, 43);
  stroke(237, 171, 43);
  strokeWeight(7);
  circle(sunX,sunY,100);
  }
  else if (time === 180){
    fill(180,180,230);
    stroke(80, 80, 130);
    strokeWeight(7);
    circle(sunX,sunY,100);
  }
  
  fill(225)
  stroke(0)
  textSize(20)
  text('Devin',10,windowHeight-10)

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
  function mouseClicked(){
    mountain = !mountain
  }