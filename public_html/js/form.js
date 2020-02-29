document.querySelector("#add-paciente").addEventListener("click", salvarPaciente);

function salvarPaciente(event) {
    event.preventDefault();

    var form = document.querySelector("#form-add-paciente");

    var paciente = getDataFromForm(form);

    if(!pacienteValido(paciente, form)){
        return;
    }
    
    addPacineteNaTabela(paciente);
    
    form.reset();

    form.nome.focus();
}

function addPacineteNaTabela(paciente){
    var trPaciente = setTr(paciente);

    document.querySelector("#tabela-pacientes").appendChild(trPaciente);
}

function getDataFromForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    };
    return paciente;
}

function setTr(paciente) {
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");

    trPaciente.appendChild(setTd(paciente.nome, "info-nome"));
    trPaciente.appendChild(setTd(paciente.peso, "info-peso"));
    trPaciente.appendChild(setTd(paciente.altura, "info-altura"));
    trPaciente.appendChild(setTd(paciente.gordura, "info-gordura"));
    trPaciente.appendChild(setTd(paciente.imc, "info-imc"));

    return trPaciente;
}

function setTd(valor, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;

    return td;
}

function pacienteValido(paciente, form){
    
    var ul = document.querySelector("#mensagens");
    ul.innerHTML = "";
    var erros = [];
    
    if (paciente.gordura.length === 0 || paciente.gordura < 0 || paciente.gordura > 100) {
        erros.unshift("Taxa de gordura inválida");
        form.gordura.focus();
    }    
    if (!alturaValida(paciente.altura)) {
        erros.unshift("Altura inválida");
        form.altura.focus();
    }
    if (!pesoValido(paciente.peso)) {
        erros.unshift("Peso inválido");
        form.peso.focus();
    }
    if(paciente.nome.length < 2){
        erros.unshift("Nome inválido");
        form.nome.focus();
    }
    if(erros.length > 0){
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            li.classList.add("bg-danger");
            ul.appendChild(li);
        });
        return false;
    }
    return true;
}