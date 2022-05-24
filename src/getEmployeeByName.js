const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    const pessoa = data.employees.find((nome) =>
      nome.firstName === employeeName || nome.lastName === employeeName);
    return pessoa;
  }
  return {};
}

module.exports = getEmployeeByName;
