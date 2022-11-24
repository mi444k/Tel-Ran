// Task 1
const task1 = document.querySelector('.task1');

let t1_btn = document.createElement('button');
let t1_p = document.createElement('p');

t1_btn.textContent = 'ClickMe!';
t1_btn.addEventListener('click', () => {
  t1_p.style.display = t1_p.style.display === 'none' ? 'flex' : 'none';
});
t1_btn.style.padding = '5px 10px';

t1_p.innerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro consequatur? Id voluptas iure, rem aliquid aspernatur eum ullam sapiente harum, natus nam consequatur alias, quia tenetur aut assumenda voluptate.';
t1_p.style.padding = '10px';
t1_p.style.fontSize = '24px';

task1.appendChild(t1_btn);
task1.appendChild(t1_p);

// Task 2
const task2 = document.querySelector('.task2');
const colorArray = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
];

const t2_ul = document.createElement('ul');

for (const color of colorArray) {
  let t2_li = document.createElement('li');
  t2_li.style = `width: 25px; height: 25px; background-color: ${color}`;
  t2_li.style.cursor = 'pointer';
  t2_li.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = color;
    task2.style.backgroundColor = color;
  });
  t2_li.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
    task2.style.backgroundColor = 'burlywood';
  });
  t2_ul.appendChild(t2_li);
}
task2.appendChild(t2_ul);

// Task 3
const task3 = document.querySelector('.task3');
const imdb = [
  {
    name: 'Зеленая миля',
    year: 1999,
    desc: 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
  },
  {
    name: 'Список Шиндлера',
    year: 1993,
    desc: 'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
  },
  {
    name: 'Побег из Шоушенка',
    year: 1994,
    desc: 'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
  },
];

const t3_ul = document.createElement('ul');

const t3_div = document.createElement('div');
t3_div.classList.add('filminfo');
t3_div.style.padding = '20px';
const t3_title = document.createElement('p');
const t3_year = document.createElement('p');
const t3_desc = document.createElement('p');
t3_div.appendChild(t3_title);
t3_div.appendChild(t3_year);
t3_div.appendChild(t3_desc);

for (const film of imdb) {
  let t3_li = document.createElement('li');
  t3_li.textContent = film.name;
  t3_li.style.cursor = 'pointer';
  t3_li.addEventListener('mouseover', () => {
    t3_div.style.display = 'block';
    t3_title.innerHTML = `Название: <b>${film.name}</b>`;
    t3_year.innerText = `Год выхода: ${film.year}`;
    t3_desc.innerHTML = `Описание: <i>${film.desc}</i>`;
  });
  t3_li.addEventListener('mouseout', () => {
    t3_div.style.display = 'none';
  });
  t3_ul.appendChild(t3_li);
}

task3.appendChild(t3_ul);
task3.appendChild(t3_div);

// Task 4 + 5
const task4 = document.querySelector('.task4');
const t4_keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
];
const t4_keyboard = document.createElement('div');
const t4_lines = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
const t4_p = document.createElement('p');
t4_p.classList.add('t4_p');
t4_p.style.position = 'fixed';
t4_p.style.top = 'calc(50% - 75px)';
t4_p.style.left = 'calc(50% - 75px)';
task4.appendChild(t4_p);

function setTimer() {
  t4_p.style.opacity = '0%';
  t4_p.style.zIndex = '-1';
}

var timer = setTimeout(setTimer, 1000);

for (const lineNumer in t4_lines) {
  t4_keyboard.appendChild(t4_lines[lineNumer]);
  for (const key of t4_keys[lineNumer]) {
    let btn = document.createElement('button');
    btn.textContent = key;
    btn.style.width = '30px';
    btn.style.height = '30px';
    btn.addEventListener('click', () => {
      clearInterval(timer);
      t4_p.innerText = key.toUpperCase();
      t4_p.style.opacity = '100%';
      t4_p.style.zIndex = '10';
      timer = setInterval(setTimer, 1000);
    });
    t4_lines[lineNumer].appendChild(btn);
  }
}
task4.appendChild(t4_keyboard);
