class Usuario{
    static idBase = 0;
    id;
    #nome;
    #email;
    #senha;
    #seguidores;
    #amigos;

    constructor(nome, email, senha){
        this.id = Usuario.idBase + 1;
        this.#nome = nome;
        this.#email = email; 
        this.#senha = senha;
        this.#seguidores = 0;
        this.#amigos = [];
        Usuario.idBase++;
    }

    get email(){
        return this.#email;
    }
    
    get nome(){
        return this.#nome;
    }

    fazerLogin(email, senha){
        const result = {
            succes : true,
            message : ''
        };

        if(email !== this.#email){
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

    mostrarDados(){
        console.log('------------------');
        console.log(`Nome: ${this.#nome}\nE-mail: ${this.#email}\n${this.#seguidores} seguidores    ${this.#amigos.length} amigos`)
    }

    adicionarAmigo(amigoID){
        if(this.#amigos.includes(amigoID))
            return `Você já tem esse amigo na sua lista de amizades.`;

        this.#amigos.push(amigoID);
        return `Adicionado a sua lista de amizades!`;
    }

    removerAmigo(exAmigoId){
        if(!this.#amigos.includes(exAmigoId))
            return `Você não tem esse amigo na sua lista de amizades.`;

        const indexAmigo = this.#amigos.indexOf(exAmigoId);
        this.#amigos.splice(indexAmigo, 1);
        return `Removido a sua lista de amizades!`;
    }

    alterarSeguidores(qtdSeguidores){
        this.#seguidores += qtdSeguidores;
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