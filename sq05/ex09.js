let altura = Number(prompt("Digite sua altura: "))
let genero = prompt("Digite 1 para feminino ou 2 para masculino: ")
let pesoIdeal = Number
if (genero == "1") {
    pesoIdeal = (62.1 * altura) - 44.7
    alert("Seu peso ideal é " +pesoIdeal.toFixed(2))
} else if (genero == "2") {
    pesoIdeal = (72.7 * altura) - 58
    alert("Seu peso ideal é " +pesoIdeal.toFixed(2))
}