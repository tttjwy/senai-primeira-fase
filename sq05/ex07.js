let diaria 
let valorTotal
let descontoDaAtendente = 0.1
let descontoDaAssociacao = 0.15
let multa = 150
diaria = Number(prompt("Quantos dias você vai ficar no hotel?"))
if (diaria <= 5) {
    valorTotal = diaria * 50
} else if (diaria >= 6 && diaria <= 10) {
    valorTotal = diaria * 90
} else {
    valorTotal = diaria * 100
}
alert("O valor total da sua estadia é: R$ " + (valorTotal + multa - (valorTotal * descontoDaAtendente) - (valorTotal * descontoDaAssociacao)))