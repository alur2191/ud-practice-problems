const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words that have no E or A and are at least 15 letters long?

function solve() {
  let result = []
  for (let word of words) {
    if (!word.includes("E") && !word.includes("A") && word.length >= 15) {
      result.push(word)
    }
  }

  return result
}

console.log(solve())