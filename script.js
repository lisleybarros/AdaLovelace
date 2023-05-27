document.getElementById("botao").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("celular").value != "") {
        alert("Certinho! Você receberá em breve as novidades por email :D ");
    } else {
        alert("Erro! Por favor, preencha os dados novamente :( ")
    }
}
