describe('zeroBottlesSong', function() {
  it("returns 'no more' instead of bottle count", function() {
    expect(zeroBottlesSong()).to.contain("No more");
  });
});
