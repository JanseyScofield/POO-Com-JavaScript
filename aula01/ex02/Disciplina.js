class Disciplina{
    constructor(nome, cargaHoraria){
        this.nome = nome,
        this.cargaHoraria = cargaHoraria,
        this._notaEstudante
    }

    getNotaEstudante(){
        if(this._notaEstudante === undefined) return "Ainda não há nota cadastrada para esse aluno nessa disciplina.";

        return this._notaEstudante;
    }

    setNotaEstudante(nota){
        if(nota < 0 || nota > 10) return "Nota inválida.";

        this._notaEstudante = nota;
        return "Nota adicionada com sucesso!"
    }
}

module.exports = Disciplina;