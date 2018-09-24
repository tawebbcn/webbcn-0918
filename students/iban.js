'use strict';

function main(){
    //seleccionar elementos
    var one = document.querySelector('.primary-button');
    var dos = document.querySelector('.second-button');
    var sectionIntroduce = document.querySelector('.introduce');
    var sectionExperimentos = document.querySelector('.experiments');


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
}


window.addEventListener('load', main);