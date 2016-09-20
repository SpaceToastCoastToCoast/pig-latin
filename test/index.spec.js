const chai = require('chai');
const pigLatinizer = require('../index.js');

const expect = chai.expect;

describe('english to pig latin', function() {
  it('should accept two string arguments', function() {
    expect(pigLatinizer.bind(null, 'banana')).to.throw(TypeError);
    expect(pigLatinizer.bind(null, '', 'to')).to.throw(TypeError);
    expect(pigLatinizer.bind(null, 'banana', '')).to.throw(TypeError);
    expect(pigLatinizer.bind(null, ['cat'], { word : 'to' })).to.throw(TypeError);
  });

  it('should translate words beginning with consonants', function() {
    expect(pigLatinizer('banana', 'to')).to.deep.equal('anana-bay');
    expect(pigLatinizer('trash', 'to')).to.deep.equal('ash-tray');
  });

  it('should translate words beginning with vowels', function() {
    expect(pigLatinizer('omelet', 'to')).to.deep.equal('omeletay');
  });
});

describe('pig latin to english', function() {
  it('should translate words with hyphens', function() {
    expect(pigLatinizer('ash-tray', 'from')).to.deep.equal('trash');
  });
  it('should translate words without hyphens', function() {
    expect(pigLatinizer('omeletay', 'from')).to.deep.equal('omelet');
  });

});

describe('whole phrases in either direction', function() {
  it('should translate a phrase or sentence from english to pig latin', function() {
    expect(pigLatinizer('This phrase will be converted into piglatin, please insert your phrase here.',
    'to')).to.deep.equal('is-Thay ase-phray ill-way e-bay onverted-cay intoay iglatin,-pay ease-play insertay our-yay ase-phray ere.-hay');
  });
  it('should translate a sentence or whole phrase from pig latin to english', function() {
    expect(pigLatinizer('is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray',
    'from')).to.deep.equal('This Pig Latin phrase will be translated back into the native language as a string.');
  });
});