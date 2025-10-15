// setTimeout(() => {
//     console.log('Executei depois de 3 segundo');
// }, 3000)

function saudacao(){
    console.log(`Olá, seja bem vindo!`)
}

function soma(){
    console.log(`Resultado da soma: ${10+5}`)
}

function imprimeDado(){
    console.log(`imprimir`)
}

setTimeout(soma, 2000)
setTimeout(imprimeDado, 5000)
saudacao()