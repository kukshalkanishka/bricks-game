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

  hasTopMatched(colliderBounds) {
    return colliderBounds.Y <= this.bottom + this.height;
  }

  hasWidthMatched(colliderBounds) {
    return (
      colliderBounds.X >= this.left &&
      colliderBounds.X <= this.left + this.width
    );
  }

  hasCollided(colliderBounds) {
    return (
      this.hasTopMatched(colliderBounds) && this.hasWidthMatched(colliderBounds)
    );
  }

  detectCollision(colliderBounds) {
    if (this.hasCollided(colliderBounds)) {
      return { hasCollided: true, X: 1, Y: -1 };
    }
    return { hasCollided: false, X: 1, Y: 1 };
  }
}
