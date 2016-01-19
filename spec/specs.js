describe('cryptoSquare', function() {
  it("is true when there is input", function() {
    expect(cryptoSquare(NaN)).to.equal(true);
  });

  it("is true when the code will eliminate spaces", function() {
    expect(cryptoSquare(NaN)).to.equal(true);
  });

  it("is false when letters are returned as uppercase", function() {
    expect(cryptoSquare(NaN)).to.equal(true);
  });
});
