// User Events
// Devin Hubbard
// September 12, 2024
//
// Interaction With User inputs

let tSize=40
let X = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(220);

  //mosue section
  if(mouseIsPressed) tSize = random(20,80)
  print(mouseX, mouseY);
  textSize(tSize)
  text((mouseX + ', ' + mouseY),mouseX,mouseY);

  //shapes
  fill(255,0,0)
  circle(width/2,height/2,100)

  
  fill(0,255,0)

  X = X + 10 
  if (X > width) X = 0
  rect(X, height/2, 60)
}

