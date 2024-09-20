class Livro {
    titulo;
    autor;
    genero;
  
    constructor(titulo, autor, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
    }
  
    mostrar() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Gênero: ${this.genero}\n`);
    }
  }
  