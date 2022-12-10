// Task #1

function isAbsoluteBalance(str) {
  str = str.toLowerCase();
  let aCount = 0;
  let otherCount = 0;
  let isAFlag = str[0] === 'а' ? true : false;
  for (let i = 0; i < str.length; i++) {
    // Еcли после "а" следующая тоже "а" или
    // после не "а" следующая тоже не "а" то вернуть false
    if (i + 1 <= str.length) {
      if ((isAFlag === true && str[i + 1] === 'а') || (isAFlag === false && str[i + 1] != 'а')) return false;
      isAFlag = str[i + 1] === 'а' ? true : false;
    }
    if (str[i] === 'а') aCount++;
    else otherCount++;
  }
  if (aCount === otherCount) return true;
  return false;
}

console.log('--- Task #1 ---');
console.log(isAbsoluteBalance('мама')); // true
console.log(isAbsoluteBalance('папа')); // true
console.log(isAbsoluteBalance('аааббб')); // false

// Task #2

function getDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2).toFixed(2);
}

console.log('--- Task #2 ---');
console.log(getDiagonal(1, 2, 3));
console.log(getDiagonal(3, 12, 18));
console.log(getDiagonal(4, 9, 2));

// Task #3

function maskWords(str, wordsLeft) {
  let result = '';
  let startMask = str[str.length - 1] === ' ' ? false : true;
  for (let i = str.length - 1; i >= 0; i--) {
    // Если несколько пробелов подряд, то игнорировать их
    if (!startMask && i > 0) {
      if (str[i] === ' ' && str[i - 1] === ' ') continue;
      if (str[i - 1] != ' ') {
        startMask = true;
        continue;
      }
    }
    // Если все слова были заменены, то вернуть остаток строки + result
    if (wordsLeft == 0) {
      result = str.substring(0, i + 1) + result;
      break;
    }
    if (str[i] === ' ') {
      result = ' ' + result;
      wordsLeft -= 1;
      continue;
    }
    result = '*' + result;
  }
  return result;
}

console.log('--- Task #3 ---');
console.log(maskWords('Мама мыла раму', 2));

// Task #4

function countCats(arrStr) {
  let catCounts = 0;
  arrStr.forEach((element) => {
    if (element.toLowerCase().includes('cat')) catCounts++;
  });
  return catCounts;
}

console.log('--- Task #4 ---');
console.log(countCats(['cat', 'mama-cat', 'papa-cat', 'dog']));

// Task #5

function flattenArray(arr) {
  let result = [];
  arr.forEach((element) => {
    tmp = typeof element === 'object' ? flattenArray(element) : [element];
    result = result.concat(tmp);
  });
  return result;
}

console.log('--- Task #5* ---');
console.log(flattenArray([1, 2, [7, 14, -8], [], [[[[44]]]]]));
