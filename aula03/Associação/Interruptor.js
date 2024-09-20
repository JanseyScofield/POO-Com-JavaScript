class Interruptor {
    estado = false;
    marca;
  
    constructor(marca) {
      this.marca = marca;
    }
  
    apertar() {
      this.estado = !this.estado;
  
      if (this.estado) {
        this.lampada.ligar();
      } else {
        this.lampada.desligar();
      }
    }
  
    conectarLampada(lampada) {
      this.lampada = lampada;
    }
  }
  