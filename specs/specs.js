
describe("englishNumber", function() {
  it("translates numbers to english", function() {
    englishNumber(100).should.equal("one hundred ");
  });
  it("translates hundreds to english", function() {
    hundreds(100).should.equal("one hundred ");
});
  it("translates ones to english", function() {
    ones(7).should.equal("seven");
});
  it("translates tens to english", function() {
    tens(21).should.equal("twenty one");
});
  it("translates hundreds, tens, ones to english", function() {
    hundreds(121).should.equal("one hundred twenty one");
});
  it("translates teens to english", function() {
    teens(19).should.equal("nineteen");
});
  it("translates hundred and teens to english", function() {
    hundreds(119).should.equal("one hundred nineteen");
});it("translates hundreds, tens, ones to english", function() {
    hundreds(786).should.equal("seven hundred eighty six");
});
it("translates 999 to english", function() {
    englishNumber(999).should.equal("nine hundred ninety nine");
  });
it("translates 515 to english", function() {
    englishNumber(515).should.equal("five hundred fifteen");
  });
// it("does not work over 999", function() {
//     englishNumber(1000).should.equal("try again");
//   });
it("only works on numbers", function() {
    englishNumber('n').should.equal("try again");
  });
it("works on ones", function() {
    englishNumber(2).should.equal("two");
  });
it("works on ten", function() {
    englishNumber(10).should.equal("ten");
  });
it("translates ten to english", function() {
    tens(10).should.equal("ten");
});
it("Works on thousands: translates 5715 to english", function() {
    englishNumber(5715).should.equal("five thousand seven hundred fifteen");
  });
it("Works on thousands: translates 1015 to english", function() {
    englishNumber(1015).should.equal("one thousand fifteen");
  });

});

