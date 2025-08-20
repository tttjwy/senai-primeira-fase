programa {
  funcao inicio() {
    real nota1, nota2, nota3, media, frequencia
    nota1= 7.5
    nota2= 9
    nota3= 8
    media = (nota1 + nota2 + nota3) / 3
    frequencia = 0.9
    escreva(media , "\n")
    se (media >= 7 e frequencia >= 0.75){
      escreva("Aprovado")
    } senao {
      escreva("Perdeu malandro")

    }

  }
}
