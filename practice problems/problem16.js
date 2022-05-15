const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What is the longest palindrome?

function solve() {
  let longest = ""

  function isPalindrome(word) {
    // 1. Each string is converted to an array
    // 2. Order of letters are reversed
    // 3. Array converted back to a string
    // 4. Compared to originally received "word" string
    return word == word.split('').reverse().join('');
  }

  //Looping through each word
  for (let word of words) {
    // 1. Checking if word is a palindrome
    // 2. Checking if word is longer than the "longest" string
    if (isPalindrome(word) && longest.length < word.length) {
      longest = word
    }
  }

  return longest
}

console.log(solve())


// OUTPUT: ROTAVATOR