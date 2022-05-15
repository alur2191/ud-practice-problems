const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: How many words contain the substring "TYPE”?

function filter() {
  let amount = null

  for (let word of words) {
    if (word.includes("TYPE")) {
      amount++;
    }
  }

  return amount
}

console.log(filter())

// OUTPUT: 208