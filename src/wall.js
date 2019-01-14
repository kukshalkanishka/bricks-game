class Wall {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.rightWallPosition = 0;
    this.leftWallPosition = this.width;
    this.topWallPosition = 0;
    this.bottomWallPosition = this.height;
  }

  changeVelocity(colliderVelocity, velocityComponent) {
    this.velocity = new Velocity(colliderVelocity.X, colliderVelocity.Y);
    this.velocity.negate(velocityComponent);
    return this.velocity.getVelocity();
  }

  hasCollidedWithHorizontal(colliderDetails) {
    return (
      colliderDetails.position.X >=
        this.leftWallPosition - colliderDetails.width ||
      colliderDetails.position.X <= this.rightWallPosition
    );
  }

  hasCollidedWithVertical(colliderDetails) {
    return (
      colliderDetails.position.Y >=
        this.bottomWallPosition - colliderDetails.width ||
      colliderDetails.position.Y <= this.topWallPosition
    );
  }

  detectCollision(colliderDetails) {
    if (this.hasCollidedWithVertical(colliderDetails)) {
      let newVelocity = this.changeVelocity(colliderDetails.velocity, 'Y');
      return { hasCollided: true, velocity: newVelocity };
    }

    if (this.hasCollidedWithHorizontal(colliderDetails)) {
      let newVelocity = this.changeVelocity(colliderDetails.velocity, 'X');
      return { hasCollided: true, velocity: newVelocity };
    }
    return { hasCollided: false, velocity: colliderDetails.velocity };
  }
}
