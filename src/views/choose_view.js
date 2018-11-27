const PubSub = require('../helpers/pub_sub.js')

const ChooseView = function(){

};

ChooseView.prototype.bindEvents = function () {
  const choose = document.querySelector(".planets-menu");
  choose.addEventListener('click', (event) => {
    const chosenPlanet = event.target.id;

    PubSub.publish('ChooseView:planet-selected', chosenPlanet);
  });
};

module.exports = ChooseView;
