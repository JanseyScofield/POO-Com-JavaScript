const Disciplina = require("./Disciplina.js")

class Estudante{
    constructor(nome, matricula, curso){
        this._nome = nome,
        this.matricula = matricula,
        this._curso = curso,
        this.disciplinas = []
    }

    mostrarDadosAluno(){
        console.log("---------------------------");
        console.log(`Nome : ${this._nome}`);
        console.log(`Matrícula : ${this.matricula}`);
        console.log(`Curso : ${this._curso}`);
        console.log("---------------------------");
    }

    trocarCurso(novoCurso){
        if(this._curso === novoCurso) 
            console.log(`${this._nome} já está cursando ${novoCurso}.`);
        else{
            this._curso = novoCurso;
            console.log("Curso alterado com sucesso!");
        }
    }

    cadastrarDisciplina(nomeDisciplina, cargaHoraria){
        const novaDisciplina = new Disciplina(nomeDisciplina, cargaHoraria);
        this.disciplinas.push(novaDisciplina)
        console.log(`A disciplina ${nomeDisciplina} foi adicionada a ${this._nome} com sucesso!`)
    }

    listarDisciplinas(){
        let iCont;
        const qtdDisciplinas = this.disciplinas.length;
        if(qtdDisciplinas === 0)
            console.log(`${this._nome} ainda não tem disciplinas cadastradas.`);
        else{
            console.log("---------------------------");
            console.log(`Disciplinas de ${this._nome}:`)
            for(iCont = 0; iCont < qtdDisciplinas; iCont++)
                console.log(`${this.disciplinas[iCont].nome} - ${this.disciplinas[iCont].cargaHoraria} horas. Nota : ${this.disciplinas[iCont].getNotaEstudante()}`);
            console.log("---------------------------");
        }
    }

    adicionarNotaDisciplina(nomeDisciplina, nota){
        let index;
        const qtdDisciplinas = this.disciplinas.length;

        for(index = 0; index < qtdDisciplinas; index++)
            if(this.disciplinas[index].nome === nomeDisciplina)
                break;

        if(index === qtdDisciplinas)
            console.log(`${this._nome} não está matriculado em ${nomeDisciplina}.`);
        else
            console.log(this.disciplinas[index].setNotaEstudante(nota));
    }
}

module.exports = Estudante;