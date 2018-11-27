const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("SolarSystem:selected-planet",(event) => {
    const selectedPlanets = event.detail;
    this.displayResults(selectedPlanets);
  })
};

ResultView.prototype.displayResults = function (result) {
  const resultsElement = document.querySelector('.planet-details');
  console.log(result);

  const inputName = result.name;
  const inputOrbit = result.orbit;
  const inputDay = result.day;
  const inputSurfaceArea = result.surfaceArea;
  const inputVolume = result.volume;
  const inputGravity = result.gravity;
  const inputMoons = result.moons;
  const inputImage = result.image;

  const name = document.createElement('h1');
  const orbit = document.createElement('p');
  const day = document.createElement('p');
  const surfaceArea = document.createElement('p');
  const volume = document.createElement('p');
  const gravity = document.createElement('p');
  const moons = document.createElement('p');
  const image = document.createElement('p');


  name.textContent = `${inputName}`;
  orbit.textContent = `Orbit: ${inputOrbit}`;
  day.textContent = `Day: ${inputOrbit}`;
  surfaceArea.textContent = `Surface Area: ${inputSurfaceArea}`;
  volume.textContent = `Volume: ${inputVolume}`;
  gravity.textContent = `Gravity: ${inputGravity}`;
  moons.textContent = `Moons: ${inputMoons}`;
  image.textContent = `Image: ${inputImage}`;

  resultsElement.appendChild(name);
  resultsElement.appendChild(orbit);
  resultsElement.appendChild(day);
  resultsElement.appendChild(surfaceArea);
  resultsElement.appendChild(volume);
  resultsElement.appendChild(gravity);
  resultsElement.appendChild(moons);
  resultsElement.appendChild(image);
};

module.exports = ResultView;
