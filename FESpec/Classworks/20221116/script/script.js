const testDiv = document.querySelector('.testDiv');
testDiv.innerText = 'Replace content';
testDiv.innerText += '<p>Add new text content</p>';
testDiv.innerHTML += '<p>Add new HTML content with p tag</p>';

const body = document.querySelector('body');
const root = document.createElement('div');
root.setAttribute('id', 'root');

const ul = document.createElement('ul');
ul.setAttribute('class', 'menu-ul');

body.appendChild(root).innerText = 'Add new div with id and text.';
body.appendChild(ul);

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.setAttribute('class', 'menu-li');
  ul.appendChild(li);
}

const test = document.createElement('div');
test.setAttribute('id', 'test');
body.appendChild(test);

for (let i = 0; i < 20; i++) {
  const p = document.createElement('p');
  p.innerText = `${i + 1}) this is new p`;
  test.appendChild(p);
}

const arr = ['a1', 'a2', 'a3'];

for (txt of arr) {
  const p = document.createElement('p');
  p.innerText = `${txt}`;
  test.appendChild(p);
}
