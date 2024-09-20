class Funcionario {
    nome;
    cargo;
    local;
    _salario = 1412;
  
    constructor(nome, cargo, local) {
      this.nome = nome;
      this.cargo = cargo;
      this.local = local;
    }
  
    aumento() {
      this._salario *= 1.05;
    }
}

module.exports = Funcionario;
  