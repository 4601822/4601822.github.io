// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);

}
let rectWidth = 10;
let time = 5
let flag_Y = 30000
function draw() {
  if (keyIsDown(LEFT_ARROW) === true) {
    if (rectWidth >= 0.2){
     rectWidth -= 0.1;
     background(220);
     terrain();
  }

  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    rectWidth += 0.1;
    background(220);
    terrain();
  }
}

function terrain(){
  flag_Y = 0
  for(let x = 0; x <= width; x += rectWidth){
    noFill;
    time += 0.02
    let rectHeight = noise(time);
    rectHeight = map(rectHeight,0,1,100,600);
    rect(x,height,rectWidth,-rectHeight)

    //flag position
    if (rectHeight > flag_Y){
      flag_Y = rectHeight;
      strokeWeight(5);
stroke(0,255,0);
      line(x,height-flag_Y,x,height-(flag_Y-20));
      strokeWeight(1);
      stroke(0);

    }
    } 
 }

