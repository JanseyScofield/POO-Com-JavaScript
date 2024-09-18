class Veiculo {
    _marca;
    constructor(marca) {
      this._marca = marca;
    }
    acelerar() {
      console.log(`${this._marca} está acelerando.`);
    }
  }
  class Carro extends Veiculo { // Herança (veremos mais futuramente no curso)
    constructor(marca) {
      super(marca); // Usa o construtor do pai
    }
    exibirMarca() {
      console.log(`A marca do carro é ${this._marca}`);
    }
}

const carro = new Carro('Ford');
carro.acelerar();
carro.exibirMarca();