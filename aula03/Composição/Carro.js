const Motor = require("./Motor");

class Carro {
    cor;
    marca;
    modelo;
    #motor;
  
    constructor(cor, marca, modelo, potencia) {
      this.cor = cor;
      this.marca = marca;
      this.modelo = modelo;
      this.#motor = new Motor(potencia, marca);
    }
  
    dirigir() {
      if (!this.#motor.ligado) {
        console.log("Ligando o motor");
        this.#motor.ligar();
      }
      console.log("Dirigindo...");
    }
  
    parar() {
      if (this.#motor.ligado) {
        console.log("Desligando o motor");
        this.#motor.desligar();
      }
      console.log("Carro parado.");
    }
  }
  