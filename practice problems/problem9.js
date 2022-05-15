const fs = require('fs');
const file = fs.readFileSync("../sowpods.txt")
const words = file.toString().split('\n')

// PROBLEM: What are all of the words that have all 5 vowels, in any order?

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

  return result
}

console.log(solve())

// OUTPUT: [
//   'ABOIDEAU',        'ABOIDEAUS',       'ABOIDEAUX',       'ABOITEAU',
//   'ABOITEAUS',       'ABOITEAUX',       'ABORTUARIES',     'ABSOLUTISE',
//   'ABSOLUTISED',     'ABSOLUTISES',     'ABSOLUTIVE',      'ABSOLUTIZE',
//   'ABSOLUTIZED',     'ABSOLUTIZES',     'ABSTEMIOUS',      'ABSTEMIOUSLY',
//   'ABSTEMIOUSNESS',  'ABSTENTIOUS',     'ACCENTUATION',    'ACCENTUATIONS',
//   'ACCESSORIUS',     'ACCOUNTANCIES',   'ACCOUTERING',     'ACETONURIA',
//   'ACETONURIAS',     'ACIDOPHILUSES',   'ACINACEOUS',      'ACOLOUTHITE',
//   'ACOLOUTHITES',    'ACOUCHIES',       'ACRIMONIOUSNESS', 'ACROTERIUM',
//   'ACROTERIUMS',     'ACTINOMYCETOUS',  'ADENOVIRUS',      'ADENOVIRUSES',
//   'ADIATHERMANOUS',  'ADIPOCEROUS',     'ADULTERATION',    'ADULTERATIONS',
//   'ADVENTITIOUS',    'ADVENTITIOUSLY',  'ADVOUTRIES',      'AEQUORIN',
//   'AEQUORINS',       'AEROACOUSTICS',   'AEROBIUM',        'AERONAUTIC',
//   'AERONAUTICAL',    'AERONAUTICALLY',  'AERONAUTICS',     'AERONEUROSIS',
//   'AERUGINOUS',      'AGARICACEOUS',    'AGGLUTINOGEN',    'AGGLUTINOGENIC',
//   'AGGLUTINOGENS',   'AGOUTIES',        'AGROBUSINESS',    'AGROBUSINESSES',
//   'AGROINDUSTRIES',  'AILOUROPHILE',    'AILOUROPHILES',   'AILOUROPHOBE',
//   'AILOUROPHOBES',   'AILUROPHILE',     'AILUROPHILES',    'AILUROPHOBE',
//   'AILUROPHOBES',    'ALBUGINEOUS',     'ALEURONIC',       'ALISMACEOUS',
//   'ALLIACEOUS',      'ALUMINIFEROUS',   'ALUMINOSILICATE', 'ALUMINOSITIES',
//   'ALUMINOTHERMIES', 'ALUMINOTHERMY',   'AMARYLLIDACEOUS', 'AMBIDEXTEROUS',
//   'AMBIDEXTROUS',    'AMBIDEXTROUSLY',  'AMBIGUOUSNESS',   'AMBIGUOUSNESSES',
//   'AMBITIOUSNESS',   'AMBITIOUSNESSES', 'AMBULATORIES',    'AMENTIFEROUS',
//   'AMINOBUTENE',     'AMINOBUTENES',    'AMMUNITIONED',    'AMPHIBIOUSNESS',
//   'AMPHICOELOUS',    'AMPHIOXUSES',     'AMPULLOSITIES',   'ANACARDIACEOUS',
//   'ANAEROBIUM',      'ANDOUILLE',       'ANDOUILLES',      'ANDOUILLETTE',
//   ... 3306 more items
// ]