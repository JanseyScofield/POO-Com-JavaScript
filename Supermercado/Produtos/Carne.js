const Itens = require('../Itens/Itens');
const ItensErro = require('../ItensErro')

class Carne extends Itens{
    #peso;

    constructor(nome, preco, qtdEstoque, tipo, fabricante, lote,dataVencimento, peso){
        super(nome, preco, qtdEstoque, tipo, fabricante, lote,dataVencimento);
        if(peso === NaN)
            throw new  ItensErro("O peso da carne deve ser numérico.");
        if(peso <= 0)
            throw new ItensErro("O peso da carne não pode ser menor ou igual a 0 kg.");
        this.#peso = peso;
    }

    informacoesItem(){
        super.informacoesItem();
        console.log(`Peso da carne: ${this.#peso}`);
    }

    get peso(){
        return this.#peso;
    }

    set peso(novoPeso){
        if(novaPeso <= 0)
            throw new ItensErro("O peso da carne não pode ser menor ou igual a 0 kg.");
        this.#peso = novoPeso;
        return "Peso da carne alterado com sucesso!";
    }
}

module.exports = Carne;