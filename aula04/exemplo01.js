const erro = new Error("Algo deu errado!"); // criação de um novo erro
console.error(erro); // apenas outro nome para console.log
console.log(erro.message) // acesso apenas a mensagem do erro