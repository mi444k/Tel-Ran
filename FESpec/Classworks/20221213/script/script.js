// функция markAllNodesStartWith
// принимает DOM элемент и ставит классы по следующему правилу
// 1. сам элемент получает класс class_0
// 2. все его дети получают класс class_n, где n - это уровень ребёнка
// 3. все родители этого элемента получают класс class_-n, где n - это уровень родителя

function markAllNodesStartWith(element) {
  function recursive(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      item.classList.add('class_' + n);
      recursive(item.children, n + 1);
    }
  }
  recursive([element], 0);

  let counter = 1;
  let parent = element.parentNode;
  while (parent && parent.classList) {
    parent.classList.add('class_-' + counter);
    parent = parent.parentNode;
    counter++;
  }
}

markAllNodesStartWith(document.getElementById('first-parent-id'));

// функция isSibling принимает два DOM-элемента и возвращает true, если эти
// элементы являются соседями

function isSibling(node1, node2) {
  return node1.parentNode === node2.parentNode;
}

console.log(
  isSibling(document.getElementsByClassName('first-parent')[0], document.getElementsByClassName('second-parent')[0])
);

// предположим, что человеку для жизни надо 500 Ккал в день
// и в день он может тратить 1000 рублей
// мясо стоит 300 рублей за кило и содержит 100 Ккал на кило
// овощи стоят 100 рублей за кило и содержат 80 Ккал на кило
// купить модно минимум 1 кг
// вывести в консоль 2 числа: первое, сколько кило мяса должен купить человек
// второе, сколько кило овощей должен купить человек, чтобы выполнялись 2 условия
// 1. человек должен остаться в живых (суммарное кол-во Ккал > 500)
// 2. человек должен съесть как можно больше мяса

const money = 1000;
const minCalories = 500;
const meatPrice = 300;
const vegetPrice = 100;
const meatCalories = 100;
const VegetCalories = 80;

let meat = parseInt(money / meatPrice);
let veget = parseInt((money - meat * meatPrice) / vegetPrice);
let calories = meat * meatCalories + veget * VegetCalories;
while (calories < minCalories) {
  meat--;
  veget = parseInt((money - meat * meatPrice) / vegetPrice);
  calories = meat * meatCalories + veget * VegetCalories;
  if (meat < 0) {
    console.error('Not enouht money!');
    break;
  }
}

let totalPrice = meat * meatPrice + veget * vegetPrice;
console.log({ totalCalories: calories, meatCount: meat, vegitableCount: veget, totalPrice: totalPrice });

// TASK FE:
const user = { firstName: 'Ilias', lastName: 'Martis', age: 41 };
user.gender = 'm';

const users = [user];

console.log(users[0]);

//

const products = [
  {
    id: 1,
    title: 'велосипед',
    price: 45000,
  },
  {
    id: 2,
    title: 'ролики',
    price: 25000,
  },
  {
    id: 3,
    title: 'самокат',
    price: 17000,
  },
  {
    id: 4,
    title: 'лыжи',
    price: 21000,
  },
  {
    id: 5,
    title: 'скейт',
    price: 12000,
  },
];

products.forEach((element) => {
  const { id, title, price } = element;
  if (id % 2 === 0) console.log(`${title} (${price})`);
});

function addPInRoot(str) {
  const root = document.querySelector('#root');
  const p = document.createElement('p');
  p.innerText = str;
  p.classList.add('item');
  root.appendChild(p);
}

products.forEach((elem) => {
  const { id, title, price } = elem;
  addPInRoot(`${id}) ${title} сто${title[title.length - 1].toLowerCase() === 'и' ? 'я' : 'и'}т ${price}р.`);
});
// addPInRoot('Paragaph #1');
// addPInRoot('Paragaph #2');
// addPInRoot('Paragaph #3');
