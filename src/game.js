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
  detectCollision(colliderBounds) {
    if (colliderBounds.Y <= this.bottom + this.height) {
      return { hasCollided: true, X: 1, Y: -1 };
    }
    return { hasCollided: false, X: 1, Y: 1 };
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
  constructor(diameter, ballPosition, velocity) {
    this.diameter = diameter;
    this.position = ballPosition;
    this.velocity = velocity;
  }
  move() {
    this.position.X += this.velocity.X;
    this.position.Y += this.velocity.Y;
  }

  changeVelocity(velocityMultiplier) {
    this.velocity.X *= velocityMultiplier.X;
    this.velocity.Y *= velocityMultiplier.Y;
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

  detectCollision(colliderBounds, colliderWidth) {
    if (colliderBounds.Y >= this.bottomPosition - colliderWidth) {
      return { hasCollided: true, X: 1, Y: -1 };
    }

    if (colliderBounds.Y <= this.topPosition) {
      return { hasCollided: true, X: 1, Y: -1 };
    }

    if (colliderBounds.X <= this.rightPosition) {
      return { hasCollided: true, X: -1, Y: 1 };
    }

    if (colliderBounds.X >= this.leftPosition - colliderWidth) {
      return { hasCollided: true, X: -1, Y: 1 };
    }
    return { hasCollided: false, X: 1, Y: 1 };
  }
}

class Game {
  constructor(screen, wall, paddle, ball) {
    this.screen = screen;
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
  }

  detectCollisions() {
    const obstacles = [this.wall, this.paddle];

    let collidingResults = obstacles.map(obstacle =>
      obstacle.detectCollision(this.ball.position, this.ball.diameter)
    );

    let velocityMultiplier = collidingResults.filter(
      multiplier => multiplier.hasCollided
    );

    if (!velocityMultiplier.length) velocityMultiplier = [{ X: 1, Y: 1 }];
    return velocityMultiplier[0];
  }

  moveBall() {
    this.ball.move();
    let velocityMultiplier = this.detectCollisions();
    this.ball.changeVelocity(velocityMultiplier);
  }
}
