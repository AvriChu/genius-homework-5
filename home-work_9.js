// Завдання 1
// setInterval
// function printNumbers(from, to) {
//   let current = from;
//   let timer = setInterval(function () {
//     console.log(`Число: ${current}`);
//     if (current === to) {
//       clearInterval(timer);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(1, 10);

// setTimeout
// function printNumbers(from, to) {
//   for (let i = from; i <= to; i++) {
//     setTimeout(
//       function () {
//         console.log(`Число: ${i}`);
//       },
//       1000 * (i + 1),
//     );
//   }
// }
// printNumbers(1, 10);

// Завдання 2
// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));
