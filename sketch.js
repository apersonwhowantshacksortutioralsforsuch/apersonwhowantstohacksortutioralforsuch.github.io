let ball;
let gravity;
let ballSpeedVert;
let ballSize;
let ballColor;

function setup() {
  createCanvas(500, 500);
  ballX = width / 4;
  ballY = height / 5;
  ballSize = 20;
  ballColor = color(0);
  gravity = 1;
  ballSpeedVert = 0;
}

function draw() {
  background(255);
  applyGravity();
  keepInScreen();
  drawBall();
}

function drawBall() {
  fill(ballColor);
  ellipse(ballX, ballY, ballSize, ballSize);
}

function applyGravity() {
  ballSpeedVert += gravity;
  ballY += ballSpeedVert;
}

function makeBounceBottom(surface) {
  ballY = surface - (ballSize / 2);
  ballSpeedVert *= -1;
}

function makeBounceTop(surface) {
  ballY = surface + (ballSize / 2);
  ballSpeedVert *= -1;
}

function keepInScreen() {
  if (ballY + (ballSize / 2) > height) {
    makeBounceBottom(height);
  }
  if (ballY - (ballSize / 2) < 0) {
    makeBounceTop(0);
  }
}

function mousePressed() {
  if (mouseY > ballY - ballSize / 2 && mouseY < ballY + ballSize / 2) {
    ballColor = color(random(255), random(255), random(255));
  }
}