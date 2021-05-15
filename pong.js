const canvas = document.getElementById('canvas');
const netWidth = 4;
const netHeight = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;

let upArrowPressed = false;
let downArrowPressed = false;
const ctx = canvas.getContext('2d');


function render() {
  // set a style
  ctx.fillStyle = "#FF0"; //Farbe
  // draws the black board
  ctx.fillRect(0, 0, canvas.width, canvas.height); //fülle es so groß wie es sein soll
}

render();


//Objekte erstellen


const user = {
  x: 10,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: '#05EDFF',
  score: 0
};

const ai = {
  x: canvas.width - (paddleWidth + 10),
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: '#FFF',
  score: 0
};


const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 7,
  speed: 7,
  velocityX: 5,
  velocityY: 5,
  color: '#05EDFF'
};

function drawPaddle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}



function drawBall(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}


window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

function keyDownHandler(event) {
  // get the keyCode
  switch (event.keyCode) {
    // "up arrow" key
    case 38:
      // set upArrowPressed = true
      upArrowPressed = true;
      break;
    // "down arrow" key
    case 40:
      downArrowPressed = true;
      break;
  }
}

// gets activated when we release the key
function keyUpHandler(event) {
  switch (event.keyCode) {
    // "up arraow" key
    case 38:
      upArrowPressed = false;
      break;
    // "down arrow" key
    case 40:
      downArrowPressed = false;
      break;
  }
}


function updateBall() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

//logik das sich das Paddle bewegt
  if (upArrowPressed && user.y > 0) {
    user.y -= 8;
  } else if (downArrowPressed && (user.y < canvas.height - user.height)) {
    user.y += 8;
  }

  //Logik das der Ball oben wieder abdotzt
  if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {


  ball.velocityY = -ball.velocityY;
}


//rechts Wand
if (ball.x + ball.radius >= canvas.width) {
 }

 if (ball.x - ball.radius <= 0) {
  }


}

function gameLoop() {
  drawBall(ball.x, ball.y, ball.radius, ball.color);
  drawPaddle(user.x, user.y, user.width, user.height, user.color);

  updateBall();
}

setInterval(gameLoop, 100 / 60);
