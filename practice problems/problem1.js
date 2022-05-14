const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words containing UU?

function solve() {
  let result = []
  for (let word of words) {
    if (word.includes("UU")) {
      result.push(word)
    }
  }

  return result
}

console.log(solve());