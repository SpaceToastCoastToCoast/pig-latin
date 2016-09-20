const chai = require('chai');
const pigLatinizer = require('../index.js');

const expect = chai.expect;

describe('english to pig latin', function() {
  it('should accept two string arguments', function() {
    expect(pigLatinizer.bind(null, 'banana')).to.throw(TypeError);
    expect(pigLatinizer.bind(null, ['cat'], { word : 'to' })).to.throw(TypeError);
  });

  it('should translate words beginning with consonants', function() {
    expect(pigLatinizer('banana', 'to')).to.deep.equal('anana-bay');
  });

  it('should translate words beginning with vowels', function() {
    expect(pigLatinizer('omelet', 'to')).to.deep.equal('omeletay');
  });
});