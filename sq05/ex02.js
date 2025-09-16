let numeroA = Number(prompt("Digite o primeiro número: "))
let numeroB = Number(prompt("Digite o segundo número: "))
if (numeroA > numeroB) {
    alert(`O número ${numeroA} é maior que ${numeroB}`)
} else if (numeroA < numeroB) {
    alert(`O número ${numeroB} é maior que ${numeroA}`)
} else {
    alert("Os números são iguais.")
}
