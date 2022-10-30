function showResult(result) {
  document.getElementById('name').innerText += '\n' + result;
  console.log(result);
}

// ---=== Task #1 ===---
// let userName = prompt("Как тебя зовут?");
// showResult(`User enter name: ${userName}`);
// document.getElementById("name").innerText = userName;

// ---=== Task #2 ===---
// const r = 12;
// const g = 34;
// const b = 14;

// showResult("rgb(" + r + ", " + g + ", " + b + ");");
// showResult(`rgb(${r}, ${g}, ${b});`);

// ---=== Task #3 ===---
// const value_1 = 17;
// const value_2 = 3;

// showResult(value_1 + value_2);
// showResult(value_1 - value_2);
// showResult(value_1 * value_2);
// showResult(value_1 / value_2);
// showResult(value_1 % value_2);
// showResult(value_1 ** value_2);

// ---=== Task #4 ===---
// let value_1 = prompt('Укажите первое число:');
// let value_2 = prompt('Укажите второе число:');
// showResult('Тип переменной value_1:', typeof value_1);
// // prompt возвращает всегда String
// let value_1_number = Number(value_1);
// showResult('Тип переменной value_1_number:', typeof value_1_number);
// // Унарный + дает тот же результат что и Number()
// let value_2_number = +value_2;
// showResult(`Сумма двух чисел ${value_1} и ${value_2} равна ${value_1_number + value_2_number}`);

// ---=== Task #5 ===---
showResult(`"b" + "a" + +"c" = "${'b' + 'a' + +'c'}"`);

// ---=== Task #6 ===---
// let age = prompt('Введите Ваш возраст: ');
// showResult(`Ваш возраст ${age * 365.25 * 24 * 60} минут.`);

// ---=== Task #7 ===---
// let value_1 = prompt('Введите число: ');
// let pow_1 = prompt('Введите степень: ');
// showResult(`Число ${value_1} в ${pow_1} степени = ${value_1 ** pow_1}`);

// ---=== Task #8 ===---
// let value_1 = prompt('Введите число #1: ');
// let value_2 = prompt('Введите число #2: ');
// showResult(`${value_1} + ${value_2} = ${+value_1 + +value_2}`);
// showResult(`${value_1} - ${value_2} = ${value_1 - value_2}`);
// showResult(`${value_1} * ${value_2} = ${value_1 * value_2}`);
// showResult(`${value_1} / ${value_2} = ${value_1 / value_2}`);
