const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words that have all 5 vowels, in alphabetical order?

// This array will be compared to each "vowels" array which will contain vowels from words
const compareVowels = ['A', 'E', 'I', 'O', 'U'];

function solve() {
  let result = []
  for (let word of words) {
    // UPDATE: DISABLED IF STATEMENT ON LINE 14 - Checks if the word includes vowels
    //if (word.includes("A") && word.includes("E") && word.includes("I") && word.includes("O") && word.includes("U")) {
    let vowels = [];
    // Looping through each letter in the word
    for (let i = 0; word.length > i; i++) {
      // Looping through "compareVowels" array to compare with each letter
      for (let z = 0; compareVowels.length > z; z++) {
        if (word[i].includes(compareVowels[z])) {
          // If statement on line 21 rejects consecutively occurring letters from being added multiple times to "vowels" array.
          // This will make sure that words like "LATERITIOUS" (with consecutive I's) are added to vowels.
          // Words with consecutively occurring letters will pass the check on line 28.
          if (word[i] !== vowels[vowels.length - 1]) {
            vowels.push(word[i]);
          }
        }
      }
    }
    // Convert arrays to strings and compare
    if (JSON.stringify(compareVowels) === JSON.stringify(vowels)) {
      result.push(word);
    }
    // }
  }
  return result

}


console.log(solve())

// OUTPUT: [
//   'ABSTEMIOUS',     'ABSTEMIOUSLY',
//   'ABSTENTIOUS',    'ADVENTITIOUS',
//   'ADVENTITIOUSLY', 'ARENICOLOUS',
//   'HALFSEERIOUSLY', 'ARSENIOUS',
//   'CAESIOUS',       'CAVERNICOLOUS',
//   'FACETIOUS',      'FACETIOUSLY',
//   'HALFSERIOUSLY',  'LATERITIOUS',
//   'PARECIOUS'
// ]