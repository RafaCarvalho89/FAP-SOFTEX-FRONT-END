// Objeto material
class Book {
  constructor(title, author, genre, pages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages
  }

  open() {
    console.log(`Abrindo o livro: ${this.title}`);
  }

  close() {
    console.log(`Fechando o livro: ${this.title}`);
  }

  changePage(page) {
    if (page <= this.pages || page <= 0){
      console.log(`Trocar para a página ${page} do livro: ${this.title}`);
    } else {
      console.log(`O número de página ${page} é inexistente no livro: ${this.title}. Ele só tem até a página ${this.pages}.`)
    }
  }
}

const myBook = new Book('Dom Casmurro', 'Machado de Assis', 'Drama', 250);
myBook.open();
myBook.changePage(300);
myBook.changePage(50);
myBook.close();
