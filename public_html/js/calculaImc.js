
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc");
    if(!pesoValido(peso)){
        tdImc.textContent = "Peso inválido";
        pacientes[i].classList.add("bg-danger");
        continue;
    }
    if(!alturaValida(altura)){
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("bg-danger");
        continue;
    }
    tdImc.textContent = calculaIMC(peso, altura);
}

function calculaIMC(peso, altura){
    var imc = 0;
    
    imc = (peso / (altura * altura)).toFixed(3);
    
    return imc;
}

function pesoValido(peso){
    return (peso > 0 && peso < 300);
}

function alturaValida(altura){
    return (altura > 0 && altura < 3);
}