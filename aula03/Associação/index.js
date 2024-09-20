const interruptor = new Interruptor("Philips");

const lampada = new Lampada("Philips", "branca", 220);

interruptor.conectarLampada(lampada);
lampada.conectarInterruptor(interruptor);

interruptor.apertar();
lampada.mostrarInterruptor();