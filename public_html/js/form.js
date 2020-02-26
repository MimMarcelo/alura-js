document.querySelector("#add-paciente").addEventListener("click", salvarPaciente);

function salvarPaciente(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-add-paciente");
    
    var paciente = getDataFromForm(form);
    
    var trPaciente = setTr(paciente);
    
    document.querySelector("#tabela-pacientes").appendChild(trPaciente);
    
    form.reset();
    form.nome.focus();
}

function getDataFromForm(form){
    var paciente = {        
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    };
    return paciente;
}

function setTr(paciente){
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");
    
    trPaciente.appendChild(setTd(paciente.nome, "info-nome"));
    trPaciente.appendChild(setTd(paciente.peso, "info-peso"));
    trPaciente.appendChild(setTd(paciente.altura, "info-altura"));
    trPaciente.appendChild(setTd(paciente.gordura, "info-gordura"));
    trPaciente.appendChild(setTd(paciente.imc, "info-imc"));
    
    return trPaciente;
}

function setTd(valor, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;
    
    return td;
}