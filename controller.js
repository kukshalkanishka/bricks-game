const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

const addPixelSuffix = function(element) {
  return element + 'px';
};

const drawPaddle = function(document, paddle) {
  const paddleDiv = document.getElementById('paddle_1');
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
};

const getScreen = document => document.getElementById('screen');

const createPaddle = function(document, paddle) {
  const screen = getScreen(document);
  const paddleDiv = document.createElement('div');
  paddleDiv.id = 'paddle_1';
  paddleDiv.className = 'paddle';
  screen.appendChild(paddleDiv);
  drawPaddle(document, paddle);
};

const handleMovement = function(document, paddle) {
  if (event.key == ARROW_LEFT) {
    paddle.moveLeft();
  }
  if (event.key == ARROW_RIGHT) {
    paddle.moveRight();
  }
  drawPaddle(document, paddle);
};

const initialiseGame = function() {
  const paddle = new Paddle(100, 20, 430, 10);
  createPaddle(document, paddle);
  const screen = getScreen(document);
  screen.focus();
  screen.onkeydown = handleMovement.bind(null, document, paddle);
};

window.onload = initialiseGame;
