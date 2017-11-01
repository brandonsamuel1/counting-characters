function countLetter (string) {
  var letterCounts = {};
  for(var i = 0; i < string.length; i++) {
    var letter = string[i];
    if(letter === ' ') {
      continue;
    }
    if(letterCounts[letter] === undefined) {
      letterCounts[letter] = 1
    } else {
      letterCounts[letter] = letterCounts[letter] + 1
    }
  }
  return letterCounts;
}

console.log(countLetter('Lighthouse in the house'));
console.log(countLetter('saghjdhja'));