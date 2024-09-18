import Usuario from "./Usuario.js";

const readline = require('readline-sync');

class RedeSocial{
    

    #paginaInicial(){
        console.log("")
        const opcao = readline.question("O que deseja fazer?\n1 - Criar conta\n2 - Logar");
        switch(opcao){
            case "1" :

        }
    }

    #cadastrarUsuario(){
        const nome = readline.question("Digite seu nome:");
        const email = readline.question("Digite seu email:");
        return novoUsuario = new Usuario(nome, email, senha);
    }

    #fazerLogin(email, senha){

    }
}

