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
  background(220);
}

class Vehicle{
  //constructor
  constructor(x,y,dir){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.c = color(random(255),random(255),random(255))
    this.type = int(random(2));
  }

  display(){
    if(this.type===0){// 0 - car

    }
    else if (this.type===1)
  }

  drawCar(){
    fill(c);
  }


}