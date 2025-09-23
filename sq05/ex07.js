let diaria 
let dias 
let totalBruto, totalLiquido
let desconto10, desconto15, multa = 150

dias = Number(prompt("Quantos dias você ficou hospedado?"))
if (dias <= 5) {
    diaria = 100
} else if (dias >= 6 && dias <= 10) {
    diaria = 80
} else {
    diaria = 60
}
totalBruto = dias * diaria
desconto10 = totalBruto * 10 / 100
desconto15 = totalBruto * 15 / 100
totalLiquido = totalBruto - (desconto10 + desconto15) + multa
alert("Número de dias: " + dias + "\nDiária: R$ " + diaria + "\nTotal bruto: R$ " + totalBruto + "\nDesconto 10%: R$ " + desconto10 + "\nDesconto 15%: R$ " + desconto15 + "\nMulta: R$ " + multa + "\n================="+ "\nTotal líquido: R$ " + totalLiquido)