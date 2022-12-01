function getDiscount(price) {
  // const defaultDiscountPercent = 10;
  // let discount = (+price / 100) * defaultDiscountPercent;
  // if (discount < 5) discount = 5;
  // return discount;
  return Math.max(5, +price * 0.1);
}
// console.log(getDiscount(507));
// console.log(getDiscount(101));
// console.log(getDiscount(7));

function revertString(str) {
  let sr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    sr += str[i];
  }
  return sr;
}
// console.log(revertString('Мама мыла раму'));

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}
// console.log(isPalindrome('маам'));
// console.log(isPalindrome('мафaам'));

function isBalanced(str) {
  let aCount = 0;
  let otherCount = 0;
  for (let i = 0; i < str.length; i++) {
    str[i].toLowerCase() === 'а' ? aCount++ : otherCount++;
    // if (str[i].toLowerCase() === 'а') aCount++;
    // else otherCount++;
  }
  if (aCount === otherCount) return true;
  return false;
}
// console.log(isBalanced('папа'));
// console.log(isBalanced('мама'));
// console.log(isBalanced('ааа'));

// HOMEWORK:
// функция isAbsoluteBalance принимает на вход строку
// и возвращает true, если в строке поровну символов a и не-а
// И символы "а" идут через один
// пример: isAbsoluteBalance("мама") -> true
// isAbsoluteBalance("папа") -> true
// isAbsoluteBalance("аааббб") -> false
function isBalanced(str) {
  let aCount = 0;
  let otherCount = 0;
  let isAbsolute = true;
  for (let i = 0; i < str.length; i++) {
    str[i].toLowerCase() === 'а' ? aCount++ : otherCount++;
    // if (str[i].toLowerCase() === 'а') aCount++;
    // else otherCount++;
  }
  if (aCount === otherCount) return true;
  return false;
}

// -------- TASK ----------
// const val_1 = +prompt('Enter first number: ');
// const val_2 = +prompt('Enter second number: ');
// console.log(`sum: ${val_1 + val_2}`);
// console.log(`diff: ${val_1 - val_2}`);
// console.log(`mult: ${val_1 * val_2}`);
// console.log(`div: ${val_2 === 0 ? 'Error: Devision by zero' : val_1 / val_2}`);
// let maxVal = val_2;
// if (val_1 > val_2) {
//   maxVal = val_1;
// }
// console.log(`max: ${maxVal}`);
// console.log(`max: ${Math.max(val_1, val_2)}`);
// console.log(`max: ${val_1 > val_2 ? val_1 : val_2}`);

// const val = +prompt('Enter number: ');
// console.log(val % 2 === 0 ? 'Четное' : 'Нечетное');

function power(val) {
  console.log(val ** 2);
}
power(11);
