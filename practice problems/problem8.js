const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words with no vowel and not even a Y?

function solve() {
  let result = []
  for (let word of words) {
    if (!word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U") &&
      !word.includes("Y")) {
      result.push(word)
    }
  }
  return result
}

console.log(solve())

// OUTPUT: [
//   'BRR',   'BRRR',   'CH',
//   'CRWTH', 'CRWTHS', 'CWM',
//   'CWMS',  'CWTCH',  'HM',
//   'HMM',   'MM',     'NTH',
//   'PFFT',  'PHPHT',  'PHT',
//   'PSST',  'PST',    'SH',
//   'SHH',   'ST',     'TSK',
//   'TSKS',  'TSKTSK', 'TSKTSKS',
//   'TWP',   'ZZZ',    'ZZZS'
// ]