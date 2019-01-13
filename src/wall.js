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
