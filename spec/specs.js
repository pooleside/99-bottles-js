describe('zeroBottlesSong', function() {
  it("returns 'no more' instead of bottle count", function() {
    expect(zeroBottlesSong()).to.contain("No more");
  });
});

describe('oneBottleSong', function() {
  it("returns the singular 'bottle' ", function() {
    expect(oneBottleSong(1)).to.contain("1 bottle");
  });
});

describe('twoBottlesSong', function() {
  it("returns 1 bottle in the final line ", function() {
    expect(twoBottlesSong(2)).to.contain("1 bottle");
  });
});

describe('mainBottlesSong', function() {
  it("returns the full song, decreasing bottle count by one ", function() {
    expect(mainBottlesSong(10)).to.contain("9 bottles");
  });
});
