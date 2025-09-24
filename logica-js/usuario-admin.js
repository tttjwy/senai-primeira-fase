const prompt = require("prompt-sync")()
const usuario = {
    nome:"",
    senha:""
}
usuario.nome = prompt("Digite o nome do usuário: ")
usuario.senha = prompt("Digite a senha: ")
if(usuario.nome === "admin" && usuario.senha === "12345"){
  console.log("Acesso permitido.")
}else if(usuario.nome !== "admin" && usuario.senha === "12345"){
  console.log("Usuário não encontrado.")
}else{
  console.log("Senha incorreta.")
}