
var btn = document.querySelector("#buscar-pacientes");

btn.addEventListener("click", function () {
    console.log("Buscando...");
    //https://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {
        if (xhr.status != 200) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        } else {
//        console.log(xhr.responseText);
            var pacientes = JSON.parse(xhr.responseText);
//        console.log(pacientes);
//        console.log(typeof pacientes);
            pacientes.forEach(function (paciente) {
                addPacineteNaTabela(paciente);
            });
        }
    });
    xhr.send();
});