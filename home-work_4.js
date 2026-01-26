// Завдання 1

// const student1 = {
//   name: 'Максим',
//   speciality: 'Програміст',
//   midle_mark: 10,
//   show: function showStudent(missed_classes = 10) {
//     console.log(
//       `Ім'я студента(-ки): ${this.name}\nСпеціальність: ${this.speciality}\nСередній бал: ${this.midle_mark}\nПропущенно занять: ${missed_classes}\n`,
//     );
//   },
// };
// const student2 = {
//   name: 'Анастасія',
//   speciality: 'Пекар',
//   midle_mark: 12,
// };
// const student3 = {
//   name: 'Данило',
//   speciality: 'Механік',
//   midle_mark: 8,
// };
// const student4 = {
//   name: 'Маша',
//   speciality: 'Хірург',
//   midle_mark: 1,
// };

// student1.show();
// student1.show.call(student2, 1);
// student1.show.bind(student3)(3);
// student1.show.apply(student4, [100]);

// Завдання 2

// const buttonHTML = document.querySelector("button[name='html']");
// const buttonCSS = document.querySelector("button[name='css']");
// buttonHTML.onclick = function () {
//   console.log('HTML - мова розмітки гіпертексту.');
// };
// buttonCSS.onclick = function () {
//   console.log('CSS - каскадні таблиці стилів.');
// };

// Завдання 3

// const item1 = {
//   name: 'banana',
//   prise_for_kg: 30,
//   count: 4,
// };
// const item2 = {
//   name: 'cherry',
//   prise_for_kg: 58,
//   count: 1,
// };
// const item3 = {
//   name: 'jrange',
//   prise_for_kg: 89,
//   count: 3,
// };

// const sistem = {
//   shop: function shopSistem() {
//     let sum = this.prise_for_kg * this.count;
//     console.log(`Назва продукту: ${this.name}\nЗагальна ціна: ${sum}`);
//   },
// };

// sistem.shop.apply(item1);
// sistem.shop.apply(item2);
// sistem.shop.apply(item3);
