const Usuario = require("./Usuario");
const readline = require('readline-sync');

class RedeSocial{
    static listaUsuarios = [];
    static sair = false; 
    
    paginaInicial(){
        console.log("Bem vindo(a) a Rede Social!");
        let continuar = false;
        let usuario;
        let resultado;
        let opcao;

        while(!continuar){
            opcao = readline.question("O que deseja fazer?\n1 - Criar conta\n2 - Logar\n3 - Sair\n");
            
            switch(opcao){
                case "1" :
                    resultado = this.#cadastrarUsuario();
                    usuario = resultado.usuario;
                    break;
                case "2":
                    resultado = this.#fazerLogin();
                    continuar = resultado.sucess;
                    usuario = resultado.usuario;
                    break;
                case "3":
                    continuar = true;
                    RedeSocial.sair = true;
                    console.log("Obrigado! Volte sempre!");
                    break;
                default:
                    console.log("Opção inválida! Digite novamente.");
            }
        }

        // if(!RedeSocial.sair)
        //     this.#navegacao(usuario);
    }

    // #navegacao(usuario){
    //     let opcaoNav;
    //     let continuar = false;

    //     while(!continuar){
    //        opcaoNav = readline.question("O que deseja fazer?\n1 - Adicionar amigo\n2 - Remover amigo\n3 - Seguir\n4 - Seguir Pessoa\n5 - Alterar e-mail\n6 - Sair da conta\n");

    //        switch(opcaoNav){
    //         case "1" :
    //             resultado = this.#cadastrarUsuario();
    //             break;
    //         case "2":
    //             break;
    //         case "3":
    //             continuar = true;
    //             RedeSocial.sair = true;
    //         default:
    //             console.log("Opção inválida! Digite novamente.");
    //     }

    //     } 
    // }

    #procurarUsuario(parametro, paramentro2){
        let iCont;
        let usuarioEncontrado = null;

        for(iCont = 0; iCont < RedeSocial.listaUsuarios.length && usuarioEncontrado ===  null; iCont++)
            if(RedeSocial.listaUsuarios[iCont][parametro] === paramentro2)
                usuarioEncontrado = RedeSocial.listaUsuarios[iCont];

        return usuarioEncontrado;
    }

    #cadastrarUsuario(){
        const nome = readline.question("Digite seu nome: ");
        const email = readline.question("Digite seu email: ");

        const usuarioExistente = this.#procurarUsuario('email', email);

        if(usuarioExistente === null){
            const senha = readline.question("Digite uma senha: ");
            const novoUsuario = new Usuario(nome, email, senha);
            RedeSocial.listaUsuarios.push(novoUsuario);
            console.log(`Bem vindo(a), ${novoUsuario.nome}!`);
            return{
                sucess : true,
                usuario : novoUsuario
            };
        }

        console.log('Já existe uma conta cadastrada com esse e-mail. Clique em "Logar" para prosseguir.');
        return{
            sucess : false,
            usuario : null
        };
    }

    #fazerLogin(){
        const email = readline.question("Digite seu email: ");
        let usuarioEncontrado = null;
        let iCont;

        for(iCont = 0; iCont < RedeSocial.listaUsuarios.length && usuarioEncontrado ===  null; iCont++)
            if(RedeSocial.listaUsuarios[iCont].email === email)
                usuarioEncontrado = RedeSocial.listaUsuarios[iCont];

        if(usuarioEncontrado !== null){
            const senha = readline.question("Digite uma senha: ");
            const resultado = usuarioEncontrado.fazerLogin(email, senha);
            console.log(resultado.message);
            return{
                sucess : resultado.sucess,
                usuario : usuarioEncontrado
            };
        }

        console.log('Nenhuma pessoa com esse e-mail foi encontrada. Clique em  "Criar conta".');
        return{
            sucess : false,
            usuario : null
        };
    }

    #adicionarAmigo(usuario){
        const nome = readline.question("Digite o nome do amigo: ");        
        let usuarioEncontrado = this.#procurarUsuario("nome", nome);
        if(usuarioEncontrado !== null)
            usuario.adicionarAmigo(usuarioEncontrado);

    }
}

module.exports = RedeSocial;