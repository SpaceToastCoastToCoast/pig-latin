pigLatinizer = function(input, toOrFrom) {
  var str;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if(typeof input !== 'string' || typeof toOrFrom !== 'string') {
    throw new TypeError('first argument must be the string to translate and second argument must be `to` or `from` pig Latin');
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
  } else if (toOrFrom === 'from') {
    if(input.indexOf('-') > -1) {
      str = input.substring(input.lastIndexOf('-') + 1, input.lastIndexOf('a'));
      str += input.substring(0, input.lastIndexOf('-'));
      return str;
    } else {
      str = input.substring(0, input.length - 2);
      return str;
    }
  } else {
    throw new Error('second argument must be `to` or `from`');
  }

  return str;
};

module.exports = pigLatinizer;