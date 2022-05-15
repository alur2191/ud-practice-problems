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

// OUTPUT: [
//   'BRIGHTLY',    'DISTRAUGHTLY',
//   'DOWNRIGHTLY', 'FORTHRIGHTLY',
//   'FORTNIGHTLY', 'KNIGHTLY',
//   'LIGHTLY',     'MIDNIGHTLY',
//   'NIGHTLY',     'OUTRIGHTLY',
//   'RIGHTLY',     'SIGHTLY',
//   'SLIGHTLY',    'SPRIGHTLY',
//   'STRAIGHTLY',  'TIGHTLY',
//   'UNKNIGHTLY',  'UNSIGHTLY',
//   'UPRIGHTLY',   'WIGHTLY'
// ]