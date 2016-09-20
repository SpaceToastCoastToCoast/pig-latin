pigLatinizer = function(input, toOrFrom) {
  var str;
  if(typeof input !== 'string' || typeof toOrFrom !== 'string') {
    throw new TypeError('first parameter must be the word to translate and second parameter must be `to` or `from` pig Latin');
  }
};

module.exports = pigLatinizer;