const Usuario = require("./Usuario");
const readline = require('readline-sync');

class RedeSocial{
    static listaUsuarios = [];
    
    paginaInicial(){
        console.log("Bem vindo(a) a Rede Social!");
        let continuar = false;
        let usuario;
        let opcao;

        while(!continuar){
            opcao = readline.question("O que deseja fazer?\n1 - Criar conta\n2 - Logar\n3 - Sair\n");
            
            switch(opcao){
                case "1" :
                    usuario = this.#cadastrarUsuario();
                    break;
                case "2":
                    usuario = this.#fazerLogin();
                    if(usuario !== null)
                        this.#navegacao(usuario);                
                    break;
                case "3":
                    continuar = true;
                    console.log("Obrigado! Volte sempre!");
                    break;
                default:
                    console.log("Opção inválida! Digite novamente.");
            }
        }           
    }

    #navegacao(usuario){
        let opcaoNav;
        let continuar = false;
        while(!continuar){
           opcaoNav = readline.question("O que deseja fazer?\n1 - Visualizar seu perfil\n2 - Adicionar amigo\n3 - Remover amigo\n4 - Seguir Pessoa\n5 - Alterar e-mail\n6 - Sair da conta\n");

           switch(opcaoNav){
            case "1" :
                usuario.mostrarDados();
                break;
            case "2":
                this.#adicionarAmigo(usuario);
                break;
            case "3":
               this.#removerAmigo(usuario);
               break;
            case "4":
                this.#seguirPessoa();
                break;
            case "5":
                this.#trocarEmail(usuario);
                break;
            case "6":
                continuar = true;
                break;
            default:
                console.log("Opção inválida! Digite novamente.");
        }

        } 
    }

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
        let result;
        const usuarioExistente = this.#procurarUsuario('email', email);

        if(usuarioExistente === null){
            const senha = readline.question("Digite uma senha: ");
            const novoUsuario = new Usuario(nome, email, senha);
            RedeSocial.listaUsuarios.push(novoUsuario);
            console.log(`Bem vindo(a), ${novoUsuario.nome}!`);
            return novoUsuario;
        }

        console.log('Já existe uma conta cadastrada com esse e-mail. Clique em "Logar" para prosseguir.');
        return null;
    }

    #fazerLogin(){
        const email = readline.question("Digite seu email: ");
        let usuarioEncontrado = null;
        let iCont;
        let result;

        for(iCont = 0; iCont < RedeSocial.listaUsuarios.length && usuarioEncontrado ===  null; iCont++)
            if(RedeSocial.listaUsuarios[iCont].email === email)
                usuarioEncontrado = RedeSocial.listaUsuarios[iCont];

        if(usuarioEncontrado !== null){
            const senha = readline.question("Digite uma senha: ");
            const resultado = usuarioEncontrado.fazerLogin(email, senha);
            console.log(resultado.message);
            return usuarioEncontrado;
        }

        console.log('Nenhuma pessoa com esse e-mail foi encontrada. Clique em  "Criar conta".');
        return null;
    }

    #adicionarAmigo(usuario){
        const nome = readline.question("Digite o nome do amigo: ");        
        let usuarioEncontrado = this.#procurarUsuario("nome", nome);
        if(usuarioEncontrado !== null)
            return usuario.adicionarAmigo(usuarioEncontrado.id);
        return 'Nenhuma pessoa com esse nome foi encontrada.';
    }

    #removerAmigo(usuario){
        const nome = readline.question("Digite o nome do amigo: ");        
        let usuarioEncontrado = this.#procurarUsuario("nome", nome);
        if(usuarioEncontrado !== null)
            return usuario.removerAmigo(usuarioEncontrado.id);

        return 'Nenhuma pessoa com esse nome foi encontrada.';
    }

    #seguirPessoa(){
        const nome = readline.question("Digite o nome da pessoa que deseja seguir: ");        
        let usuarioEncontrado = this.#procurarUsuario("nome", nome);
        if(usuarioEncontrado !== null){
            usuarioEncontrado.alterarSeguidores(1);
            return `Agora você segue ${nome}!`;
        }
        return 'Nenhuma pessoa com esse nome foi encontrada.';
    }

    #trocarEmail(usuario){
        const email = readline.question("Digite o novo email: ");
        const emailExiste = this.#procurarUsuario("email",email);

        if(emailExiste)
            return "Já existe uma conta cadastrada com esse e-mail."

        return usuario.trocarEmail(email);
    }
}

module.exports = RedeSocial;