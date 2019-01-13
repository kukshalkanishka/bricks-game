class Velocity {
  constructor(velocityX, velocityY) {
    this.X = velocityX;
    this.Y = velocityY;
  }
}

class Position {
  constructor(positionX, positionY) {
    this.X = positionX;
    this.Y = positionY;
  }
}

class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Game {
  constructor({
    screen,
    rightWall,
    leftWall,
    topWall,
    bottomWall,
    paddle,
    ball
  }) {
    this.screen = screen;
    this.rightWall = rightWall;
    this.leftWall = leftWall;
    this.topWall = topWall;
    this.bottomWall = bottomWall;
    this.paddle = paddle;
    this.ball = ball;

    this.obstacles = [
      this.rightWall,
      this.leftWall,
      this.topWall,
      this.bottomWall,
      this.paddle
    ];
  }

  detectCollisions() {
    let collidingResults = this.obstacles.map(obstacle =>
      obstacle.detectCollision(this.ball.position, this.ball.diameter)
    );

    let colliderDirection = collidingResults.filter(
      result => result.hasCollided
    );

    if (!colliderDirection.length) colliderDirection = [{ X: 1, Y: 1 }];
    return colliderDirection.pop();
  }

  moveBall() {
    this.ball.move();
    let ballDirection = this.detectCollisions();
    this.ball.changeVelocity(ballDirection);
  }
}
