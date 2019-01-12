class Paddle {
  constructor(width, height, left, bottom, speed = 10) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }
  moveLeft() {
    this.left = this.left - this.speed;
  }
  moveRight() {
    this.left = this.left + this.speed;
  }
}

class Velocity {
  constructor(velocityX, velocityY) {
    this.X = velocityX;
    this.Y = velocityY;
  }
}

class BallPosition {
  constructor(positionX, positionY) {
    this.X = positionX;
    this.Y = positionY;
  }
}

class Ball {
  constructor(radius, ballPosition, velocity) {
    this.radius = radius;
    this.position = ballPosition;
    this.velocity = velocity;
  }
  move() {
    this.position.X += this.velocity.X;
    this.position.Y += this.velocity.Y;
  }

  changeVelocity(X, Y) {
    this.velocity.X = X;
    this.velocity.Y = Y;
  }
}

class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Game {
  constructor(screen, paddle, ball) {
    this.screen = screen;
    this.paddle = paddle;
    this.ball = ball;
  }
  moveBall() {
    this.ball.move();
    if (this.ball.position.Y > 670) {
      this.ball.changeVelocity(-5, -5);
    }
  }
}
