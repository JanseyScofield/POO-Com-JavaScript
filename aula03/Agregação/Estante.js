class Estante {
    cor;
    material;
    livros;
  
    constructor(cor, material, livros = []) {
      this.cor = cor;
      this.material = material;
      this.livros = livros;
    }
  
    mostrarLivros() {
      console.log(`Estante ${this.cor} de 
       ${this.material} com os livros:`);
      this.livros.forEach((livro) => livro.mostrar());
    }
  }
  