class Animal{
    _nome;
    _peso;
    _altura;
    _cor;

    constructor(nome, peso, altura, cor){
        this._nome = nome
        this._peso = peso;
        this._altura = altura;
        this._cor = cor;
    }

    get nome(){
        return this._nome;
    }

    get peso(){
        return this._peso;
    }
    
    get altura(){
        return this._altura;
    }

    get cor(){
        return this._cor;
    }

    locomover(){
        console.log(`${this._nome} está se movendo.`);
    }

    morrer(){
        console.log(`${this._nome} morreu.`);
    }

    alimentar(){
        throw new Error;
    }
}

module.exports = Animal;