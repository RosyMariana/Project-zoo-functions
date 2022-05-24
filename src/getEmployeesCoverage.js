const data = require('../data/zoo_data');

let newObj = {};

const objetoVazio = () => {
  const dados = data.employees.map((teste) => ({
    id: teste.id,
    fullName: `${teste.firstName} ${teste.lastName}`,
    species: ((teste.responsibleFor.map((bicho) => data.species.find((especie) =>
      especie.id === bicho)))).map((nome) => nome.name),
    locations: ((teste.responsibleFor.map((bicho) => data.species.find((especie) =>
      especie.id === bicho)))).map((localizaçao) => localizaçao.location),
  }));
  return dados;
};

const objetoDefinido = (nome) => {
  const nomeSpecie = [];
  const localizaçao = [];
  const animal = nome.responsibleFor.filter((bichos) => bichos);
  const bicho = data.species.filter((teste) => teste.id);
  for (let cont = 0; cont < animal.length; cont += 1) {
    const teste = bicho.filter((idSpecie) => idSpecie.id === animal[cont]);
    nomeSpecie.push(teste[0].name);
    localizaçao.push(teste[0].location);
  }
  newObj = {
    id: nome.id,
    fullName: `${nome.firstName} ${nome.lastName}`,
    species: nomeSpecie,
    locations: localizaçao,
  };
  return newObj;
};

const conferir = (nome, sobrenome, id) => {
  if (nome === undefined && sobrenome !== undefined) {
    return sobrenome;
  }
  if (sobrenome === undefined && id !== undefined) {
    return id;
  }
  return nome;
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return objetoVazio();
  }
  const nome = data.employees.find((primeiroNome) => primeiroNome.firstName === obj.name);
  const sobrenome = data.employees.find((ultimoNome) => ultimoNome.lastName === obj.name);
  const id = data.employees.find((idPessoa) => idPessoa.id === obj.id);
  const conferirNome = conferir(nome, sobrenome, id);
  if (conferirNome !== undefined) {
    return objetoDefinido(conferirNome);
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
