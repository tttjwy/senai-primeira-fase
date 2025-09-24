const prompt = require("prompt-sync")()

const notaFinal = parseFloat(prompt("Digite a nota final: "))
const frequencia = parseFloat(prompt("Digite a frequencia: "))
if(notaFinal >= 7 && frequencia >= 8){
  console.log(`Parabéns, você foi aprovado, sua nota foi ${notaFinal} e sua frequencia foi o suficiente`)
}else if(notaFinal < 7 && frequencia >= 8){
    console.log(`Você foi reprovado, sua nota foi insuficiente`)
}else if(notaFinal >= 7 && frequencia < 8){
    console.log(`Você foi reprovado, sua frequencia foi insuficiente`)
}else{
    console.log(`Você foi reprovado, sua nota e frequencia foram insuficientes`)
}
    
