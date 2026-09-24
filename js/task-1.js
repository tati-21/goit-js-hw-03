// todo Задача 1. Генератор slug

// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-beginners.
// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися? А тепер давай нарешті виконувати задачу!

// todo Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// todo Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// todo Усі символи slug повинні бути в нижньому регістрі.
// todo Усі слова slug повинні бути розділені тире.

function slugify(title) {
  const lowCaseTitle = title.toLowerCase();
  //   console.log(lowCaseTitle);

  const cropedTitle = lowCaseTitle.split(" ");
  //   console.log(cropedTitle);

  const slugTitle = cropedTitle.join("-");

  return slugTitle;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
