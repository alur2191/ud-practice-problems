const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What is the shortest word that contains all 5 vowels?

function solve() {
  let result = []

  for (let word of words) {
    if (word.includes("A") &&
      word.includes("E") &&
      word.includes("I") &&
      word.includes("O") &&
      word.includes("U")) {
      result.push(word)
    }
  }

  // compares number of letters in each word of the "results" array and returns the shortest
  const shortest = result.reduce((a, b) => a.length <= b.length ? a : b)

  return shortest
}

console.log(solve())