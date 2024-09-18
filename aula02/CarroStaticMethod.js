class Carro {
    marca;
    ltsAgua;
    constructor(marca) {
      this.marca = marca;
      this.ltsAgua = 0;
    }
    colocaAgua(lts) {
      console.log(`Colocando ${lts} litros de água no radiador do ${this.marca}.`);
      this.ltsAgua += lts;
    }
    acelerar() {
      console.log(`${this.marca} está acelerando.`);
    }
    static valorPadraoAgua() { // cria um método que é usado PELA CLASSE (não pelas instâncias!!)
      console.log("Colocando o valor padrão de água no radiador (5 litros).");
      return 5;
    }
}

const carro1 = new Carro('Toyota');
carro1.colocaAgua(3);
console.log(`${carro1.marca} tem ${carro1.ltsAgua} litros de água.`);

const aguaPadrao = Carro.valorPadraoAgua();  

const carro2 = new Carro('Nissan');
carro2.colocaAgua(aguaPadrao);
console.log(`${carro2.marca} tem ${carro2.ltsAgua} litros de água.`);