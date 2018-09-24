var hideButtons = document.querySelectorAll(".hide-button");
var sections = document.querySelectorAll(".to-hide-info");

var hideSection = function (event) {
  event.currentTarget.parentNode.parentNode.children[1].classList.toggle("hidden");
}

hideButtons.forEach(function(hideButton){
  hideButton.addEventListener('click', hideSection);
});
  