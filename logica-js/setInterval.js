// setInterval(() => {
//   console.log('Executei');
// }, 2000);

const prompt = require('prompt-sync')();

let contadorInicial = Number(prompt('Digite o número inicial: '));
let contadorFinal = Number(prompt('Digite o número final: '));

let intervalo = setInterval(() => {
    contadorInicial -= 10;
    console.log(contadorInicial);
    if(contadorInicial === contadorFinal) {
        clearInterval(intervalo)
    }
}, 2000);