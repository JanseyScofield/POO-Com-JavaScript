class Lampada {
    estado = false;
    marca;
    cor;
    potencia;
  
    constructor(marca, cor, potencia) {
      this.marca = marca;
      this.cor = cor;
      this.potencia = potencia;
    }
  
    ligar() {
      this.estado = true;
      console.log("Lâmpada ligada!");
    }
  
    desligar() {
      this.estado = false;
      console.log("Lâmpada desligada!");
    }
  
    conectarInterruptor(interruptor) {
      this.interruptor = interruptor;
    }
  
    mostrarInterruptor() {
      console.log(this.interruptor);
    }
  }
  