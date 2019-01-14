class Wall {
  constructor(rightPosition, leftPosition, topPosition, bottomPosition) {
    this.rightPosition = rightPosition;
    this.leftPosition = leftPosition;
    this.topPosition = topPosition;
    this.bottomPosition = bottomPosition;
  }

  changeVelocity(colliderVelocity, velocityComponent) {
    this.velocity = new Velocity(colliderVelocity.X, colliderVelocity.Y);
    this.velocity.negate(velocityComponent);
    return this.velocity.getVelocity();
  }

  hasCollidedWithHorizontal(colliderDetails) {
    return (
      colliderDetails.position.X >= this.leftPosition - colliderDetails.width ||
      colliderDetails.position.X <= this.rightPosition
    );
  }

  hasCollidedWithVertical(colliderDetails) {
    return (
      colliderDetails.position.Y >=
        this.bottomPosition - colliderDetails.width ||
      colliderDetails.position.Y <= this.topPosition
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
