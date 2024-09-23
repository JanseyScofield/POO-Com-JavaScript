const Itens = require('../Itens/Itens');
const ItensErro = require('../ItensErro')

class Ovos extends Itens{
    #qtdPlaca;

    constructor(nome, preco, qtdEstoque, tipo, fabricante, lote,dataVencimento, qtdPlaca){
        super(nome, preco, qtdEstoque, tipo, fabricante, lote,dataVencimento);
        if(qtdPlaca === NaN)
                throw new  ItensErro("A quantidade de ovos na placa deve ser numérico.");
        if(qtdPlaca <= 6)
            throw new ItensErro("A placa de ovos não pode ter menos de 6 ovos.");
        this.#qtdPlaca = qtdPlaca;
    }

    informacoesItem(){
        super.informacoesItem();
        console.log(`Quantidade de ovos na placa: ${this.#qtdPlaca}`);
    }

    get qtdPlaca(){
        return this.#qtdPlaca;
    }

    set qtdPlaca(novaQtd){
        if(novaQtd <= 6)
            throw new ItensErro("A placa de ovos não pode ter menos de 6 ovos.");
        this.#qtdPlaca = qtdPlaca;
        return "Quantidade de ovos na placa alterado com sucesso!";
    }
}

module.exports = Ovos;