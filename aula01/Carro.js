class Carro{
    constructor(marca, modelo){
        this.marca = marca,
        this.modelo = modelo
    }
}

const carro = new Carro("Chevrolet", "Onix");
const carro2 = new Carro("Fiat", "Argo")

console.log(`Carro 1 : ${carro.marca} - ${carro.modelo}`)
console.log(`Carro 2 : ${carro2.marca} - ${carro2.modelo}`)