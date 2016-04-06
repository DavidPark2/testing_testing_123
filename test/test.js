var chai = require('chai'); // requires the chai bdd(behavior driven development) library
var expect = chai.expect;   // require the expect chai library
var db = db || {};          // mock database object
// ^^^ this is namespace

// describe a set of tests
describe('How BDD testing should work for newbies', function() {
  // callbacks contain tests
  // CTT - callbacks contain tests
  it('should have a passing grade in mocha', function() {
    var grade = 9; // 8 out of 10 to pass
    expect(grade).to.be.above(7);
  });
});
