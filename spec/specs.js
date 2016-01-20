describe('cryptoSquare', function() {
  it("is true when there is input", function() {
    expect(cryptoSquare(sentenceBefore)).to.equal(true);
  });

  it("is true if there is no punctuation or spaces in the string", function() {
    expect(cryptoSquare(sentenceBefore)).to.equal(true);
  });

  it("is false if characters are not counted accurately", function() {
    expect(cryptoSquare(sentenceDuring)).to.equal(false);
  });
});

























// describe('cryptoSquare', function() {
//   it("is true when there is input", function() {
//     expect(cryptoSquare(NaN)).to.equal(true);
//   });
//
//   it("is true when the code will eliminate spaces", function() {
//     expect(cryptoSquare(NaN)).to.equal(true);
//   });
//
// });
