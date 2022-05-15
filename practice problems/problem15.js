const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: Which of the letters Q, X, and Z is the least common?

function solve() {
  const total = [0, 0, 0]
  const letters = ["Q", "X", "Z"]

  for (let word of words) {
    // Looping through each letter in the word
    for (let i = 0; word.length > i; i++) {
      // Looping through "letters" array to compare with each letter in the word
      for (let z = 0; letters.length > z; z++) {
        if (letters[z] == word[i]) {
          total[z]++
        }
      }
    }
  }

  // Returning the smallest number in the "total" array
  switch (Math.min.apply(Math, total)) {
    case total[0]:
      return "Q = " + total[0]
    case total[1]:
      return "X = " + total[1]
    case total[2]:
      return "Y = " + total[2]
    default:
      return null
  }
}

console.log(solve(words))

// OUTPUT: Q = 4104