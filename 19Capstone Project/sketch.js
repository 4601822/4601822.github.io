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
let lazerDelay = 600;
let lazerDuration = 5000;
let gameState = 1.0;
let energy = 10;
let guard = false;
let spaceTimer;
let bullets = [];
let gameTime = 0;
let time = 0;

function setup() {
  // frameRate(5);
  gameTime = millis();
  setInterval(() => {
    if (energy < 10 && !keyIsDown(32)){
      energy += 1;
    }
  }, 3000);
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


  // weapon examples:

  //  bullets.push(new bulletD(11,100));
  //  bullets.push(new bulletR(10,100));
  //  bullets.push(new bulletL(11,100));
  //  bullets.push(new bulletU(25,100));

  // lazerH(13)
  // lazerV(15)
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
    textSize(12);
    text("SPACE = block", 210,313);
    text("SHIFT = dash", 210, 325);
    console.log(time);
  }
  for(let i = 0; i < bullets.length; i++){
    let b = bullets[i];
    b.move();
    if (b.alive === false){
      bullets.splice(i,1);
    }
  }
  //------------------------
  //    TIMED CHANGES
  //------------------------
  if(millis()-gameTime >= 100){
    gameTime = millis();
    time += 1;
    if (time === 10){
      bullets.push(new bulletL(15,100));
      bullets.push(new bulletL(16,100));
      bullets.push(new bulletU(15,100));
      bullets.push(new bulletU(16,100));
      bullets.push(new bulletR(15,100));
      bullets.push(new bulletR(16,100));
      bullets.push(new bulletD(16,100));
      bullets.push(new bulletD(15,100));
    }
    if ( time === 40){
      bullets.push(new bulletL(1,100));
      textAlign(CENTER);
    }
    if (time === 42){
      bullets.push(new bulletL(2,100));
    }
    if (time === 44){
      bullets.push(new bulletL(3,100));
    }
    if (time === 46){
      bullets.push(new bulletL(4,100));
    }
    if (time === 48){
      bullets.push(new bulletL(5,100));
    }
    if (time === 50){
      bullets.push(new bulletL(6,100));
    }
    if (time === 52){
      bullets.push(new bulletL(7,100));
    }
    if (time === 54){
      bullets.push(new bulletL(8,100));
    }
    if (time === 56){
      bullets.push(new bulletL(9,100));
    }
    if (time === 58){
      bullets.push(new bulletL(10,100));
    }
    if (time === 60){
      bullets.push(new bulletL(11,100));
    }
    if (time === 62){
      bullets.push(new bulletL(12,100));
    }
    if (time === 64){
      bullets.push(new bulletL(13,100));
    }
    if (time === 66){
      bullets.push(new bulletL(14,100));
    }
    if (time === 68){
      bullets.push(new bulletL(15,100));
    }
    if (time === 70){
      bullets.push(new bulletL(16,100));
    }
    if (time === 72){
      bullets.push(new bulletL(17,100));
    }
    if (time === 74){
      bullets.push(new bulletL(18,100));
    }
    if (time === 76){
      bullets.push(new bulletL(19,100));
    }
    if (time === 78){
      bullets.push(new bulletL(20,100));
    }
    if (time === 80){
      bullets.push(new bulletL(21,100));
    }
    if (time === 82){
      bullets.push(new bulletL(22,100));
    }
    if (time === 84){
      bullets.push(new bulletL(23,100));
    }
    if (time === 86){
      bullets.push(new bulletL(24,100));
    }
    if (time === 88){
      bullets.push(new bulletL(25,100));
    }
    if (time === 106){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletU(i,100));
      }
    }
    if (time === 116){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletU(i,100));
      }
    }
    if (time === 126){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletU(i,100));
      }
    }
    if (time === 160){
      for (let i = 0; i<30; i++){
        bullets.push(new bulletR(i,100));
        bullets.push(new bulletL(i,100));
      }
    }
    if (time === 180){
      lazerH(1);
      lazerH(28);
    }
    if (time === 181){
      lazerH(2);
      lazerH(27);
    }
    if (time === 182){
      lazerH(3);
      lazerH(26);
    }
    if (time === 183){
      lazerH(4);
      lazerH(25);
    }
    if (time === 184){
      lazerH(5);
      lazerH(24);
    }
    if (time === 185){
      lazerH(6);
      lazerH(23);
    }
    if (time === 186){
      lazerH(7);
      lazerH(22);
    }
    if (time === 187){
      lazerH(8);
      lazerH(21);
    }
    if (time === 236){
      for(let i = 0; i < 30; i++){
        mapData[6][i] = 1;
        mapData[7][i] = 1;
        mapData[8][i] = 1;
        mapData[21][i] = 1;
        mapData[22][i] = 1;
        mapData[23][i] = 1;
      }
    }
    if (time === 237){
      for(let i = 0; i < 30; i++){
        mapData[6][i] = 1;
        mapData[7][i] = 1;
        mapData[8][i] = 1;
        mapData[21][i] = 1;
        mapData[22][i] = 1;
        mapData[23][i] = 1;
      }
    }
    if (time === 238){
      for(let i = 0; i < 30; i++){
        mapData[6][i] = 1;
        mapData[7][i] = 1;
        mapData[8][i] = 1;
        mapData[21][i] = 1;
        mapData[22][i] = 1;
        mapData[23][i] = 1;
      }
    }
    if (time === 234){
      for(let i = 0; i < 30; i++){
        mapData[6][i] = 1;
        mapData[7][i] = 1;
        mapData[8][i] = 1;
        mapData[21][i] = 1;
        mapData[22][i] = 1;
        mapData[23][i] = 1;
      }
    }
    if (time === 235){
      for(let i = 0; i < 30; i++){
        mapData[6][i] = 1;
        mapData[7][i] = 1;
        mapData[8][i] = 1;
        mapData[21][i] = 1;
        mapData[22][i] = 1;
        mapData[23][i] = 1;
      }
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletL(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 235 + round(int(random(0,20)))){
      bullets.push(new bulletR(int(random(10,20)),100));
    }
    if (time === 290){
      for (let i = 0; i < 30; i++){
        mapData[6][i] = 0;
        mapData[7][i] = 0;
        mapData[8][i] = 0;
        mapData[21][i] = 0;
        mapData[22][i] = 0;
        mapData[23][i] = 0;
      }
    }
    if (time === 295){
      for (let i = 0; i < 30; i += 4){
        lazerDuration = 2000;
        lazerDelay = 1000;
        lazerV(i);
        lazerV(i + 1);
      }
    }
    if (time === 305){
      for (let z = 0; z < 30; z += 4){
        lazerDuration = 2000;
        lazerDelay = 1000;
        lazerH(z);
        lazerH(z + 1);
      }
    }
    if (time === 315){
      for (let i = 0; i < 30; i += 4){
        lazerDuration = 2000;
        lazerDelay = 1000;
        lazerV(i - 1);
        lazerV(i - 2);
      }
    }
    if (time === 325){
      for (let z = 2; z < 30; z += 4){
        lazerDuration = 2000;
        lazerDelay = 1000;
        lazerH(z);
        lazerH(z +1);
      }
    }
    if (time === 340){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletR(i,150));
      }
    }
    if (time === 347){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletR(i,150));
      }
    }
    if (time === 354){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletR(i,150));
      }
    }
    if (time === 360){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletR(i,150));
      }
    }
    if (time === 367){
      for (let i = 0; i < 30; i++){
        bullets.push(new bulletR(i,150));
      }
    }
    if (time === 376){
      bullets.splice(0,bullets.length);
    }
    if (time === 377){
      for (let i = 0; i < 30; i ++){
        for (let z = 0; z < 30; z ++){
          mapData[z][i] = 0;
        }
      }
    }
    if (time ===377){
      for (let i = 0; i < 30; i++){
        mapData[i][4] = 2;
        mapData[i][9] = 2;
        mapData[i][14] = 2;
        mapData[i][19] = 2;
        mapData[i][24] = 2;
        mapData[i][29] = 2;
      }
    }
    if (time === 382){
      for (let i = 0; i < 30; i++){
        mapData[i][4] = 1;
        mapData[i][9] = 1;
        mapData[i][14] = 1;
        mapData[i][19] = 1;
        mapData[i][24] = 1;
        mapData[i][29] = 1;
      }
    }
    if (time === 387){
      bullets.push(new bulletD(1,100));
      bullets.push(new bulletD(2,100));
      bullets.push(new bulletD(3,100));

      bullets.push(new bulletU(5,100));
      bullets.push(new bulletU(6,100));
      bullets.push(new bulletU(7,100));
      bullets.push(new bulletU(8,100));

      bullets.push(new bulletD(10,100));
      bullets.push(new bulletD(11,100));
      bullets.push(new bulletD(12,100));
      bullets.push(new bulletD(13,100));

      bullets.push(new bulletU(15,100));
      bullets.push(new bulletU(16,100));
      bullets.push(new bulletU(17,100));
      bullets.push(new bulletU(18,100));

      bullets.push(new bulletD(20,100));
      bullets.push(new bulletD(21,100));
      bullets.push(new bulletD(22,100));
      bullets.push(new bulletD(23,100));

      bullets.push(new bulletU(25,100));
      bullets.push(new bulletU(26,100));
      bullets.push(new bulletU(27,100));
      bullets.push(new bulletU(28,100));
    }
    if (time === 388){
      bullets.push(new bulletD(1,100));
      bullets.push(new bulletD(2,100));
      bullets.push(new bulletD(3,100));

      bullets.push(new bulletU(5,100));
      bullets.push(new bulletU(6,100));
      bullets.push(new bulletU(7,100));
      bullets.push(new bulletU(8,100));

      bullets.push(new bulletD(10,100));
      bullets.push(new bulletD(11,100));
      bullets.push(new bulletD(12,100));
      bullets.push(new bulletD(13,100));

      bullets.push(new bulletU(15,100));
      bullets.push(new bulletU(16,100));
      bullets.push(new bulletU(17,100));
      bullets.push(new bulletU(18,100));

      bullets.push(new bulletD(20,100));
      bullets.push(new bulletD(21,100));
      bullets.push(new bulletD(22,100));
      bullets.push(new bulletD(23,100));

      bullets.push(new bulletU(25,100));
      bullets.push(new bulletU(26,100));
      bullets.push(new bulletU(27,100));
      bullets.push(new bulletU(28,100));
    }
    if (time === 389){
      bullets.push(new bulletD(1,100));
      bullets.push(new bulletD(2,100));
      bullets.push(new bulletD(3,100));

      bullets.push(new bulletU(5,100));
      bullets.push(new bulletU(6,100));
      bullets.push(new bulletU(7,100));
      bullets.push(new bulletU(8,100));

      bullets.push(new bulletD(10,100));
      bullets.push(new bulletD(11,100));
      bullets.push(new bulletD(12,100));
      bullets.push(new bulletD(13,100));

      bullets.push(new bulletU(15,100));
      bullets.push(new bulletU(16,100));
      bullets.push(new bulletU(17,100));
      bullets.push(new bulletU(18,100));

      bullets.push(new bulletD(20,100));
      bullets.push(new bulletD(21,100));
      bullets.push(new bulletD(22,100));
      bullets.push(new bulletD(23,100));

      bullets.push(new bulletU(25,100));
      bullets.push(new bulletU(26,100));
      bullets.push(new bulletU(27,100));
      bullets.push(new bulletU(28,100));
    }
    if (time === 395){
      bullets.push(new bulletD(1,100));
      bullets.push(new bulletD(2,100));
      bullets.push(new bulletD(3,100));

      bullets.push(new bulletU(5,100));
      bullets.push(new bulletU(6,100));
      bullets.push(new bulletU(7,100));
      bullets.push(new bulletU(8,100));

      bullets.push(new bulletD(10,100));
      bullets.push(new bulletD(11,100));
      bullets.push(new bulletD(12,100));
      bullets.push(new bulletD(13,100));

      bullets.push(new bulletU(15,100));
      bullets.push(new bulletU(16,100));
      bullets.push(new bulletU(17,100));
      bullets.push(new bulletU(18,100));

      bullets.push(new bulletD(20,100));
      bullets.push(new bulletD(21,100));
      bullets.push(new bulletD(22,100));
      bullets.push(new bulletD(23,100));

      bullets.push(new bulletU(25,100));
      bullets.push(new bulletU(26,100));
      bullets.push(new bulletU(27,100));
      bullets.push(new bulletU(28,100));
    }
    if (time === 425){
      for (let i = 0; i < 30; i++){
        mapData[i][4] = 0;
        mapData[i][9] = 0;
        mapData[i][14] = 0;
        mapData[i][19] = 0;
        mapData[i][24] = 0;
        mapData[i][29] = 0;
      }
    }
    if (time === 460){
      for (let i = 0; i < 30; i++){
        if (i !== 27 && i !== 28 && i !== 1 && i !== 2){
          lazerDelay = 1500;
          lazerDuration = 2000;
          lazerH(i);
        }
      }
    }
    if (time === 480){
      for (let i = 0; i < 30; i++){
        if (i !== 14 && i !== 15){
          lazerDelay = 1500;
          lazerDuration = 2000;
          lazerV(i);
        }
      }
    }
    if (time === 500){
      for (let i = 0; i < 30; i++){
        if (i !== 14 && i !== 15){
          lazerDelay = 1500;
          lazerDuration = 2000;
          lazerV(i);
          lazerH(i);
        }
      }
    }
    if (time === 520){
      for (let i = 0; i < 30; i++){
        if (i !== 5 && i !== 6){
          lazerDelay = 1500;
          lazerDuration = 2000;
          lazerV(i);
          lazerH(i);
        }
      }
    }
    if (time === 540){
      for (let i = 0; i < 30; i++){
        if (i !== 5 && i !== 6){
          lazerV(i);
        }
        if (i !== 22 && i !== 23){
          lazerH(i);
        }
      }
    }
    if (time === 560){
      for (let i = 0; i < 30; i++){
        if (i !== 22 && i !== 23){
          lazerV(i);
        }
        if (i !== 22 && i !== 23){
          lazerH(i);
        }
      }
    }
    if (time === 580){
      for (let i = 0; i < 30; i++){
        if (i !== 22 && i !== 23){
          lazerV(i);
        }
        if (i !== 5 && i !== 6){
          lazerH(i);
        }
      }
    }
    if (time === 600){
      for (let i = 0; i < 30; i++){
        if (i !== 14 && i !== 15){
          lazerDelay = 1500;
          lazerDuration = 2000;
          lazerV(i);
          lazerH(i);
        }
      }
    }
    for (let i = 0; i < 150; i++){
      if (time === 620 + round(int(random(0,50)))){
        bullets.push(new bulletL(int(random(1,29)),100));
      }
    }
    for (let i = 0; i < 150; i++){
      if (time === 680 + round(int(random(0,50)))){
        bullets.push(new bulletD(int(random(1,29)),100));
      }
    }
    for (let i = 0; i < 150; i++){
      if (time === 740 + round(int(random(0,50)))){
        bullets.push(new bulletR(int(random(1,29)),100));
      }
    }
    for (let i = 0; i < 150; i++){
      if (time === 800 + round(int(random(0,50)))){
        bullets.push(new bulletU(int(random(1,29)),100));
      }
    }
    for (let i = 0; i < 200; i++){
      let dir = round(int(random(1,4)));
      if (time === 860 + round(int(random(0,50)))){
        if (dir === 1){
          bullets.push(new bulletR(int(random(1,29)),100));
        }
      }
      if (time === 860 + round(int(random(0,50)))){
        if (dir === 2){
          bullets.push(new bulletD(int(random(1,29)),100));
        }
      }
    }
    for (let i = 0; i < 200; i++){
      let dir = round(int(random(1,4)));
      if (time === 920 + round(int(random(0,50)))){
        if (dir === 1){
          bullets.push(new bulletL(int(random(1,29)),100));
        }
      }
      if (time === 920 + round(int(random(0,50)))){
        if (dir === 2){
          bullets.push(new bulletU(int(random(1,29)),100));
        }
      }
    }
    for (let i = 0; i < 150; i++){
      let dir = round(int(random(1,5)));
      if (time === 1000 + round(int(random(0,50)))){
        if (dir === 1){
          bullets.push(new bulletR(int(random(1,29)),100));
        }
      }
      if (time === 1000 + round(int(random(0,50)))){
        if (dir === 2){
          bullets.push(new bulletD(int(random(1,29)),100));
        }
      }
      if (time === 1000 + round(int(random(0,50)))){
        if (dir === 3){
          bullets.push(new bulletL(int(random(1,29)),100));
        }
      }
      if (time === 1000 + round(int(random(0,50)))){
        if (dir === 2){
          bullets.push(new bulletU(int(random(1,29)),100));
        }
      }
    }
  }

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
    this.alive = true;
    this.edge = 0;
  }
  move(){
    if (millis() - this.bulletTime > this.speed){
      mapData[this.y][this.x] = 3;
      mapData[this.y][this.x - 2] = 2;
      mapData[this.y][this.x - 3] = 0;
      if (this.edge === 0){
        this.x += 1;
      }
      if (this.x === 31 && this.edge === 0){
        this.edge = 1;
      }
      else if (this.edge === 1){
        mapData[this.y][this.x] = 3;
        mapData[this.y][this.x - 1] = 3;
        mapData[this.y][this.x - 2] = 2;
        mapData[this.y][this.x - 3] = 0;
        this.edge = 2;
      }
      else if (this.edge === 2){
        mapData[this.y][this.x] = 3;
        mapData[this.y][this.x - 1] = 2;
        mapData[this.y][this.x - 2] = 1;
      }
      else if (this.edge === 3){
        mapData[this.y][this.x] = 2;
        mapData[this.y][this.x - 1] = 1;
        this.alive = false;
      }
      this.bulletTime = millis();
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
    this. edge = 0;
  }
  move(){
    if (millis() - this.bulletTime > this.speed){
      mapData[this.y][this.x] = 3;
      if (this.x + 2 < mapData.length && this.edge === 0){
        mapData[this.y][this.x + 2] = 2;
      }
      if (this.x + 3 < mapData.length && this.edge === 0){
        mapData[this.y][this.x + 3] = 0;
      }
      if (this.edge === 0){
        this.x -= 1;
      }
      if (this.x === 0 && this.edge === 0){
        this.edge = 1;
      }
      else if (this.edge === 1){
        mapData[this.y][this.x] = 3;
        mapData[this.y][this.x + 1] = 3;
        mapData[this.y][this.x + 2] = 2;
        mapData[this.y][this.x + 3] = 0;
        this.edge = 2; 
      }
      else if (this.edge === 2){
        mapData[this.y][this.x] = 3;
        mapData[this.y][this.x + 1] = 2;
        mapData[this.y][this.x + 2] = 0;
        this.edge = 3;
      }
      else if (this.edge === 3){
        mapData[this.y][this.x] = 2;
        mapData[this.y][this.x + 1] = 0;
        this.alive = false;
      }
      this.bulletTime = millis();
    }
  }
}

class bulletU{
  constructor(x,speed){
    this.x = x;
    this.y = 29;
    this.bulletTime = 0;
    this.speed = speed;
    this.alive = true;
    this.edge = 0;
  }
  move(){
    if (millis() - this.bulletTime > this.speed){
      mapData[this.y][this.x] = 3;
      if (this.y + 2 < mapData.length && this.edge === 0){
        mapData[this.y + 2][this.x] = 2;
      }
      if (this.y + 3 < mapData.length && this.edge === 0){
        mapData[this.y + 3][this.x] = 0;
      }
      if (this.edge === 0){
        this.y -= 1;
      }
      if (this.y === 0 && this.edge === 0){
        this.edge = 1;  
      }
      else if (this.edge === 1){
        mapData[this.y][this.x] = 3;
        mapData[this.y + 1][this.x] = 3;
        mapData[this.y +2][this.x] = 2;
        mapData[this.y + 3][this.x] = 0;
        this.edge = 2;
      }
      else if (this.edge === 2){
        mapData[this.y][this.x] = 3;
        mapData[this.y + 1][this.x] = 2;
        mapData[this.y + 2][this.x] = 0;
        this.edge = 3;
      }
      else if (this.edge === 3){
        mapData[this.y][this.x] = 2;
        mapData[this.y + 1][this.x] = 0;
        this.alive = false;
      }
      this.bulletTime = millis();
    }
  }
}

class bulletD{
  constructor(x,speed){
    this.x = x;
    this.y = 0;
    this.bulletTime = 0;
    this.speed = speed;
    this.alive = true;
    this.edge = 0;
  }
  move(){
    if (millis() - this.bulletTime > this.speed){
      mapData[this.y][this.x] = 3;
      if (this.y >= 2 && this.edge === 0){mapData[this.y - 2][this.x] = 2;
      }
      if (this.y >= 3 && this.edge === 0){mapData[this.y - 3][this.x] = 0;
      }
      if (this.edge === 0){
        this.y += 1;
      }
      if (this.y === 30 && this.edge === 0){
        this.edge = 1;
      }
      else if (this.edge === 1){
        mapData[this.y][this.x] = 3;
        mapData[this.y - 1][this.x] = 3;
        mapData[this.y - 2][this.x] = 2;
        mapData[this.y - 3][this.x] = 0;
        this.edge = 2;
      }
      else if (this.edge === 2){
        mapData[this.y][this.x] = 3;
        mapData[this.y - 1][this.x] = 2;
        mapData[this.y - 2][this.x] = 0;
        this.edge = 3;
      }
      else if (this.edge === 3){
        mapData[this.y][this.x] = 2;
        mapData[this.y - 1][this.x] = 0;
        this.alive = false;
      }
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


