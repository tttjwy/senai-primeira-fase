// 1. não adicionando o piu-piu pois a lista não está vazia;
let lista = ["Patolino", "Pernalonga"]
if (lista.length === 0){
    lista.push("Piu Piu")
}

// 2. adicionando o Frajola, e colocando na posição 0;
lista.unshift("Frajola")

//3. movendo o frajola para o final, já que existem dois membros;
if(lista.length >2 && lista.includes("Frajola")){
    lista = lista.filter(item => item !== "Frajola")
    lista.push("Frajola")
}

// 4. Verificando se há letras repetidas;
function letraRepetida(nome){
    const letras = {}
    for (let letra of nome.toLowerCase()){
        if(letras[letra]) return true
        letras[letra] = true
    }
    return false
}
const nomeComRepeticao = lista.filter(letraRepetida)

//5. filtrando personagens que não são gatos e aves.
const gatos = ["Frajola"]
const aves = ["Piu Piu"]
const naoGatoAve = lista.filter(
    nome => !gatos.includes(nome) && !aves.includes(nome)
)

console.log("Lista final: ", lista)
console.log("Com letra repetida: ", nomeComRepeticao)
console.log("Não gato nem ave: ", naoGatoAve)

