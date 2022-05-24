const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const objAnimal = {};
    data.species.forEach((teste) => {
      objAnimal[teste.name] = teste.residents.length;
    });
    return objAnimal;
  }
  if (Object.keys(animal).length === 1) {
    const teste = data.species.find((especie) => especie.name === animal.specie).residents;
    return teste.length;
  }
  const teste = data.species.find((especie) => especie.name === animal.specie).residents;
  return (teste.reduce((acumulador, atual) => {
    if (atual.sex === animal.sex) return acumulador + 1;
    return acumulador;
  }, 0));
}
module.exports = countAnimals;
