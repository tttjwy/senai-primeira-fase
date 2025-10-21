function mostrarMensagem(){
    alert("Mensagem")
    alert("Outra mensagem")
}

function executarExercicio(){
    // let nome = prompt("Qual seu nome?")
    // alert("Olá " + nome + ", tudo bem?")
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = "Olá " + nome + ", tudo bem?"
}

function efetuarLogin(){
    let resultado = document.getElementById("resultadoLogin")
    console.log(resultado)
    let user = document.getElementById("username").value
    if(user === "gustavo"){
        resultado.innerHTML = "Bem-vindo, " + user + "!"
    }else{
        resultado.innerHTML = "Usuário inválido."
    }
}

