const data = require('../data/zoo_data');

const agenda = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const newArray = [
  'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday',
  'Saturday', 'Wednesday',
];
const outroArray = [
  'lions', 'tigers',
  'bears', 'penguins',
  'otters', 'frogs',
  'snakes', 'elephants'];

let newTeste = [];

const gambiarra = (scheduleTarget) => {
  newArray.forEach((nome) => {
    if (scheduleTarget === nome) {
      Object.keys(agenda).forEach((item) => {
        if (item === nome) { newTeste = Object.values(agenda[item]); }
      });
    }
  });
  const newObj = {};
  Object.defineProperty(newObj, scheduleTarget, {
    value: {
      officeHour: newTeste[0],
      exhibition: newTeste[1],
    },
    writable: true,
    enumerable: true,
    configurable: true, // referencia: https://www.programiz.com/javascript/library/object/defineProperty#:~:text=Javascript%20Object.defineProperty%20%28%29%20The%20JavaScript%20Object.defineProperty%20%28%29%20method,method%2C%20is%20called%20using%20the%20Object%20class%20name.
  });
  return newObj;
};

function getSchedule(scheduleTarget) {
  if (newArray.find((teste) => scheduleTarget === teste)) {
    const retornoDaGambiarra = gambiarra(scheduleTarget);
    return retornoDaGambiarra;
  }
  if (outroArray.find((teste2) => scheduleTarget === teste2)) {
    let filtro = [];
    data.species.forEach((teste) => {
      if (teste.name === scheduleTarget) {
        filtro = teste.availability;
      }
    });
    return filtro;
  }
  return agenda;
}
module.exports = getSchedule;
