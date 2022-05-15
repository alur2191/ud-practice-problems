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

// OUTPUT: [
//   'BUSUUTI',       'BUSUUTIS',       'CARDUUS',
//   'CARDUUSES',     'CONTINUUM',      'CONTINUUMS',
//   'DUUMVIR',       'DUUMVIRAL',      'DUUMVIRATE',
//   'DUUMVIRATES',   'DUUMVIRI',       'DUUMVIRS',
//   'INDIVIDUUM',    'LITUUS',         'LITUUSES',
//   'MENSTRUUM',     'MENSTRUUMS',     'MUTUUM',
//   'MUTUUMS',       'MUUMUU',         'MUUMUUS',
//   'PARAMENSTRUUM', 'PARAMENSTRUUMS', 'RESIDUUM',
//   'RESIDUUMS',     'SQUUSH',         'SQUUSHED',
//   'SQUUSHES',      'SQUUSHING',      'TRIDUUM',
//   'TRIDUUMS',      'ULTRAVACUUM',    'ULTRAVACUUMS',
//   'VACUUM',        'VACUUMED',       'VACUUMING',
//   'VACUUMS',       'WELTANSCHAUUNG', 'WELTANSCHAUUNGS'
// ]