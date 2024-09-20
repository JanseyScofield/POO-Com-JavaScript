class Planta{
    #nome;
    #altura;
    #cor;
    #temMecanismoDef;

    constructor(nome, altura, cor, temMecanismoDef = false){
        this.#nome = nome;
        this.#altura = altura;
        this.#cor = cor;
        this.#temMecanismoDef = temMecanismoDef;
    }
}