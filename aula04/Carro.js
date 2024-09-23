class Carro {
    constructor(marca, modelo, ano) {
      if (!marca || typeof marca !== 'string') {
        throw new Error("Marca inválida. Tipo não é uma string.");
      }
      if (!modelo || typeof modelo !== 'string') {
        throw new Error("Modelo inválido. Tipo não é uma string.");
      }
      if (!ano || typeof ano !== 'number' || ano < 1886) {
        throw new Error("Ano inválido, deve ser um número maior que 1886.");
      }
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0;
    }
    acelerar(qtd) {
      if (typeof qtd !== 'number' || qtd <= 0) {
        throw new TypeError("A quantidade para acelerar deve ser um número positivo.");
      }
      this.velocidade += qtd;
      console.log(`${this.marca} ${this.modelo} acelerou para ${this.velocidade} kmh.`);
    }
}

function controlador() {
    try {
      const carro = new Carro('Toyota', 'Corolla', 2021);
      carro.acelerar(-50);
    } catch (error) {
      console.error("Erro capturado: " + error.message);
    } finally {
      console.log("Carro criado com sucesso.");
    }
  }
  
controlador();
  