// Project Title
// Your Name
// Date
//

//map is 30x30
let mapData = [
  [1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

function renderGrid(){
  for(let x = 0; x < numCols; x++){
    for(let y = 0; y < numRows; y++){
      // empty tile
      stroke(0);
      if (mapData[y][x] === 0){
        fill(70,70,90);
        rect(x*tile, y*tile, tile, tile);
      }
      // obstacle tile
      if (mapData[y][x] === 1){
        fill(255);
        rect(x*tile, y*tile, tile, tile);
      }
      // death tile
      if (mapData[y][x] === 2){
        fill(255,0,0);
        rect(x*tile, y*tile, tile, tile);
      }
      // loading lazer
      if (mapData[y][x] === 3){
        fill(140,50,70);
        rect(x*tile, y*tile, tile, tile);
      }
    }
  }
}

let tile = 10;
let myPlayer;
let xPos;
let yPos;
const numCols = 30;
const numRows = 30;
let lazerDelay = 1000;
let lazerDuration = 2000;
let gameState = 1.0;
let energy = 10;
let guard = false;
let spaceTimer;
let bullets = [];

function setup() {
  setInterval(() => {
    if (energy < 10 && !keyIsDown(32)){
      energy += 1;
    }
  }, 1000);
  createCanvas(300, 330);
  spaceTimer = millis();
  // skill bar
  fill(0);
  rect(0,300,width,30);
  // energy
  fill(210, 70, 210);
  textAlign(LEFT);
  textSize(15);
  text("energy|", 10, 318);
  //player setup
  strokeWeight(0.5);
  myPlayer = new player(25,25);
  // timed Changes
bullets.push(new bulletR(10,100));
bullets.push(new bulletL(11,100));
bullets.push(new bulletU(10,100));
}

function draw(){
  // game start
  if (keyIsDown(32) === true){
    if (energy >= 1){
      guard = true;
      if (millis() - spaceTimer > 500){
        spaceTimer = millis();
        energy -= 1;
      }
    }
  }
  else {
    guard = false;
    spaceTimer = millis();
  }
  if (gameState === 1.0){
    renderGrid();
    border();
    grid();
    xPos = myPlayer.findX();
    yPos = myPlayer.findY();
    move();
    myPlayer.update();
    
    //energy visualizer
    fill(0);
    stroke(0);
    rect(60,307,180,20);
    fill(210,70,210);
    for (let i = 0; i < energy; i++){
      // if (i <= energy){
      fill(210,70,210);
      rect(60+i*15,307,13,13);
    }
  }
  for(let i = 0; i < bullets.length; i++){
    let b = bullets[i];
    b.move();
    if (b.alive === false){
      bullets.splice(i,1);
    }
  }
  print('energy',energy);

  // loss screen
  if (gameState === 0){
    fill(100,0,0);
    rect(0,0,width,height);
    fill(255,222,89);
    textAlign(CENTER);
    textSize(40);
    text("YOU LOSE",width/2,100);
    textSize(20);
    text("press F5 to try again", width/2, 200);
  }
}

function lazerH(y){
  for (let z = 1; z < 29; z++){
    mapData[round(y)][z] = 3;
  }
  setTimeout(() => {
    for (let z = 1; z < 29; z ++){
      mapData[round(y)][z] = 2;
    }
  }, lazerDelay);
  setTimeout(() => {
    for (let z = 1; z < 29; z ++){
      mapData[round(y)][z] = 0;
    }
  }, lazerDuration);
}

function lazerV(x){
  for (let z = 1; z < 29; z++){
    mapData[z][round(x)] = 3;
  }
  setTimeout(() => {
    for (let z = 1; z < 29; z ++){
      mapData[z][round(x)] = 2;
    }
  }, lazerDelay);
  setTimeout(() => {
    for (let z = 1; z < 29; z ++){
      mapData[z][round(x)] = 0;
    }
  }, lazerDuration);
}

function border(){
  for (let i = 0; i < 30; i++){
    mapData[i][0] = 1;
    mapData[i][29] = 1;
    mapData[0][i] = 1;
    mapData[29][i] = 1;
  }
}

function move(){
  if (keyIsPressed){
    //move right
    if (keyIsDown(68)){// 68 = d
      myPlayer.right();
    }
    //move left
    if (keyIsDown(65)){// 65 is a
      myPlayer.left();
    }
    //move down
    if (keyIsDown(83)){//83 is s
      myPlayer.down();
    }
    //move up
    if (keyIsDown(87)){//87 is w
      myPlayer.up();
    }
  }
}
// dashes
function keyPressed(){
  if (keyCode === SHIFT){
    if (keyIsDown(68)){
      myPlayer.dashRight();
    }
    if (keyIsDown(65)){
      myPlayer.dashLeft();
    }
    if (keyIsDown(83)){
      myPlayer.dashDown();
    }
    if (keyIsDown(87)){
      myPlayer.dashUp();
    }
    energy-=2;
  }
}

class bulletR{
  constructor(y,speed){
    this.y = y;
    this.x = 0;
    this.bulletTime = 0;
    this.speed = speed;
    this.alive = true
  }
  move(){
    if (millis() - this.bulletTime > this.speed){
      mapData[this.y][this.x] = 3;
      mapData[this.y][this.x - 2] = 2;
      mapData[this.y][this.x - 3] = 0;
      this.x += 1;
      this.bulletTime = millis();
    }
    if (this.x > 29){
      this.alive = false;
      mapData[this.y][this.x - 2] = 0;
      mapData[this.y][this.x - 3] = 0;
    }
  }
}


class bulletL{
  constructor(y,speed){
    this.y = y;
    this.x = 29;
    this.bulletTime = 0;
    this.speed = speed;   
    this.alive = true; 
  }
  move(){
    if (millis() - this.bulletTime > this.speed){
      mapData[this.y][this.x] = 3;
      mapData[this.y][this.x + 2] = 2;
      mapData[this.y][this.x + 3] = 0;
      this.x -= 1;
      this.bulletTime = millis();
    }
    if (this.x < 0){
      this.alive = false;
      mapData[this.y][this.x + 3] = 0;
      mapData[this.y][this.x + 2] = 0;
    }
  }
}

class bulletU{
  constructor(x,speed){
    this.x = x;
    this.y = 29;
    this.bulletTime = 0;
    this.speed = speed;
  }
  move(){
    if (millis() - this.bulletTime > this.speed){
      mapData[this.y][this.x] = 3;
      if (this.y + 2 < mapData.length){
        mapData[this.y + 2][this.x] = 2;};
      if (this.y + 3 < mapData.length){
        mapData[this.y + 3][this.x] = 0;}

      this.y -= 1;
      this.bulletTime = millis();
    }
  }
}



class player{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.tile = tile;
    this.speed = 3;
    this.dash = 25;
    this.stroke = 0;
  }
  // always run update
  update(){
    stroke(this.stroke);
    if (guard === true){
      stroke(225);
    }
    fill(210,70,210);
    circle(this.x+4,this.y+4,tile);
    if (guard === false){
      if (mapData[yPos][xPos] === 2){
        gameState = 0;
      }
    }
  }
  //movement binds
  right(){
    if (guard === false){
      if (this.x < 490){
        if(mapData[yPos][xPos+1] !== 1){
          this.x += this.speed;
        }
      }
    }
  }

  dashRight(){
    if (this.x < 270){
      if (energy >= 2){
        if (mapData[yPos][xPos+3] !== 1){
          this.x += this.dash;
        }
      }
    }

  }

  left(){
    if (guard === false){
      if (this.x > 0){
        if (mapData[yPos][xPos-1] !== 1){
          this.x -= this.speed;
        }
      }
    }
  }

  dashLeft(){
    if (this.x > 20){
      if (energy >= 2){
        if (mapData[yPos][xPos-3] !== 1){
          this.x -= this.dash;
        }
      }
    }
  }

  down(){
    if (guard === false){
      if (this.y < 300){
        if (mapData[yPos+1][xPos] !== 1){
          this.y += this.speed;
        }
      }
    }
  }

  dashDown(){
    if (this.y < 270){
      if (energy >= 2){
        if (mapData[yPos+3][xPos] !== 1){
          this.y += this.speed*10;
        }
      }
    }
  }

  up(){
    if (guard === false){
      if (this.y > 0){
        if (mapData[yPos-1][xPos] !== 1){
          this.y -= this.speed;
        }
      }
    }
  }

  dashUp(){
    if (this.y > 20){
      if (energy >= 2){
        if (mapData[yPos-3][xPos-1] !== 1){
          this.y -= this.speed*10;
        }
      }
    }
  }

  // find values
  findX(){
    return round(this.x/tile);
  }

  findY(){
    return round(this.y/tile);
  }
}

function grid(){
  //vertical
  for(let i = 0; i < width; i += tile){
    line(i,0,i,300);
  }
  //horizontal
  for(let i = 0; i < 300; i += tile){
    line(0,i,width,i);
  }
}


