const Estudante = require("./Estudante.js");

const estudante1 = new Estudante("Jansey", "01", "ADS");
estudante1.mostrarDadosAluno();

estudante1.listarDisciplinas();
estudante1.cadastrarDisciplina("Estrutura de Dados", 60);
estudante1.listarDisciplinas();
estudante1.adicionarNotaDisciplina("Estrutura de Dados", 8);
estudante1.listarDisciplinas();

estudante1.trocarCurso("Ciência da Computação");
estudante1.mostrarDadosAluno();

console.log("\n");

const estudante2 = new Estudante("Adan", "02", "ADS");
estudante2.mostrarDadosAluno();

estudante2.listarDisciplinas();
estudante2.cadastrarDisciplina("Estrutura de Dados", 60);
estudante2.listarDisciplinas();
estudante2.adicionarNotaDisciplina("Estrutura de ados", 8);
estudante2.listarDisciplinas();

estudante2.adicionarNotaDisciplina("Estrutura de Dados", 12);
estudante2.listarDisciplinas();

estudante2.adicionarNotaDisciplina("Estrutura de Dados", 6);
estudante2.listarDisciplinas();

estudante2.trocarCurso("ADS");
estudante2.mostrarDadosAluno();