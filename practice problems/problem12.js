const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// Create and print an array containing all of the words that end in "GHTLY"

function solve() {
  let result = []

  for (let word of words) {
    if (word.substring(word.length - 5) === "GHTLY") {
      result.push(word)
    }
  }

  return result
}

console.log(solve())