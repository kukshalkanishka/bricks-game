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

class Ball {
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
  moveUp() {
    this.top = this.top - this.speed;
  }
  moveDown() {
    this.top = this.top + this.speed;
  }
}

class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
