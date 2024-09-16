class Lampada{
    constructor(estado, cor, marca, modelo, preco, voltagem, tipos, garantiaMeses){
        this._estado = estado,
        this.cor = cor,
        this.marca = marca,
        this.modelo = modelo,
        this.preco = preco,
        this.voltagem = voltagem,
        this.tipos = tipos,
        this.garantiaMeses = garantiaMeses
    }

    ligar(){
        if(this._estado === "Ligada"){
            console.log("A lâmpada já está ligada!");
        }
        else{
            this._estado = "Ligada";
            console.log("Lâmpada ligada!");
        }
    }

    desligar(){
        if(this._estado === "Desligada"){
            console.log("A lâmpada já está desligada!");
        }
        else{
            this._estado = "Desligada";
            console.log("Lâmpada desligada!");
        }
    }

    mudarEstado(){
        this._estado= this._estado === "Ligada"? "Desligada" : "Ligada";
        console.log("Estado da lâmpada alterado!");
    }

    getEstado(){
        console.log(`A lâmpada está ${this._estado}!`)
    }
}

module.exports = Lampada;