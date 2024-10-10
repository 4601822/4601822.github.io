// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let gridSpacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  // loopReview();
}

function loopReview(){
  //quick nested loops practice (x,y)
  for (let x = 0; x < 4; x++){
    for (let y = 0; y < 4; y++){
      print(x,y);
    }
  }
}

function draw() {
  background(220);
  // renderGrid();
}

function circleDistance(x1, y1 , x2 ,y2){
  //takes in 2 endpoints
  //returns distance
  //rounded answer
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return round(c);
}

function renderGrid(){
  //use nested loops to create a grid of shapes
  for (let x = 0; x <= width; x += gridSpacing){
    for(let y = 0; y <= height; y += gridSpacing){     
      let d = circleDistance(x,y,mouseX,mouseY);
      if (d>150){
        fill(0);
      }
      else{
        fill(200,50,120);
      }
      circle(x,y,gridSpacing);

      //distance text
      fill(255);
      textSize(gridSpacing/2);
      textAlign(CENTER,CENTER);
      text(d,x,y);
    }
  }
}