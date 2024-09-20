const Animal = require("./Animal");

class Carnivoro extends Animal{
    #presas;

    constructor(nome, peso, altura,cor, presas){
        super(nome, peso, altura, cor);
        this.#presas = presas;
    }

    alimentar(presa){
        if(this.#presas.include(presa.nome) && presa instanceof Animal){
            const presaFugiu = presa.fugir(this.peso);
            if(!presaFugiu){
                console.log(`${this._nome} está se alimentando de ${presa.nome}`);
                presa.morrer();
            }
            else
                console.log(`${presa.nome} conseguiu fugir!`);
        }
        else
            console.log(`${presa.nome} não está presente na lista de presas de ${this._nome}`);        
    }
}