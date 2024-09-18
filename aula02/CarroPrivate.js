class Carro {
  #marca; //“#” indica um membro privado da classe
  #ano;
  constructor(marca, ano) { // constrói-se um carro, com marca e ano (privados)
    this.#marca = marca;
    this.#ano = ano;
  }
  get modelo() { // Por serem privados, só conseguimos resgatar e alterar por meio de métodos
    return this.#marca;
  }
  set modelo(novaMarca) {
    this.#marca = novaMarca;
  }
}
const carro1 = new Carro('Kicks', 2018);
console.log(carro1.modelo);

carro1.modelo ='EcoSport';
console.log(carro1.modelo);