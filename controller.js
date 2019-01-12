const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

const addPixelSuffix = function(element) {
  return element + 'px';
};

const getScreen = document => document.getElementById('screen_1');

const handleMovement = function(document, paddle) {
  if (event.key == ARROW_LEFT) paddle.moveLeft();
  if (event.key == ARROW_RIGHT) paddle.moveRight();

  drawPaddle(document, paddle);
};

const setEventListners = function(document, paddle) {
  const screen = getScreen(document);
  screen.focus();
  screen.onkeydown = handleMovement.bind(null, document, paddle);
};

const moveBallDown = function(document, ball) {
  ball.moveDown();
  drawBall(document, ball);
};

const initialiseGame = function() {
  const paddle = new Paddle(150, 20, 430, 10);
  const ball = new Ball(30, 0, 0);
  const screen = new Screen(960, 680);
  const game = new Game(paddle, ball, screen);

  createScreen(document, screen);
  createPaddleDiv(document, paddle);
  createBall(document, ball);
  setInterval(moveBallDown.bind(null, document, ball), 100);
  setEventListners(document, paddle);
};

window.onload = initialiseGame;
