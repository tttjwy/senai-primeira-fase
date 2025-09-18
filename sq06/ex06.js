let crachaValido = prompt("Seu crachá está válido? (sim/não) ")
let digitalReconhecida = prompt("Sua digital está registrada no sistema? (sim/não) ")
if (crachaValido == "sim" && digitalReconhecida == "sim") {
    alert("Acesso liberado ao Centro de comando")
} else if (crachaValido == "não" || digitalReconhecida == "sim") {
    alert("Crachá inválido. Dirija-se à recepção")
} else if (crachaValido == "sim" || digitalReconhecida == "não") {
    alert("Falha na digital. Tente novamente ou chame o suporte")
} else {
    alert("Acesso negado. Verifique sua identificação")
}