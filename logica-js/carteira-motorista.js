const prompt = require("prompt-sync")()
const idadeMinima = prompt("Digite a idade: ")
const cnh = prompt("Você possui CNH? (sim/não) ")
if(idadeMinima >= 18 && cnh === "sim"){
  console.log("Você pode dirigir.")
}else{
  console.log("Você não pode dirigir.")
}