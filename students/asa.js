var profile = document.querySelector('section.profile');
var experiments = document.querySelector('section.experiments');
var header = document.querySelector('header.header');
var firstButton = document.createElement('button');
var secondButton = document.createElement('button');

firstButton.classList.add('first-button');
secondButton.classList.add('second-button');

firstButton.innerText = 'Turn off first section';
secondButton.innerText = 'Turn off second section';

header.appendChild(firstButton);
header.appendChild(secondButton);

function turnOffFirstSection (element) {
  profile.remove();
  element.currentTarget.innerText = 'Turn on first section';
}

function turnOffSecondSection (element) {
  experiments.remove();
  element.currentTarget.innerText = 'Turn on second section';
}

firstButton.addEventListener('click', turnOffFirstSection);
secondButton.addEventListener('click', turnOffSecondSection);
