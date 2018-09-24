'use strict';

function main (){
  var hideButtons = document.querySelectorAll(".hide-button");

  var hideSection = function (event) {
    event.currentTarget.parentNode.parentNode.children[1].classList.toggle("hidden");
    if (event.currentTarget.parentNode.parentNode.children[1].classList.contains("hidden")){
      event.currentTarget.innerText = "Show section";
    } else {
      event.currentTarget.innerText = "Hide section";
    }
  }

  hideButtons.forEach(function(hideButton){
    hideButton.addEventListener('click', hideSection);
  });
}

window.addEventListener("load", main);
