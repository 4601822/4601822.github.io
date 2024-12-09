// Project Title
// Your Name
// Date
//

//map is 40x50
let mapData = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
      if (mapData[y][x] === 0){
        fill(70,70,90);
        rect(x*tile, y*tile, tile, tile);
      }
      if (mapData[y][x] === 1){
        fill(255);
        rect(x*tile, y*tile, tile, tile);
      }
      if (mapData[y][x] === 2){
        fill(255,0,0);
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

function setup() {
  createCanvas(300, 300);
  strokeWeight(0.5);
  myPlayer = new player(25,25);
}

function draw(){
  renderGrid();
  border();
  grid();
  xPos = myPlayer.findX();
  yPos = myPlayer.findY();
  move();
  lazerH(3);
  myPlayer.update();
  print(xPos,yPos);
}

function lazerH(y){
  fill(255,0,0);
  stroke(255,0,0);
  strokeWeight(1);
  line(0,round(y*tile)+5,300,round(y*tile)+5);
  stroke(0);
  strokeWeight(0.5);
  setTimeout(() => {
    for (let z = 0; z < 30; z ++){
      mapData[round(y)][z] = 2;
    }
  }, 2000);
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
  }
}

class block{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.tile = tile;
  }

  check(){
    fill(255);
    rect(this.x,this.y,this.tile);
  }
}

class player{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.tile = tile;
    this.speed = 3;
    this.dash = 25;
  }
  // always run update
  update(){
    fill(210,70,210);
    circle(this.x+4,this.y+4,tile);
    if (mapData[yPos][xPos] === 2){
      this.x = 30; this.y = 30;
    }
  }
  //movement binds
  right(){
    if (this.x < 490){
      if(mapData[yPos][xPos+1] !== 1){
        this.x += this.speed;
      }
    }
  }

  dashRight(){
    if (this.x < 270){
      if (mapData[yPos][xPos+3] !== 1){
        this.x += this.dash;
      }
    }

  }

  left(){
    if (this.x > 0){
      if (mapData[yPos][xPos-1] !== 1){
        this.x -= this.speed;
      }
    }
  }

  dashLeft(){
    if (this.x > 20){
      if (mapData[yPos][xPos-3] !== 1){
        this.x -= this.dash;
      }
    }
  }

  down(){
    if (this.y < 300){
      if (mapData[yPos+1][xPos] !== 1){
        this.y += this.speed;
      }
    }
  }

  dashDown(){
    if (this.y < 270){
      if (mapData[yPos+3][xPos] !== 1){
        this.y += this.speed*10;
      }
    }
  }

  up(){
    if (this.y > 0){
      if (mapData[yPos-1][xPos] !== 1){
        this.y -= this.speed;
      }
    }
  }

  dashUp(){
    if (this.y > 20){
      if (mapData[yPos-3][xPos-1] !== 1){
        this.y -= this.speed*10;
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
    line(i,0,i,height);
  }
  //horizontal
  for(let i = 0; i < height; i += tile){
    line(0,i,width,i);
  }
}


