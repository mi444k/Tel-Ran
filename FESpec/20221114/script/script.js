// DOM - Document Object Model
// Самый высший элемент в дереве DOM: document
//                                /- ...
//                           /- head
// DOM дерево: document - html
//                           \- body
//                                \- ...

// Обращение к дереву DOM возможден по: id, class, tag, selector (h1.styleclassname)
// 1) Обращение по ID - getElementById

let headTitle = document.getElementById('headTitle');
console.log(headTitle);
headTitle.innerHTML = '<b>New Title</b>';

// 2) class
let classTitel = document.getElementsByClassName('headClass');
console.log(classTitel);

// Variant #1
// for (let idx = 0; idx < classTitel.length; idx++) {
//   classTitel[idx].innerHTML = '<i>' + classTitel[idx].innerHTML + '</i>';
// }
// Varisnt #2
for (let element of classTitel) {
  element.innerHTML = '<i>' + element.innerHTML + '</i>';
}
// Variant #3
// for (let idx in classTitel) {
//   classTitel[idx].innerHTML = '<i>' + classTitel[idx].innerHTML + '</i>';
// }

// Array, Push and textContent
let arr = [];
for (let idx = 0; idx < classTitel.length; idx++) {
  arr.push(idx + ') ' + classTitel[idx].textContent);
}
console.log(arr);

// pop() - удаляет из масива последний элемент и возвращает его
// shift() - удаляет в начале ничего не возвращая
// unshift("elem1", "elem2", ...) - добваляет в начале
let lastArrayElement = arr.pop();
console.log(lastArrayElement);
console.log(arr);

// Работа с объектами
let obj = {};
for (let i = 0; i < 5; i++) {
  obj[i] = `Elemenmt #${i + 1}`;
}
obj.newKey1 = 'New key #1';
obj['newKey2'] = 'New key #2';
console.log(obj);
delete obj['newKey1'];
console.log(obj);

// 4) Селекторы
//      | - id
//      | - class
//      | - tag
//      | - ...
// querySelector("#id") - Возвращает пейрый найденый жлемент.
// querySelectorAll("#id", ".class", "li"); - Возвращает массив всех найденых элементов.

// указывать можно теги и теги с классном и id.
// "li" - ищет только li
// "li.classname" - ищет все li с классом classname
document.querySelector('li.special').style.fontWeight = 'bolder';

let items = document.querySelectorAll('li.special');
for (let item of items) {
  item.style.listStyle = 'none';
}

// setAttribute
// для тега a например href, а для img это src

let images = document.querySelectorAll('img.imageClass');
for (img of images) {
  img.setAttribute('src', 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg');
  img.setAttribute('alt', 'Nature image');
}

// FE TASK:

// 1. В div с классом container добавим 2а параграфа с произвольным текстом.
// createElement - создает где-то элемент, но не добавляет его в DOM.
// append добавляет созданный элемент в селектор.
const container = document.querySelector('.container');

const part_1 = document.createElement('p');
const part_2 = document.createElement('p');

part_1.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
part_2.innerHTML = '<b>Bold paragraph text</b>';

container.append(part_1, part_2);

// 2. В div с классом container добавить второй div с двумя параграфами.
// classList - позволяет работать с классами элемента
//          .add('className', ...) - добавляет класс к элементу
//          .remove('ClassName', ...) - удаляет класс у элемента
const card = document.querySelector('.container');

const card_sub_div = document.createElement('div');
const card_div_part_1 = document.createElement('p');
const card_div_part_2 = document.createElement('p');

card_sub_div.classList.add('cards', 'card');
card_sub_div.classList.remove('wrong_class');

card_div_part_1.innerText = 'Hello';
card_div_part_2.innerHTML = 'Good morning';

card_sub_div.append(card_div_part_1, card_div_part_2);
card.append(card_sub_div);

// 3. Элементу с классом card_sub_div добавить следующие стили: border, width, border-radius, background-color, padding, margin

card_sub_div.style.borderRadius = '15px';
card_sub_div.style.padding = '5px 15px';
card_sub_div.style.cssText += 'border: 1px solid black; width: 250px; background-color: gray; color: white;';
