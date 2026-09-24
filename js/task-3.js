// todo Задача 3. Фільтрація масиву чисел

// todo Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// * Усередині функції:

// todo Створи порожній масив, у який будеш додавати підходящі числа.
// todo Використай цикл для ітерації кожного елемента масиву numbers.
// todo Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// todo Поверни свій новий масив з підходящими числами як результат.

function filterArray(numbers, value) {
  const newCorrectArray = [];

  for (const number of numbers) {
    if (number > value) {
      newCorrectArray.push(number);
    }
  }
  return newCorrectArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
