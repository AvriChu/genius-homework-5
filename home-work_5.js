class Abonent {
  constructor(opt) {
    this.name = opt.name;
    this.number = opt.number;
    this.abonNumber = '';
  }

  set setNumber(_) {
    this.abonNumber = `${this.name}: ${this.number}`;
  }

  get setNumber() {
    return this.abonNumber;
  }
}

const user1 = new Abonent({
  name: 'Настя',
  number: '+380000000000',
});
const user2 = new Abonent({
  name: 'Катя',
  number: '+380000000000',
});
const user3 = new Abonent({
  name: 'Юля',
  number: '+380000000000',
});

user1.setNumber = true;
user2.setNumber = true;
user3.setNumber = true;
console.log(user1);
console.log(user2);
console.log(user3);
