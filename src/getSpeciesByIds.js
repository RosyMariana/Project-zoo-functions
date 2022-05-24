const data = require('../data/zoo_data');

function getSpeciesByIds(ids, id2) {
  const especieID = data.species.filter((especie) => especie.id === ids || especie.id === id2);
  return especieID;
}

module.exports = getSpeciesByIds;
