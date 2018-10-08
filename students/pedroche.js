'use strict'

function main(){
    //BUSCADOR CON REFACTOR
    var input = document.querySelector('.input-student input')
    input.addEventListener('keyup', handleKeyUp);
    input.addEventListener('click', function(event){
        event.stopPropagation();
    });
 
    var searchResultElement = document.querySelector('.search-results');
 
    document.body.addEventListener('keyup', function(event) {
        if (event.key === 'Escape'){
            searchResultElement.innerHTML = '';
        }
    });
 
    document.body.addEventListener('click', function(){
        searchResultElement.innerHTML = '';
    });
 
    function findStudents(searchTerm){
        var results = []
        if(searchTerm){
            var results = students.filter(function(student){
                var studentName = student.name.toLowerCase();
                if(studentName.indexOf(searchTerm) !== -1){
                    return true;
                }
            })
        }
        return results;
    }
 
    function displayResults(results) {
        searchResultElement.innerHTML = '';
        var searchResultListElement = document.createElement('ul');
        results.forEach(function(result) {
            var resultLink = document.createElement('a');
            resultLink.innerText = result.name;
            resultLink.setAttribute('href', '../../' + result.url);
            var resultListItem = document.createElement('li');
            resultListItem.appendChild(resultLink);
            searchResultElement.appendChild(resultListItem);
        })
        searchResultElement.appendChild(searchResultListElement);
    }
 
    function handleKeyUp() {
        var searchTerm = input.value.toLowerCase();
        var results = findStudents(searchTerm);
        displayResults(results);
    }
    //add button
    var button1 = document.querySelector(".button-sec1");
    
    function showIdentity () {
        setTimeout(function() {
            getCreate
        })
    }

    //var sectionAbout = document.querySelector("section.informacion-personal p")
    
    button1.addEventListener("click", showIdentity)
        

}


 
 
window.addEventListener('load', main);

// var button1 = document.querySelector('.btn-seccion1');
   // var button2 = document.querySelector('.btn-seccion2');

   // var sectionExperiments = document.querySelector('.experiments');
   // var sectionAbout = document.querySelector('.about');

   // button1.addEventListener('click',function(){
   //     sectionAbout.classList.toggle('hidden');
   // })

   // button2.addEventListener('click',function(){
   //     sectionExperiments.classList.toggle('hidden');
   // })

   

   