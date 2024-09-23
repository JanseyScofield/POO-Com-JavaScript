const ItensErro = require('ItensErro');

class Itens{
    _nome
    _preco;
    _qtdEstoque;
    _tipo;
    _fabricante;
    _lote;
    _dataVencimento;

    constructor(nome, preco, qtdEstoque, tipo, fabricante, lote,dataVencimento){
        let mensagemErro = "";

        if(nome === null || nome === '')
            mensagemErro += "O nome do item não pode estar nulo ou vazio.\n";
        if(preco === NaN)
            mensagemErro += "O preço deve ser numérico.\n";
        else if(preco <= 0)
            mensagemErro += "O preço não pode ser menor ou igual a 0.\n";
        if(preco === NaN)
            mensagemErro += "A quantidade em estoque deve ser numérico.\n";
        else if(preco < 0)
            mensagemErro += "A quantidade em estoque não pode ser menor que 0.\n";
        if(tipo === null || tipo === '')
            mensagemErro += "O tipo do item não pode estar nulo ou vazio.\n";
        if(fabricante === null || fabricante === '')
            fabricante += "O fabricante do item não pode estar nulo ou vazio.\n";
        if(lote === NaN)
            mensagemErro += "O lote deve ser numérico.\n";
        else if(lote < 0)
            mensagemErro += "O lote não pode ser menor que 0.\n";       
        if(new Date() > dataVencimento)
            mensagemErro += "O produto está vencido."
        if(mensagemErro.length > 0)
                throw new ItensErro(mensagemErro);
        
        this._nome = nome;
        this._preco = preco;
        this._qtdEstoque = qtdEstoque;
        this._tipo = tipo;
        this._fabricante = fabricante;
        this._lote = lote;
        this._dataVencimento = dataVencimento;
    }

    c(){
        console.log(`Nome: ${this._nome}\nPreço: R$ ${this._preco}\nQuantidade em estoque: ${this._qtdEstoque}\nTipo: ${this._tipo}\nFabricante: ${this._fabricante}\nLote: ${this._lote}\nData de Vencimento ${this._dataVencimento}`);
    }

    get nome(){
        return this._nome;
    }

    get preco(){
        return this._preco;
    }

    set preco(valor){
        if(valor <= 0)
            throw new ItensErro("O valor do item não pode ser menor ou igual a 0.");
        this._preco = valor;
        return "Preço atualizado com sucesso!";
    }

    get qtdEstoque(){
        return this._qtdEstoque;
    }

    set qtdEstoque(qtd){
        const novaQtd = this._qtdEstoque + qtd;
        if(novaQtd < 0)
            throw new ItensErro("A quantidade de estoque não pode ser menor que 0.");
        this._qtdEstoque = novaQtd;
        return "Quantidade em estoque alterada com sucesso!";
    }

}

module.exports = Itens;