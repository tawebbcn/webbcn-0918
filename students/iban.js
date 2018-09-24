//seleccionar elementos
var one = document.querySelector('.primary-button');
var dos = document.querySelector('.second-button');
var sectionIntroduce = document.querySelector('.introduce');
var sectionExperimentos = document.querySelector('.experiments');


one.addEventListener('click', function(e){
    sectionIntroduce.classList.toggle('hidden');
    
});

dos.addEventListener('click', function(e){
    sectionExperimentos.classList.toggle('hidden');
})