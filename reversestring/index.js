// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '')
}

function reverse_add_to_beginning_of_string(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse_reverse_function(str) {
  const array = str.split('');
  array.reverse();
  return array.join('');
}

function reverse_loop(str) {
  let reversed = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    reversed[str.length - i - 1] = str[i];
  }
  return reversed.join('');
}

module.exports = reverse;
