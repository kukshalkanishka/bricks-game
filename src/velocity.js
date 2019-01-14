class Velocity {
  constructor(velocityX, velocityY) {
    this.X = velocityX;
    this.Y = velocityY;
  }
  negate(direction) {
    this[direction] = this[direction] * -1;
  }
  getVelocity() {
    return { X: this.X, Y: this.Y };
  }
}
