class RightWall {
  constructor(height, width, position) {
    this.height = height;
    this.width = width;
    this.position = position;
  }
  detectCollision(colliderBounds) {
    if (colliderBounds.X <= this.position) {
      return { hasCollided: true, X: -1, Y: 1 };
    }
    return { hasCollided: false, X: 1, Y: 1 };
  }
}

class LeftWall {
  constructor(height, width, position) {
    this.height = height;
    this.width = width;
    this.position = position;
  }
  detectCollision(colliderBounds, colliderWidth) {
    if (colliderBounds.X >= this.position - colliderWidth) {
      return { hasCollided: true, X: -1, Y: 1 };
    }
    return { hasCollided: false, X: 1, Y: 1 };
  }
}

class TopWall {
  constructor(height, width, position) {
    this.height = height;
    this.width = width;
    this.position = position;
  }
  detectCollision(colliderBounds) {
    if (colliderBounds.Y <= this.position) {
      return { hasCollided: true, X: 1, Y: -1 };
    }
    return { hasCollided: false, X: 1, Y: 1 };
  }
}

class BottomWall {
  constructor(height, width, position) {
    this.height = height;
    this.width = width;
    this.position = position;
  }
  detectCollision(colliderBounds, colliderWidth) {
    if (colliderBounds.Y >= this.position - colliderWidth) {
      return { hasCollided: true, X: 1, Y: -1 };
    }
    return { hasCollided: false, X: 1, Y: 1 };
  }
}
