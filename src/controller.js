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

const startGame = function(document, game, ball) {
  setInterval(function() {
    game.moveBall();
    drawBall(document, ball);
  }, 50);
};

const setEventListners = function(document, game, paddle, ball) {
  const screen = getScreen(document);
  screen.focus();
  screen.onkeydown = handleMovement.bind(null, document, paddle);
  screen.onclick = startGame.bind(null, document, game, ball);
};

const initialiseGame = function() {
  const screen = new Screen(960, 680);
  const wall = new Wall(0, 960, 0, 680);
  const paddle = new Paddle(150, 20, 430, 10);
  const velocity = new Velocity(5, 5);
  const ballPosition = new BallPosition(490, 30);
  const ball = new Ball(30, ballPosition, velocity);
  const game = new Game(screen, wall, paddle, ball);

  createScreen(document, screen);
  createPaddleDiv(document, paddle);
  createBall(document, ball);

  setEventListners(document, game, paddle, ball);
};

window.onload = initialiseGame;
