// Завдання 1

// const fruts = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];
// let result = fruts.map(item => item.name);
// console.log(result);

// Завдання 2
// for (let a = 2; a <= 10; a++) {
//   if (a % 2 === 0) {
//     console.log(a);
//   }
// }

// Завдання 3

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// Завдання 4

// while (true) {
//   let prom = +prompt('Введіть число більше 100');
//   console.log(prom);
//   if (prom > 100 && prom != null) {
//     break;
//   }
// }

// Завдання 5
// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];
// let ageM = girls.map(item => item.age);
// let ageS = Math.round(ageM.reduce((sum, item) => sum + item) / ageM.length);
// console.log(ageS);
