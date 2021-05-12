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
