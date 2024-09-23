const Carne = require('./Produtos/Carne');
const Ovos = require('./Produtos/Ovos');
const readline = require('readline-sync');

class Mercado{
    #nome;
    #descricao;
    #listaProdutos;

    constructor(nome, descricao, listaProdutos = []){
        if(nome === null || nome === '')
            throw new Error("O nome do supermercado não pode ser vazio ou nulo.");
        if(descricao === null || descricao === '')
            throw new Error("A descrição do supermercado não pode ser vazio ou nulo.");
        this.#nome = nome;
        this.#descricao = descricao;
        this.#listaProdutos = listaProdutos;
    }

    mostarProdutos(){
        if(this.#listaProdutos.length === 0)
            throw new Error("Não há produtos no supermercado. Adicione para visualizar.");
        let iCont;
        for(iCont = 0; iCont < this.#listaProdutos.length; iCont++){
            console.log(`Item ${iCont + 1}:`);
            this.#listaProdutos[iCont].informacoesItem();
        }
    }

    adicionarProdutos(){
        try{
            const nome = readline.question("Digite o nome do produto:");
            const preco = parseFloat(readline.question("Digite o valor do produto:"));
            const qtdEstoque = parseInt(readline.question("Digite a quantidade em estoque do produto:"));
            const tipo = readline.question("Digite o tipo do produto:");
            const fabricante = readline.question("Digite o fabricante do produto:");
            const lote = parseInt(readline.question("Digite o lote do produto:"));
            const dataVencimentoStr = readline.question("Digite a data de vencimento do produto.");
            const dataVencimento = new Date(dataVencimentoStr);
        }
        catch(erro){
            console.log("Erro ao cadastrar o produto: " + erro.message);
        }

        const produto = readline.question("1 - Carne\n2 - Ovos");

        switch(produto){
            case "1":
                try{
                    const peso = readline.question("Digite o valor do peso da carne: ");
                    const novaCarne = new Carne(nome, preco, qtdEstoque, tipo, fabricante, lote, dataVencimento, peso);
                    this.#listaProdutos.push(novaCarne);
                    console.log("Carne cadastrada com sucesso!");
                }
                catch(erro){
                    console.log("Erro para cadastrar a carne: " + erro.message);
                }
                finally{
                    break;
                }
                case "2":
                    try{
                        const qtdPlaca = readline.question("Digite a quantidade de ovos na placa: ");
                        const novaPlacaOvos = new Carne(nome, preco, qtdEstoque, tipo, fabricante, lote, dataVencimento, qtdPlaca);
                        this.#listaProdutos.push(novaPlacaOvos);
                        console.log("Placa de ovos cadastrada com sucesso!");
                    }
                    catch(erro){
                        console.log("Erro para cadastrar a palca de ovos: " + erro.message);
                    }
                    finally{
                        break;
                    }
                default:
                    console.log("Opção inválida. Digite novamente.");
        }
    }

    get nome(){
        return this.#nome;
    }

    get descricao(){
        return this.#descricao;
    }

}