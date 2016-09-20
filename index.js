pigLatinizer = function(word, toOrFrom) {
  var str;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if(typeof word !== 'string' || typeof toOrFrom !== 'string') {
    throw new TypeError('first argument must be the string to translate and second argument must be `to` or `from` pig Latin');
  }
  if(word.length < 1 || toOrFrom.length < 1) {
    throw new TypeError('string cannot be empty');
  }

  var multipleWords = word.split(' ');

  if(multipleWords.length > 1) {
    var result = "";
    if(toOrFrom === 'to') {
      for(var w in multipleWords) {
        result += toPigLatin(multipleWords[w]) + " ";
      }
    } else {
      for(var w in multipleWords) {
        result += fromPigLatin(multipleWords[w]) + " ";
      }
    }
    return result.trim();
  } else {
    if(toOrFrom === 'to') {
      return toPigLatin(word);
    } else {
      return fromPigLatin(word);
    }
  }

  function toPigLatin(input) {
    if(vowels.indexOf(input.charAt(0)) > -1) {
      str = input += 'ay';
      return str;
    } else {
      var firstVowel = 'a';
      var firstVowelIndex = input.length;
      for(var char in vowels) {
        if(input.indexOf(vowels[char]) < firstVowelIndex && input.indexOf(vowels[char]) > -1) {
          firstVowel = vowels[char];
          firstVowelIndex = input.indexOf(firstVowel);
        }
      }
      var startChar = input.substring(0, firstVowelIndex);
      str = input.slice(firstVowelIndex);
      str += ('-' + startChar + 'ay');
      return str;
    }
  }

  function fromPigLatin(input) {
    if(input.indexOf('-') > -1) {
      str = input.substring(input.lastIndexOf('-') + 1, input.lastIndexOf('a'));
      str += input.substring(0, input.lastIndexOf('-'));
      return str;
    } else {
      str = input.substring(0, input.length - 2);
      return str;
    }
  }

  return str;
};

module.exports = pigLatinizer;