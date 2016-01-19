describe('cryptoSquare', function() {
  it("is true when there is input", function() {
    expect(cryptoSquare(sentenceBefore)).to.equal(true);
  });

  it("is true if there is no punctuation in the string", function() {
    expect(cryptoSquare(sentenceBefore)).to.equal(true);
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
