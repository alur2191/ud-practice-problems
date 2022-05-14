const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

function filter() {
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  for (let word of words) {
    // Loop through each letter
    for (let i = 0; i < word.length - 1; i++) {
      // Check if letters appear consecutively
      if (word[i] === word[i + 1]) {
        // Remove appearing letter from "letters" array
        letters = letters.filter(letter => letter !== word[i])
      }
    }
  }

  return letters
}

console.log(filter())