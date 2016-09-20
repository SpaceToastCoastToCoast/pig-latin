const chai = require('chai');
const pigLatinizer = require('../index.js');

const expect = chai.expect;

describe('english to pig latin', function() {


  it('should translate words beginning with consonants', function() {
    expect(pigLatinizer('banana', 'to')).to.deep.equal('anana-bay');
  });

  it('should translate words beginning with vowels', function() {
    expect(pigLatinizer('omelet', 'to')).to.deep.equal('omeletay');
  });
});