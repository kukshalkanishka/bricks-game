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

  detectCollisions() {
    const collidalDetails = {
      position: this.ball.position,
      width: this.ball.diameter,
      velocity: this.ball.velocity
    };

    let collidingResults = this.obstacles.map(obstacle =>
      obstacle.detectCollision(collidalDetails)
    );

    let newVelocity = collidingResults.filter(result => result.hasCollided);

    if (!newVelocity.length)
      newVelocity = [
        {
          velocity: {
            X: collidalDetails.velocity.X,
            Y: collidalDetails.velocity.Y
          }
        }
      ];
    return newVelocity.pop();
  }

  moveBall() {
    this.ball.move();
    let newVelocity = this.detectCollisions();
    this.ball.changeVelocity(newVelocity);
  }
}
