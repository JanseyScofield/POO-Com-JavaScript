class Usuario{
    static idBase = 0;
    id;
    #nome;
    #email;
    #senha;
    #seguidores;
    #amigos;

    constructor(nome, email, senha){
        this.id = idBase + 1;
        this.#nome = nome;
        this.#email = email; 
        this.#senha = senha;
        this.#seguidores = 0;
        this.#amigos = [];
        idBase++;
    }

    fazerLogin(email, senha){
        const result = {
            succes : true,
            message : ''
        };

        if(email !== this.email){
            result.succes = false,
            result.message += 'Email incorreto!'
        }
        if(senha !== this.#senha){
            result.succes = false;
            result.message += 'Senha incorreta!'
        }
        
        if(result.succes)
            result.message = "Seja bem vindo(a)!";
        
        return result;
    }

    mostarDados(){
        console.log('------------------');
        console.log(`Nome: ${this.#nome}\nE-mail: ${this.#email}\n${this.#seguidores} seguidores    ${this.#amigos.length} amigos`)
    }

    adicionarAmigo(amigo){
        if(this.#amigos.includes(amigo))
            return `Você já tem ${amigo.nome} na sua lista de amizades.`;

        this.#amigos.push(amigo);
        return `${amigo.nome} foi adicionado a sua lista de amizades!`;
    }

    removerAmigo(exAmigo){
        if(!this.#amigos.includes(exAmigo))
            return `Você não tem ${exAmigo.nome} na sua lista de amizades.`;

        const indexAmigo = this.#amigos.indexOf(exAmigo);
        this.#amigos.splice(indexAmigo, 1);
        return `${exAmigo.nome} foi removido a sua lista de amizades!`;
    }

    alterarSeguidores(qtdSeguidores){
        this.#seguidores += qtdSeguidores;
        return `Quantidade de seguidores: ${this.#seguidores}`;
    }

    trocarEmail(novoEmail){
        if(this.#email === novoEmail)
            return `Você já possui esse e-mail cadastrado!`;

        const antigoEmail = this.#email;
        this.#email = novoEmail;

        return `E-mail alterado de ${antigoEmail} para ${novoEmail} com sucesso!`;
    }

}

module.exports = Usuario