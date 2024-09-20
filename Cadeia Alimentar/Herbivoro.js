
const Animal = require("./Animal");

class Herbivoro extends Animal{
    #plantasComestiveis;

    constructor(nome, peso, cor, plantasComestiveis){
        super(nome, peso, altura,cor);
        this.#plantasComestiveis = plantasComestiveis;
    }
    
    fugir(pesoPredador){
        const mudarChance = pesoPredador > this.peso? 0.1 : -0.1;
        const chance = (Math.random()) + mudarChance;
        return chance > 0.5;
    }

    alimentar(planta){
        if(this.#plantasComestiveis.include(planta.nome)){
            if(planta.altura > this.altura)
                console.log(`${planta.nome} é muito grande para ${this.nome} comer.`);
            else if(planta.temMecanismoDef){
                console.log(`${planta.nome} tem mecanismo de defesa!`);
                this.morrer();
            }
            else
                console.log(`${this.nome} está se alimentando de ${planta.nome}.`);
        }
        else
            console.log(`${planta.nome} não está na lista de plantas comestiveis de ${this.nome}.`);
    }
}