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

const initialiseGame = function() {
  const paddle = new Paddle(150, 20, 430, 10);
  const screen = new Screen(960, 680);
  const velocity = new Velocity(5, 5);
  const ballPosition = new BallPosition(30, 0);
  const ball = new Ball(30, ballPosition, velocity);
  const game = new Game(screen, paddle, ball);

  createScreen(document, screen);
  createPaddleDiv(document, paddle);
  createBall(document, ball);
  setInterval(function() {
    game.moveBall();
    drawBall(document, ball);
  }, 50);
  setEventListners(document, paddle);
};

window.onload = initialiseGame;
