const data = require('../data/zoo_data');

function isManager(id) {
  const teste = data.employees.find((gerente) => gerente.id === id);
  if (teste.firstName === 'Stephanie' || teste.firstName === 'Ola' || teste.firstName === 'Burl') {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const gerente = isManager(managerId);
  if (gerente === true) {
    const subordinados = data.employees.filter((gerent) =>
      gerent.managers[0] === managerId || gerent.managers[1] === managerId);
    const teste = subordinados.map((nome, index) =>
      `${nome.firstName} ${nome.lastName}`);
    return teste;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
