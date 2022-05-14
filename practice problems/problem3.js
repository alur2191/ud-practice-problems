const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words containing a Q but not a U?

function solve() {
  let result = []
  for (let word of words) {
    if (word.includes("Q") && !word.includes("U")) {
      result.push(word)
    }
  }

  return result
}

console.log(solve())