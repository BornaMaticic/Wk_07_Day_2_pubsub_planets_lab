const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('ChooseView:planet-selected', (event) => {
    const chosenPlanet = event.detail;
    const selectedPlanets = this.planetSelect(chosenPlanet);
    PubSub.publish("SolarSystem:selected-planet", selectedPlanets);
  });
};

SolarSystem.prototype.planetSelect = function (planet_name) {
  console.log(planet_name);
  const selectPlanets = this.planets.find(function(element){
    return element.name === planet_name;
  });
  return selectPlanets;
};

module.exports = SolarSystem;
