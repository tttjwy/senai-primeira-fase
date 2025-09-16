programa {
  inclua biblioteca Matematica
  funcao inicio() {
    //Exercícios simples do beecrowd
    //exercicio 1
    //real a, b, media
    //escreva("Nota A: ")
    //leia(a)
    //escreva("Nota B: ")
    //leia(b)
    //media = (a * 3.5 + b * 7.5) / (3.5 + 7.5)
    //media = Matematica.arredondar(media,5)
    //limpa()
    //escreva("Media: " + media + "\n")

    //exercicio 2
    //real a, b, c, media
    //escreva("Nota A: ")
    //leia(a)
    //escreva("Nota B: ")
    //leia(b)
    //escreva("Nota C: ")
    //leia(c)
    //media = (a * 2 + b * 3 + c * 5) / (2 + 3 + 5)
    //limpa()
    //escreva("Media: " + media)

    //exercicio 3
    //inteiro funcionario, horas
    //real valor_por_hora, salario
    //escreva("Número do funcionario: ")
    //leia(funcionario)
    //escreva("Horas trabalhadas: ")
    //leia(horas)
    //escreva("Recebe por hora R$: ")
    //leia(valor_por_hora)
    //limpa()
    //salario = valor_por_hora * horas
    //escreva("Número " + funcionario)
    //escreva("\n")
    //escreva("Salario R$: " + salario)

    //exercicio 4
    //cadeia nomeDoFuncionario
    //real salario_fixo, salario_total, vendas
    //escreva("Digite o nome do funcionario: ")
    //leia(nomeDoFuncionario)
    //escreva("Digite o salário do funcionario: R$: ")
    //leia(salario_fixo)
    //escreva("Digite o número de vendas totais: R$: ")
    //leia(vendas)
    //salario_total = salario_fixo + (vendas * 0.15)
    //salario_total = Matematica.arredondar(salario_total,2)
    //limpa()
    //escreva("Total: " + salario_total)

    //exercicio 5
    //inteiro codigo_do_produto1, codigo_do_produto2, quantos_pro_1, quantos_pro_2
    //real preco1, preco2, total
    //escreva("Código 1: ")
    //leia(codigo_do_produto1)
    //escreva("Código 2: ")
    //leia(codigo_do_produto2)
    //escreva("Unidades do produto 1: ")
    //leia(quantos_pro_1)
    //escreva("Unidades do produto 2: ")
    //leia(quantos_pro_2)
    //escreva("Preço do produto 1 R$: ")
    //leia(preco1)
    //escreva("Preço do produto 2 R$: ")
    //leia(preco2)
    //limpa()
    //total = (preco1*quantos_pro_1) + (preco2*quantos_pro_2)
    //total = Matematica.arredondar(total,2)
    //escreva("Total a pagar: R$: " + total)

    //exercicio 6
    //inteiro km
    //real combustivel, km_por_litro
    //escreva("Kilometros rodados: ")
    //leia(km)
    //escreva("Litros de gasolina gasta: ")
    //leia(combustivel)
    //km_por_litro = km / combustivel
    //km_por_litro = Matematica.arredondar(km_por_litro,3)
    //limpa()
    //escreva("km/l: " + km_por_litro)

    //exercicio 7
    inteiro valor, valorOriginal, notas100, notas50, notas20, notas10, notas05, notas02, notas01
    escreva("Digite o valor: ")
    leia(valorOriginal)
    valor = valorOriginal
    notas100=valor/100
    valor=valor%100
    notas50=valor/50
    valor=valor%50
    notas20=valor/20
    valor=valor%20
    notas10=valor/10
    valor=valor%10
    notas05=valor/5
    valor=valor%5
    notas02=valor/2
    valor=valor%2
    notas01=valor
    escreva("\nValor: R$" + valorOriginal)
    escreva("\nNotas R$100: " +notas100) 
    escreva("\nNotas R$50: " +notas50) 
    escreva("\nNotas R$20: " +notas20) 
    escreva("\nNotas R$10: " +notas10) 
    escreva("\nNotas R$5: " +notas05) 
    escreva("\nNotas R$2: " +notas02) 
    escreva("\nNotas R$1: " +notas01)


  }
}
