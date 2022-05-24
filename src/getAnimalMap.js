const data = require('../data/zoo_data');
const especie = data.species;

const Filtrar = (localiza) => {
  return especie.filter((bicho) => bicho.location === localiza).map((nome) => nome.name);
}
const FiltrarName = (localiza) => {
  return especie.filter((bicho) => bicho.location === localiza).map((nome) => (
    {[nome.name]:  pegarNomes(nome.name)}
  ));
}

const pegarNomes = (nomes) => {
  const nomeAnimais = [];
  especie.forEach((bicho) => {
    if (bicho.name === nomes) {
      bicho.residents.forEach((nomeBicho) => nomeAnimais.push(nomeBicho.name));
    }
  });
  return nomeAnimais.sort();
};

function getAnimalMap(options) {
  if (options === undefined) {
    const obj = {};    
    especie.forEach((cadaEspecie) => obj[cadaEspecie.location] = Filtrar(cadaEspecie.location));
    return obj;
  }
  if (Object.keys(options).length === 1 && Object.keys(options) == 'sex') {
    const obj = {};    
    especie.forEach((cadaEspecie) => obj[cadaEspecie.location] = Filtrar(cadaEspecie.location));
    return obj;
  }
  if (Object.keys(options).length === 2 && Object.keys(options)[0] == 'sex' && Object.keys(options)[1] == 'sorted') {
    const obj = {};    
    especie.forEach((cadaEspecie) => obj[cadaEspecie.location] = Filtrar(cadaEspecie.location));
    return obj;
  }
  if (Object.keys(options).length === 1 && Object.keys(options) == 'includeNames' && Object.values(options) == 'true') {
    const obj = {};    
    especie.forEach((cadaEspecie) => { 
      obj[cadaEspecie.location] = FiltrarName(cadaEspecie.location);
    });
    return obj;
  }
}
const options = { includeNames: true };
console.log(getAnimalMap(options))
module.exports = getAnimalMap;
