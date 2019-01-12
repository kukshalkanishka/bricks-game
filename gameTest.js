describe('paddle', () => {
  describe('moveLeft', () => {
    const paddle = new Paddle(20, 30, 40, 5);
    it('should decrement the paddle left position by 10', () => {
      paddle.moveLeft();
      chai.assert.equal(30, paddle.left);
    });
  });
  describe('moveRight', () => {
    const paddle = new Paddle(20, 30, 40, 5);
    it('should increament the paddle left position by 10', () => {
      paddle.moveRight();
      chai.assert.equal(50, paddle.left);
    });
  });
});

describe('ball', () => {
  describe('moveLeft', () => {
    const ball = new Ball(20, 30, 40, 30);
    it('should decrement the ball left position by 10', () => {
      ball.moveLeft();
      chai.assert.equal(30, ball.left);
    });
  });

  describe('moveRight', () => {
    const ball = new Ball(20, 30, 40, 30);

    it('should increament the ball left position by 10', () => {
      ball.moveRight();
      chai.assert.equal(50, ball.left);
    });
  });

  describe('moveUp', () => {
    const ball = new Ball(20, 30, 40, 30);

    it('should decrement the ball top position by 10', () => {
      ball.moveUp();
      chai.assert.equal(20, ball.top);
    });
  });

  describe('moveRight', () => {
    const ball = new Ball(20, 30, 40, 30);

    it('should increament the ball top position by 10', () => {
      ball.moveDown();
      chai.assert.equal(40, ball.top);
    });
  });
});
