
var pacientes = document.querySelectorAll(".paciente");

var tbody = document.querySelector("#tabela-pacientes");

tbody.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 600);
});