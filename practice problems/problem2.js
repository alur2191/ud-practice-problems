const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words containing an X and a Y and a Z?

function solve() {
  let result = []
  for (let word of words) {
    if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
      result.push(word)
    }
  }

  return result
}

console.log(solve());

// OUTPUT: [
//   'DEOXYGENIZE',     'DEOXYGENIZED',
//   'DEOXYGENIZES',    'DEOXYGENIZING',
//   'EXOENZYME',       'EXOENZYMES',
//   'HYDROXYZINE',     'HYDROXYZINES',
//   'METHOXYBENZENE',  'METHOXYBENZENES',
//   'OXYGENIZE',       'OXYGENIZED',
//   'OXYGENIZER',      'OXYGENIZERS',
//   'OXYGENIZES',      'OXYGENIZING',
//   'OXYPHENBUTAZONE', 'ZANTHOXYL',
//   'ZANTHOXYLS',      'ZANTHOXYLUM',
//   'ZANTHOXYLUMS',    'ZOOTAXY'
// ]