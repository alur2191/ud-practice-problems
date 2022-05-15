const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words that contain the word CAT and are exactly 5 letters long?

function solve() {
  let result = []
  for (let word of words) {
    if (word.includes("CAT") && word.length == 5) {
      result.push(word)
    }
  }

  return result
}

console.log(solve())

// OUTPUT: [
//   'CATCH', 'CATER',
//   'CATES', 'CATTY',
//   'DUCAT', 'SCATH',
//   'SCATS', 'SCATT'
// ]