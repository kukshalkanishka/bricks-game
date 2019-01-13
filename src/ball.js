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
