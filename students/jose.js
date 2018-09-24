var li1= document.querySelector("button");
var li2= document.querySelector(".btnder");
var sectionizq= document.querySelector(".perfil") 
li1.addEventListener('click', function(){
  sectionizq.classList.toggle("hidden");
})
var sectionder= document.querySelector(".experimentos") 
li2.addEventListener('click', function(){
  sectionder.classList.toggle("hidden");
})