// Objeto material
class Car {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }

  accelerate() {
    console.log(`${this.model} acelerando...`);
  }

  brake() {
    console.log(`${this.model} freando...`);
  }

  turnOnHeadlight() {
    console.log(`${this.model} ligando o farol.`);
  }
}

// Exemplo de uso
const myCar = new Car('Fusca', 'Azul', 2020);
myCar.accelerate();
myCar.brake();
myCar.turnOnHeadlight();
