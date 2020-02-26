
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc");
    if(peso <= 0 || peso > 300){
        tdImc.textContent = "Peso inválido";
        pacientes[i].classList.add("bg-danger");
        continue;
    }
    if(altura <= 0 || altura > 300){
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("bg-danger");
        continue;
    }
    tdImc.textContent = (peso / (altura * altura)).toFixed(3) ;
}