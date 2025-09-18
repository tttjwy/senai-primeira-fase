let visitantesNaArea = prompt("Há visitantes na área? (sim/não) ")
let horaAtual = prompt("Qual é a hora atual? ")
if (visitantesNaArea == "não" && horaAtual >= 8 && horaAtual < 18) {
    alert("")
} else {
    alert("Acesso negado")
}