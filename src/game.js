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
  constructor(screen, wall, paddle, ball) {
    this.screen = screen;
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
    this.obstacles = [this.wall, this.paddle];
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
