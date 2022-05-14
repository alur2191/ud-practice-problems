const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words that both start and end with a Y?

function solve() {
  let result = []
  for (let word of words) {
    if (word.charAt(0) === "Y" && word.charAt(word.length - 1) === "Y") {
      result.push(word)
    }
  }

  return result
}

console.log(solve())