'use strict';

function main(){
    //seleccionar elementos
    var one = document.querySelector('.primary-button');
    var dos = document.querySelector('.second-button');
    var sectionIntroduce = document.querySelector('.introduce');
    var sectionExperimentos = document.querySelector('.experiments');
    var body  = document.querySelector('body');
   var magicButton = document.querySelector('.magic-button');

    one.addEventListener('click', function(e){
        sectionIntroduce.classList.toggle('hidden');
        if(sectionIntroduce.classList.contains('hidden')){
            e.currentTarget.innerText = 'Mostrar sección presentación';
        } else{
            e.currentTarget.innerText = 'Esconder sección presentación';
        }
    });

    dos.addEventListener('click', function(e){
        sectionExperimentos.classList.toggle('hidden');
        if(sectionExperimentos.classList.contains('hidden')){
            e.currentTarget.innerText = 'Mostrar Experimentos';
        } else{
            e.currentTarget.innerText = 'Esconder Experimentos';
        }
    });

    magicButton.addEventListener('click', function(e){
        var p = document.createElement('p');
        p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        body.appendChild(p);
    })
}


window.addEventListener('load', main);