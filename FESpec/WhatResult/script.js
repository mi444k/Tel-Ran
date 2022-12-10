// const age = 18;
// console.log(age > 18 ? 'Добрый день.' : 'Привет!');

const arr = [1, 2, 15, -17, 42, -0, -9];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0 || arr[i] === -0) arr[i] *= -1;
}
console.log(arr);

const user = { name1: 'Linda', name2: 'Pol', age: 18, sex: 'female' };
const { name1: firstName, name2: lastName } = user;
console.log(firstName, lastName);

function power1(param1) {
  return param1 ** param1;
}

function power2(param1) {
  return param1 ** 2;
}

function power3(param1) {
  return param1 * 2;
}
