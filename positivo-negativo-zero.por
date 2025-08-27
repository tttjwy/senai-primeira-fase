programa {
  funcao inicio() {
    real numero1
    escreva("Digite um número ")
    leia(numero1)
    
    se(numero1>0){
      escreva("Número positivo")
    } senao se(numero1<0){
      escreva("Número negativo")
    } senao {
      escreva("Zero")
    }
  }
}
