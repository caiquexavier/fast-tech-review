var chai = require('chai');
var expect = chai.expect;
var BusinessFunctions = require('../controllers/business-functions');

describe('businessFunctions', () => {
  it('getSum() should return 5 for rthe sum of x=2 and y=3', () => {
    var businessFunctions = new BusinessFunctions([]);
    var x = 5;
    var y = 3;
    expect(businessFunctions.getSum(x, y)).to.equal(8);
  });
});
