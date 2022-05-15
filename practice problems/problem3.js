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

// OUTPUT: [
//   'FAQIR',     'FAQIRS',    'INQILAB',   'INQILABS',
//   'MBAQANGA',  'MBAQANGAS', 'NIQAB',     'NIQABS',
//   'QABALA',    'QABALAH',   'QABALAHS',  'QABALAS',
//   'QABALISM',  'QABALISMS', 'QABALIST',  'QABALISTIC',
//   'QABALISTS', 'QADI',      'QADIS',     'QAID',
//   'QAIDS',     'QAIMAQAM',  'QAIMAQAMS', 'QALAMDAN',
//   'QALAMDANS', 'QANAT',     'QANATS',    'QASIDA',
//   'QASIDAS',   'QAT',       'QATS',      'QAWWAL',
//   'QAWWALI',   'QAWWALIS',  'QAWWALS',   'QI',
//   'QIBLA',     'QIBLAS',    'QIGONG',    'QIGONGS',
//   'QINDAR',    'QINDARKA',  'QINDARS',   'QINTAR',
//   'QINTARS',   'QIS',       'QOPH',      'QOPHS',
//   'QORMA',     'QORMAS',    'QWERTIES',  'QWERTY',
//   'QWERTYS',   'SHEQALIM',  'SHEQEL',    'SHEQELS',
//   'TALAQ',     'TALAQS',    'TRANQ',     'TRANQS',
//   'TSADDIQ',   'TSADDIQIM', 'TSADDIQS',  'TZADDIQ',
//   'TZADDIQIM', 'TZADDIQS',  'WAQF',      'WAQFS',
//   'YAQONA',    'YAQONAS'
// ]