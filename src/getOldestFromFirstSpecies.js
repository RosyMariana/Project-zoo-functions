const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employees) {
  const employeId = data.employees.find((teste) => teste.id === employees);
  const bichos = data.species.find((bicho) => bicho.id === employeId.responsibleFor[0]);
  const residente = bichos.residents.reduce((acumulador, idade) =>
    (acumulador.age > idade.age ? acumulador : idade));
  return (Object.values(residente));
}
module.exports = getOldestFromFirstSpecies;
