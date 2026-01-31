function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.read = () => {
    this.a = Number(prompt('Введіть перше число:'));
    this.b = Number(prompt('Введіть друге число:'));
  };
  this.sum = () => {
    alert(`Сума: ${this.a + this.b}`);
  };
  this.mul = () => {
    alert(`Множення: ${this.a * this.b}`);
  };
}
let task = new Calculator();
task.read();
task.sum();
task.mul();
