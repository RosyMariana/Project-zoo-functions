const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, teste) {
  const verifica = data.species.find((nome) => nome.name === animal).residents
    .every((idade) => idade.age >= teste);
  return verifica;
}

module.exports = getAnimalsOlderThan;
