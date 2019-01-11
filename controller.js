const addPixelSuffix = function(element) {
  return element + 'px';
};

const drawPaddle = function(paddle, paddleDiv) {
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
};

const createPaddle = function(paddle) {
  const screen = document.getElementById('screen');
  const paddleDiv = document.createElement('div');
  paddleDiv.id = 'paddle_1';
  paddleDiv.className = 'paddle';
  screen.appendChild(paddleDiv);
  drawPaddle(paddle, paddleDiv);
};

const initialiseGame = function() {
  const paddle = new Paddle(100, 20, 430, 10);
  createPaddle(paddle);
};

window.onload = initialiseGame;
