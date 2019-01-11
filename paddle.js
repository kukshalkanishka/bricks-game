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
}
