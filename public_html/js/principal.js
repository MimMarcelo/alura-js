
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

document.querySelector("#add-paciente").addEventListener("click", salvarPaciente);

function salvarPaciente(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-add-paciente");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    var trPaciente = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");
    var tdImc = document.createElement("td");
    
    tdNome.classList.add("info-nome");
    tdPeso.classList.add("info-peso");
    tdAltura.classList.add("info-altura");
    tdGordura.classList.add("info-gordura");
    tdImc.classList.add("info-imc");
    
    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;
    tdImc.textContent = (peso / (altura * altura)).toFixed(3);
    
    trPaciente.appendChild(tdNome);
    trPaciente.appendChild(tdPeso);
    trPaciente.appendChild(tdAltura);
    trPaciente.appendChild(tdGordura);
    trPaciente.appendChild(tdImc);
    
    document.querySelector("#tabela-pacientes").appendChild(trPaciente);
}