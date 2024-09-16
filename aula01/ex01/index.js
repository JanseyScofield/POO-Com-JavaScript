const Lampada = require("./Lampada")

const lampada1 = new Lampada("Ligada", "Branca", "Modelo Genérico 1","Marca Genérica 1" ,5.5, 200, "Led", 12);
lampada1.getEstado();
lampada1.mudarEstado();
lampada1.getEstado();
lampada1.desligar();
lampada1.ligar();
console.log(lampada1.preco);

console.log("----------------------------")

const lampada2 = new Lampada("Desligada", "Azul", "Modelo Genérico 2","Marca Genérica 2" ,7.5, 200, "Led", 12);
lampada2.getEstado();
lampada2.mudarEstado();
lampada2.getEstado();
lampada2.desligar();
lampada2.ligar();
console.log(lampada2.preco);