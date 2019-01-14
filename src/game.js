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
  constructor({ screen, wall, paddle, ball }) {
    this.screen = screen;
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;

    this.obstacles = [this.wall, this.paddle];
  }

  getNewVelocity() {
    let collidalDetails = {
      position: this.ball.position,
      width: this.ball.diameter,
      velocity: this.ball.velocity
    };

    let collidingResults = this.obstacles.map(obstacle =>
      obstacle.detectCollision(collidalDetails)
    );

    let newVelocity = collidingResults.filter(result => result.hasCollided);
    return newVelocity.pop();
  }

  moveBall() {
    this.ball.move();
    let newVelocity = this.getNewVelocity();
    if (newVelocity) {
      this.ball.changeVelocity(newVelocity);
    }
  }
}
