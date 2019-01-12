const getMain = document => document.getElementById('main');

const drawPaddle = function(document, paddle) {
  const paddleDiv = document.getElementById('paddle_1');
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
};

const createPaddleDiv = function(document, paddle) {
  const screen = getScreen(document);
  const paddleDiv = document.createElement('div');
  paddleDiv.id = 'paddle_1';
  paddleDiv.className = 'paddle';
  screen.appendChild(paddleDiv);
  drawPaddle(document, paddle);
};

const drawBall = function(document, ball) {
  const ballDiv = document.getElementById('ball_1');
  ballDiv.style.left = addPixelSuffix(ball.left);
  ballDiv.style.top = addPixelSuffix(ball.top);
  ballDiv.style.width = addPixelSuffix(ball.width);
  ballDiv.style.height = addPixelSuffix(ball.height);
};

const createBall = function(document, ball) {
  const screen = getScreen(document);
  const ballDiv = document.createElement('div');
  ballDiv.id = 'ball_1';
  ballDiv.className = 'ball';
  screen.appendChild(ballDiv);
  drawBall(document, ball);
};

const drawScreen = function(document, screen) {
  const screenDiv = document.getElementById('screen_1');
  screenDiv.style.width = addPixelSuffix(screen.width);
  screenDiv.style.height = addPixelSuffix(screen.height);
};

const createScreen = function(document, screen) {
  const main = getMain(document);
  const screenDiv = document.createElement('div');
  screenDiv.id = 'screen_1';
  screenDiv.className = 'screen';
  screenDiv.tabIndex = '0';
  main.appendChild(screenDiv);
  drawScreen(document, screen);
};
