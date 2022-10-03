let x, y;
let px, py;
let step = 1;
let stepSize = 5;
let numSteps = 1;
let state = 0;
let turncounter = 0;
let totalSteps;

//function to generate all prime numbers upto canvas width * canvas height
function isPrime(value) {
  if(value == 1) return false;
  for (let i = 2; i <= sqrt(value); i++){
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

//Calcuate column and row size based on stepSize

function setup() {
  createCanvas(innerWidth,innerHeight);
  textFont('Courier')

  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;

  background(0);
}
  

function draw() {

  // textSize(stepSize);
  // textAlign(CENTER, CENTER)
  // text(step, x, y);
  fill(127)
  stroke(255);
  // rectMode(CENTER)
  if (isPrime(step)) {
    circle(x, y, stepSize * 0.25)
  } 
  
  //line(x, y, px, py);
  px = x;
  py = y;
  
  //Changing x and y direction 
  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3: 
      y += stepSize;
      break;
  }


 
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turncounter++;
    if (turncounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;
//Stop generating prime numbers and drawing on canvas when the canvas ends
  if (step > totalSteps) {
    noLoop();
  }
}
