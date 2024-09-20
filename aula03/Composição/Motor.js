class Motor {
    #potencia;
    #marca;
    #ligado = false;
  
    constructor(potencia, marca) {
      this.#potencia = potencia;
      this.#marca = marca;
    }
  
    get potencia() {
      return this.#potencia;
    }
  
    get marca() {
      return this.#marca;
    }
  
    get ligado() {
      return this.#ligado;
    }
  
    ligar() {
      this.#ligado = true;
      console.log("Motor Ligado");
    }
  
    desligar() {
      this.#ligado = false;
      console.log("Motor Desligado");
    }
}

module.exports = Motor;