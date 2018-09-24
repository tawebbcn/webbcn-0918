var li1= document.querySelector("button");
var li2= document.querySelector(".btnder");
var sectionizq= document.querySelector(".perfil") 
li1.addEventListener('click', function(){
  sectionizq.classList.toggle("hidden");
  if(sectionizq.classList.contains('hidden')){
    li1.innerText = "Muestra la sección";
  } else{
      li1.innerText = "Esconde la sección"; 
    }
})
var sectionder= document.querySelector(".experimentos");

li2.addEventListener('click', function(){
  sectionder.classList.toggle("hidden");
  if(sectionder.classList.contains('hidden')){
    li2.innerText = "Muestra la sección";
  } else{
      li2.innerText = "Esconde la sección"; 
    }
  })