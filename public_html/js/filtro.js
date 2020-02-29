
var campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input", function(){
//    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente){
        var tdNome = paciente.querySelector(".info-nome");
        paciente.classList.remove("invisivel");
        if(!tdNome.textContent.toLowerCase().includes(campoFiltro.value.toLowerCase())){
            paciente.classList.add("invisivel");
        }
    });
});