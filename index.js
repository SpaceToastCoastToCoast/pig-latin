pigLatinizer = function(input, toOrFrom) {
  var str;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if(typeof input !== 'string' || typeof toOrFrom !== 'string') {
    throw new TypeError('first parameter must be the word to translate and second parameter must be `to` or `from` pig Latin');
  }

  if(toOrFrom === 'to') {
    if(vowels.indexOf(input.charAt(0)) > -1) {
      str = input += 'ay';
      return str;
    } else {
      var startChar = input.charAt(0).toLowerCase();
      str = input.slice(1);
      str += ('-' + startChar + 'ay');
      return str;
    }
  }

  return str;
};

module.exports = pigLatinizer;