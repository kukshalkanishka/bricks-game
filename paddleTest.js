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
