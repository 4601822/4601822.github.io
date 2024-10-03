// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  terrain();
}
let rectWidth = 10;
let time = 5
let flag_Y = 30000
let flag_top = 30
function draw() {
  if (keyIsDown(LEFT_ARROW) === true) {
    if (rectWidth >= 0.2){
     rectWidth -= 0.1;
     background(220);
     terrain();
     flag();
  }

  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    rectWidth += 0.1;
    background(220);
    terrain();
    flag();
  }
}

function terrain(){
  flag_Y = 0
  flag_X = 0
  for(let x = 0; x <= width; x += rectWidth){
    noFill;
    time += 0.02
    let rectHeight = noise(time);
    rectHeight = map(rectHeight,0,1,100,600);
    rect(x,height,rectWidth,-rectHeight)

    //flag position
    if (rectHeight > flag_Y){
      flag_Y = rectHeight;
      flag_X = x
    }
  } 
}

function flag(){
  strokeWeight(3);
  flag_top = height-flag_Y-30;
  fill(255,0,0);
  line(flag_X,height-flag_Y,flag_X,flag_top);
  triangle(flag_X,flag_top,flag_X,flag_top+15,flag_X+15,flag_top+7.5);
  noFill();
  strokeWeight(1);
}



//  strokeWeight(5);
//  stroke(0,255,0);
//        line(x,height-flag_Y,x,height-(flag_Y-20));
//        strokeWeight(1);
//        stroke(0)