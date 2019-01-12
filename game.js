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

class Wall {
  constructor(rightPosition, leftPosition, topPosition, bottomPosition) {
    this.rightPosition = rightPosition;
    this.leftPosition = leftPosition;
    this.topPosition = topPosition;
    this.bottomPosition = bottomPosition;
  }
}

class Game {
  constructor(screen, wall, paddle, ball) {
    this.screen = screen;
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
  }

  checkCollisionOfBallAndWall() {
    const ballDiameter = this.ball.radius * 2;
    if (this.ball.position.Y >= this.wall.bottomPosition - ballDiameter) {
      this.ball.changeVelocity(this.ball.velocity.X, -this.ball.velocity.Y);
    }

    if (this.ball.position.Y <= this.wall.topPosition) {
      this.ball.changeVelocity(
        this.ball.velocity.X,
        Math.abs(this.ball.velocity.Y)
      );
    }

    if (this.ball.position.X <= this.wall.rightPosition) {
      this.ball.changeVelocity(
        Math.abs(this.ball.velocity.X),
        this.ball.velocity.Y
      );
    }

    if (this.ball.position.X >= this.wall.leftPosition - ballDiameter) {
      this.ball.changeVelocity(-this.ball.velocity.X, this.ball.velocity.Y);
    }
  }

  moveBall() {
    this.ball.move();
    this.checkCollisionOfBallAndWall();
  }
}
