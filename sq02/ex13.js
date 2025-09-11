let idade
idade = Number(prompt("Digite sua idade: "))

if (idade >= 18) {
    alert("Você pode votar")
} else if (idade < 16) {
    alert("Você não pode votar")
} else {
    alert("O voto é opcional para você")
}
