const numbers = [12, -4, 2, 65, -4, 3, 2];
const words = ["велосипед", "ролики", "самокат", "лыжи"];

// numbers.forEach(function(element, index, list) {
//   console.log(element, index, list);
// });

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// forEach(numbers, console.log);

// function func(a, b) {
//   return a + b;
// }

// const func_1 = function(a, b) {
//   return a + b;
// };

// const func_2 = (a, b) => {
//   return a + b;
// };

// const func_3 = (a, b) => a + b;

// const func_4 = a => a ** 2;

// console.log(func(1, 2));
// console.log(func_1(1, 2));
// console.log(func_2(1, 2));
// console.log(func_3(1, 2));
// console.log(func_4(2));

// numbers.forEach(elem => {
//   if (elem % 2 === 0) console.log(elem);
// });

// используя метод forEach вывести строки поочередно с их номером (начиная с единицы). Пример выводимой строки “(1) Велосипед”.

// words.forEach((elem, idx) => {
//   console.log(`(${idx + 1}) ${elem}`);
// });

// words.forEach((elem, idx) => {
//   const i = idx + 1;
//   i % 2 === 0 ? console.log(`(${i}) ${elem}`) : null;
// });

// const new_numbers = numbers.map(elem => elem ** 2);
// console.log(new_numbers);

// console.log(numbers.map(elem => (elem < 0 ? -elem : elem)));

// возвращает новый массив в котором эелементы выполняют условие указанное после =>
// console.log(numbers.filter(elem => elem < 0)); // return [-4, -4]

// console.log(words.filter(elem => elem.length > 6));

// console.log(words.find(elem => elem.length > 6));

let products = [
  {
    id: 1,
    title: "велосипед",
    price: 45000,
    discount: 10
  },
  {
    id: 2,
    title: "ролики",
    price: 15000,
    discount: 10
  },
  {
    id: 3,
    title: "самокат",
    price: 20000,
    discount: 10
  },
  {
    id: 4,
    title: "лыжи",
    price: 65000,
    discount: 10
  },
  {
    id: 5,
    title: "скейт",
    price: 17000,
    discount: 10
  }
];

// function print(str) {
//   console.log(str);
// }

// products.forEach(product => print(product));

// products.forEach(product => console.log(`${product.title} (${product.price})`));
// // деструктуризация
// products.forEach(({ title, price }) => console.log(`${title} (${price})`));

// const result = products.map(({ price, discount, ...product }) => ({
//   ...product,
//   real_price: price * (discount / 10)
// }));

// console.log(result);

// 1) создать функцию, которая получает id товара и возвращает массив, который
//  состоит из всех товаров, кроме того, id которого мы указали

// function delete_id(product_id) {
//   products = products.filter(({ id }) => id != product_id);
// }

// console.log(products);
// delete_id(3);
// console.log(products);

// создать функцию change_price, в качестве аргументов она принимает id и новую цену
// и меняет у товара с указанным id цену на новую

// function change_price(id, new_price) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === id) {
//       products[i].price = new_price;
//       break;
//     }
//   }
// }

// function change_price(p_id, new_price) {
//   products.find(({ id }) => id === p_id).price = new_price;
// }

// change_price(1, 100);
// console.log(products);

// const nums = [12, 4, 6, 78, 23, 5];
// console.log(nums);
// console.log(nums.reduce((prev, item) => prev + item, 0));

// const result = nums.reduce((prev, item) => (prev > item ? prev : item), 0);
// console.log(result);

const words2 = ["велосипед", "ролики", "смокат", "самолет", "самосвал"];

console.log(
  words2.reduce((prev, item) => (prev.length > item.length ? prev : item))
);
