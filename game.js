const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 600;
const canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const ball = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  radius: 15,
  speed: 3,
  velX: 0,
  velY: 0,
};

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
}

function update() {
  ball.x += ball.velX;
  ball.y += ball.velY;

  if (ball.x + ball.radius > canvasWidth) {
    ball.velX = -ball.speed;
  } else if (ball.x - ball.radius < 0) {
    ball.velX = ball.speed;
  }

  if (ball.y + ball.radius > canvasHeight) {
    ball.velY = -ball.speed;
  } else if (ball.y - ball.radius < 0) {
    ball.velY = ball.speed;
  }

  drawCircle(ball.x, ball.y, ball.radius, 'black');
}

function keyDown(e) {
  if (e.key === 'ArrowUp') {
    ball.velY = -ball.speed;
  } else if (e.key === 'ArrowDown') {
    ball.velY = ball.speed;
  } else if (e.key === 'ArrowLeft') {
    ball.velX = -ball.speed;
  } else if (e.key === 'ArrowRight') {
    ball.velX = ball.speed;
  }
}

function keyUp(e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    ball.velY = 0;
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    ball.velX = 0;
  }
}

function main() {
  update();
  requestAnimationFrame(main);
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
main();
