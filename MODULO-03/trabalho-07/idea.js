// Objeto abstrato
class Idea {
  constructor(title, description, category) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.status = 'Em desenvolvimento';
  }

  showIdea() {
    console.log(`Ideia: ${this.title}`);
    console.log(`Descrição: ${this.description}`);
    console.log(`Categoria: ${this.category}`);
    console.log(`Status: ${this.status}`);
  }

  changeStatus(novoStatus) {
    this.status = novoStatus;
    console.log(`Status da ideia "${this.title}" modificado para: ${novoStatus}`);
  }

  validateIdea() {
    console.log(`Ideia "${this.title}" validada!`);
    this.changeStatus('Aprovada');
  }
}

const myIdea = new Idea('Plantação Vertical', 'Cultivar alimentos em prédios urbanos', 'Agricultura Urbana');
console.log('Antes da modificação do status:');
myIdea.showIdea();
myIdea.changeStatus('Em revisão');
console.log('\nApós a modificação do status:');
myIdea.showIdea();
myIdea.validateIdea();