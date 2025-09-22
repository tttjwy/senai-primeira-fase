let maca = Number(prompt("Digite a quantidade de maçãs: "))
if (maca < 12) {
    alert(`Juca comprou ${maca} maçãs, e o preço total é: R$ ${(maca * 0.30).toFixed(2)}`)
} else if (maca >= 12) {
    alert(`Juca comprou ${maca} maçãs, e o preço total é: R$ ${(maca * 0.25).toFixed(2)}`)
}
