const Funcionario = require("./Funcionario");

class Professor extends Funcionario {
    _salario = 2500;
    materia;
  
    constructor(nome, cargo, local, materia) {
      super(nome, cargo, local);
      this.materia = materia;
    }
  
    aumento() {
      super.aumento();
      this._salario *= 1.1;
    }
}