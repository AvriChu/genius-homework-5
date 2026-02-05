// Завдання 1
const btnTask1 = document.getElementById('task1');
const text = document.getElementById('text');

btnTask1.addEventListener('click', () => {
  text.style.display = 'none';
});
// Завдання 2
const btnTask2 = document.getElementById('task2');
btnTask2.addEventListener('click', () => {
  btnTask2.style.display = 'none';
  btnTask2.style.pointerEvents = 'none';
});
// Завдання 3
const list = document.querySelector('.list');
const btnTask3 = document.getElementById('task3');
let u = true;
btnTask3.addEventListener('click', () => {
  switch (u) {
    case true:
      list.style.visibility = 'hidden';
      break;
    case false:
      list.style.visibility = 'visible';
      break;
  }
  u = !u;
});
