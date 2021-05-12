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

//eigenschaften des objektes an die Funktion übergeben
 drawBall(ball.x, ball.y, ball.radius, ball.color);
 drawPaddle(user.x, user.y, user.width, user.height, user.color);
