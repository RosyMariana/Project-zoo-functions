const data = require('../data/zoo_data');
// const en = require('faker/lib/locales/en');

function countEntrants(entrants) {
  const obj = {};
  let criança = 0;
  let adulto = 0;
  let senhor = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      criança += 1;
    } else
    if (element.age >= 18 && element.age < 50) {
      adulto += 1;
    } else {
      senhor += 1;
    }
  });
  obj.child = criança;
  obj.adult = adulto;
  obj.senior = senhor;
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.keys === undefined) {
    return 0;
  }
  const obj = countEntrants(entrants);
  let cont = 0;
  cont += Object.values(obj)[0] * Object.values(data.prices)[2];
  cont += Object.values(obj)[1] * Object.values(data.prices)[0];
  cont += Object.values(obj)[2] * Object.values(data.prices)[1];
  return cont;
}
module.exports = { calculateEntry, countEntrants };
