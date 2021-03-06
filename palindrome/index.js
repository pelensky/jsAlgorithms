// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const split = str.split('');
  return split.every((char, index) => {
    return char === split[split.length - index - 1];
  });
}

function isStringAPalindrome(str) {
  return str === reverse(str);
}

function reverse(str) {
  const split = str.split('');
  return split.reverse().join('');
}

module.exports = palindrome;
