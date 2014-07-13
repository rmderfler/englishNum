
describe("englishNumber", function() {
  it("translates numbers to english", function() {
    englishNumber(100).should.equal("one hundred");
  });
  it("translates hundreds to english", function() {
    hundreds(100).should.equal("one hundred ");
});
  it("translates ones to english", function() {
    ones(2).should.equal("two");
});
  it("translates tens to english", function() {
    tens(21).should.equal("twenty one");
});
  it("translates hundreds, tens, ones to english", function() {
    hundreds(121).should.equal("one hundred twenty one");
});
});

