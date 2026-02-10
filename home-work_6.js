// Варіант 1
// function Calculator(a, b) {
//   this.a = a;
//   this.b = b;
//   this.read = () => {
//     this.a = Number(prompt('Введіть перше число:'));
//     this.b = Number(prompt('Введіть друге число:'));
//   };
//   this.sum = () => {
//     alert(`Сума: ${this.a + this.b}`);
//   };
//   this.mul = () => {
//     alert(`Множення: ${this.a * this.b}`);
//   };
// }
// let task = new Calculator();
// task.read();
// task.sum();
// task.mul();

// Варіант 2
class Calculator {
  constructor() {
    this.number1 = 0;
    this.number2 = 0;
  }
  read() {
    this.number1 = Number(prompt('Введіть перше число:'));
    this.number2 = Number(prompt('Введіть друге число:'));
  }
  sum() {
    alert(`Сумма: ${this.number1 + this.number2}`);
  }
  mul() {
    alert(`Множення: ${this.number1 * this.number2}`);
  }
}
let task = new Calculator();
task.read();
task.sum();
task.mul();
