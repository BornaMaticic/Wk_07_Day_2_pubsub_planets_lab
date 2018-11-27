const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ChooseView = require('./views/choose_view.js')
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();


const chooseView = new ChooseView();
chooseView.bindEvents();

const resultView = new ResultView();
resultView.bindEvents();



});
