// let usuario

// function cadastrarUsuario(){
//     console.log("Cadastrou o usuário")
//     usuario = document.getElementById("inputUsuario").value
//     document.getElementById("inputUsuario").value = ""
//     document.getElementById("resultado").innerHTML = "Usuário " + usuario + " cadastrado com sucesso"
// }
    
// function consumoCombustivel(){
//     let distancia = document.getElementById("inputDistancia").value
//     let litros = document.getElementById("inputCombustivel").value
//     let consumo = distancia / litros
//     document.getElementById("resultado").innerHTML = "O consumo médio é de " + consumo.toFixed(2) + " km/l"
// }

// function salarioTotal(){
//     let salario = document.getElementById("inputSalarioHora").value
//     let horas = document.getElementById("inputHoras").value
//     let valorHora = salario * horas
//     document.getElementById("resultado").innerHTML = "O valor do salário total é de R$ " + valorHora.toFixed(2)
// }

// function MediaPonderada(){
//     let nota1 = parseFloat(document.getElementById("inputNota1").value)
//     let nota2 = parseFloat(document.getElementById("inputNota2").value)
//     let nota3 = parseFloat(document.getElementById("inputNota3").value)
//    document.getElementById("resultado").innerHTML = "A média ponderada é de " + (nota1*2 + nota2*3 + nota3*5) / (2 + 3 + 5)     
// }

// function MediaPonderada(){
//     let nota1 = parseFloat(document.getElementById("inputNota1").value)
//    let nota2 = parseFloat(document.getElementById("inputNota2").value)
//   document.getElementById("resultado").innerHTML = "A média ponderada é de " + (nota1*3.5 + nota2*7.5) / (3.5 + 7.5)     
// }

function Porco(){
    let produtoX = document.getElementById("inputProdutoX").value
    let moeda1 = document.getElementById("inputMoedas1").value
    let moeda050 = document.getElementById("inputMoedas050").value
    let moeda025 = document.getElementById("inputMoedas025").value
    let moeda010 = document.getElementById("inputMoedas010").value
    let moeda005 = document.getElementById("inputMoedas005").value
    let total = (moeda1 * 1) + (moeda050 * 0.50) + (moeda025 * 0.25) + (moeda010 * 0.10) + (moeda005 * 0.05)   
    if(total >= produtoX){
        document.getElementById("resultado").innerHTML = `O produto ${produtoX}R$ cabe dentro do orçamento de ${total.toFixed(2)} moedas`
    } else {
        document.getElementById("resultado").innerHTML = `O produto ${produtoX}R$ não cabe dentro do orçamento de ${total.toFixed(2)} moedas`
    }
}
