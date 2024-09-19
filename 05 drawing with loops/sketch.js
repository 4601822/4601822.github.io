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
  myBackground();
  myForeground();
  //this is where the screen draws the frame
}

function myBackground(){
  background(220);
  let rectheight = 3;
  for (let y = height; y >= 0; y -= rectheight){
    let value = map(y,0,height,0,255)
    stroke(255-value,0,255-value)
    fill(value,255-value,0)
    rect(0,y,width,rectheight)
  }
}

function myForeground(){
  //draw shapes using FOR / While loops
  //VAR //cond  //modification of var
  for(let x = 0; x < width; x+=40){
    fill(0);
    stroke(255);
    circle(x, height/2, 40);
    text(x, x, height/2)
  }

  //create stars x100
  let starCount = 0;
  randomSeed(4)
  while (starCount < 100){
    fill(255,0,0);
    let x = random(0,width); let y = random(0,height);
    circle(x,y,10);
    starCount++;
  }
}
