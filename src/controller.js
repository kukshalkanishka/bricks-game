const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

const addPixelSuffix = element => element + 'px';

const getScreen = document => document.getElementById('screen_1');

const handleMovement = function(document, game) {
  if (event.key == ARROW_LEFT) game.paddle.moveLeft();
  if (event.key == ARROW_RIGHT) game.paddle.moveRight();

  drawPaddle(document, game.paddle);
};

const moveBall = function(document, game) {
  setInterval(function() {
    game.moveBall();
    drawBall(document, game.ball);
  }, 50);
};

const setEventListners = function(document, game) {
  const screen = getScreen(document);
  screen.focus();
  screen.onkeydown = handleMovement.bind(null, document, game);
  screen.onclick = moveBall.bind(null, document, game);
};

const initialiseGame = function() {
  const wall = new Wall(680, 960);
  const paddle = new Paddle(150, 20, 430, 650);
  const velocity = new Velocity(-5, -5);
  const ballPosition = new Position(490, 620);
  const ball = new Ball(30, ballPosition, velocity);
  const game = new Game({
    wall,
    paddle,
    ball
  });

  createWall(document, wall);
  createPaddleDiv(document, paddle);
  createBall(document, ball);

  setEventListners(document, game, paddle, ball);
};

window.onload = initialiseGame;
