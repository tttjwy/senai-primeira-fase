// const numeros = [3, 5, 8, 10]
// const valoresDobrados = numeros.map(valor => valor * 2)
// console.log(valoresDobrados)
// console.log(numeros)

const usuarios = [
    {nome: "Gustavo", idade: 18},
    {nome: "Juan", idade:21},
    {nome: "Ale", idade: 21},
    {nome: "Jair", idade: 80}
]

const nomeUsuarios = usuarios.map(usuario => usuario.nome)
console.log(nomeUsuarios)

const idadeUsuarios = usuarios.map(usuario => usuario.idade)
for(let idade of idadeUsuarios){
    console.log(idade)
}




