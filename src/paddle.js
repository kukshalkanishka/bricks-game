class Paddle {
  constructor(width, height, left, top, speed = 10) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.speed = speed;
  }
  moveLeft() {
    this.left = this.left - this.speed;
  }
  moveRight() {
    this.left = this.left + this.speed;
  }

  hasTopMatched(colliderBounds, colliderHeight) {
    return colliderBounds.Y >= this.top - colliderHeight;
  }

  hasWidthMatched(colliderBounds) {
    return (
      colliderBounds.X >= this.left &&
      colliderBounds.X <= this.left + this.width
    );
  }

  hasCollided(colliderDetails) {
    return (
      this.hasTopMatched(colliderDetails.position, colliderDetails.width) &&
      this.hasWidthMatched(colliderDetails.position)
    );
  }

  getNewVelocity(colliderVelocity) {
    let velocity = new Velocity(colliderVelocity.X, colliderVelocity.Y);
    velocity.negate('Y');
    return velocity.getVelocity();
  }

  detectCollision(colliderDetails) {
    if (this.hasCollided(colliderDetails)) {
      let newVelocity = this.getNewVelocity(colliderDetails.velocity);
      return { hasCollided: true, velocity: newVelocity };
    }
    return { hasCollided: false, velocity: colliderDetails.velocity };
  }
}
