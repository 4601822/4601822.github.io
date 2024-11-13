// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let car;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  car = new vehicle(1,'red',150,150,1,5);
  car.display();
}

function drawRoad(){
  fill(0);
  rect(-10,height/2-200,width+20,400);
  fill(255);
  stroke(255);
  strokeWeight(2);
  for(l = 0;l < 40; l++){
    line(width/40*l,height/2,width/40*l+10,height/2);
  }
}

class vehicle{
  constructor(type,c,x,y,d,s){
    this.type = type;
    this.c = c;
    this.x = x;
    this.y = y;
    this.d = d;
    this.s = s;
  }

  display(){
    strokeWeight(1);
    stroke(0);
    rectMode(CENTER,CENTER);
    fill(c);
    if (this.type === 0){
      rect(this.x,this.y,50,10);
      //wheels
      rect(this.x+20,this.y+5,5,2);
      rect(this.x+20,this.y-5,5,2);
      rect(this.x-20,this.y+5,5,2);
      rect(this.x-20,this.y-5,5,2);
    }
    else{
      rect(this.x-15,this.y,30,14);
      rect(this.x+15,this.y,30,14);
    }
  }

  move(){
    this.x += this.s;
  }

  speedUp(){
    this.s += 1;
    if (this.s >= 15){
      this.s = 15;
    }
  }

  speedDown(){
    this.s -= 1;
    if(this.s <= 0){
      this.s = 0;
    }
  }

  changeColor(){
    if (this.c === 'red'){
      this.c = 'green';
    }
    if (this.c === 'green'){
      this.c = 'blue';
    }
    if (this.c ==='blue'){
      this.c = 'yellow';
    }
    if (this.c === 'yellow'){
      this.c = 'red';
    }
    else{
      this.c = 'red';
    }
  }

  action(){
    this.move();
    numb = random(1,100);
    if (numb === 1){
      this.speedUp;
    }
    numb = random(1,100);
    if (numb === 1){
      this.speedDown;
    }
    numb = random(1,100);
    if (numb === 1){
      this.changeColor;
    }
    this.display;
  }
}
