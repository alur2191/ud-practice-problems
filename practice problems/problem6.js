const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words that have a B and an X and are less than 5 letters long?

function solve() {
  let result = []
  for (let word of words) {
    if (word.includes("B") && word.includes("X") && word.length < 5) {
      result.push(word)
    }
  }

  return result
}

console.log(solve())

// OUTPUT: [ 'BOX', 'BOXY', 'BRUX', 'IBEX' ]