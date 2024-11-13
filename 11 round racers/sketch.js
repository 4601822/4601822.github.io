// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Racer1;
let Racer2;
let Racer3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  Racer1 = new Racer(height/4,'red');
  Racer2 = new Racer(height/3, 'blue');
  Racer3 = new Racer(height/2, 'green');
}

function draw() {
  background(220);
  Racer1.display();
  Racer2.display();
  Racer3.display();
  Racer1.move();
  Racer2.move();
  Racer3.move();
}

class Racer{
  constructor(yPos, Color){
    this.xPos = 0;
    this.yPos = yPos;
    this.xSpeed = random(3,16);
    this.Color = Color;
  }

  move(){
    this.xPos =+ this.xSpeed;
    if (this.xPos >= windowWidth){
      this.xPos = 0;
    }
  }

  display(){
    fill(this.Color);
    circle(this.xPos, yPos, 20);
  }
}