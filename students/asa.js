'use strict';
function main() {

  var profile = document.querySelector('section.profile');
  var experiments = document.querySelector('section.experiments');
  var header = document.querySelector('header.header');
  var firstButton = document.createElement('button');
  var secondButton = document.createElement('button');

  firstButton.classList.add('first-button');
  secondButton.classList.add('second-button');

  firstButton.innerText = 'Hide section';
  secondButton.innerText = 'Hide section';

  header.appendChild(firstButton);
  header.appendChild(secondButton);

  function hideFirstSection(element) {
    profile.classList.toggle('hidden');
    if (profile.classList.contains('hidden')) {
      element.currentTarget.innerText = 'Show header';
    } else {
      element.currentTarget.innerText = 'Hide header';
    }
  }

  function hideSecondSection(element) {
    experiments.classList.toggle('hidden');
    if (experiments.classList.contains('hidden')) {
      element.currentTarget.innerText = 'Show header';
    } else {
      element.currentTarget.innerText = 'Hide header';
    }
  }

  firstButton.addEventListener('click', hideFirstSection);
  secondButton.addEventListener('click', hideSecondSection);

}

window.addEventListener('load', main);
