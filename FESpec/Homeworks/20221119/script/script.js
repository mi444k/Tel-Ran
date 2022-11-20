const db = [
  {
    title: 'BMW',
    price: '40000',
    count: '15',
  },
  {
    title: 'Toyota',
    price: '20000',
    count: '13',
  },
  {
    title: 'Ford',
    price: '30000',
    count: '20',
  },
  {
    title: 'Chevrolet',
    price: '60000',
    count: '9',
  },
  {
    title: 'Volkswagen',
    price: '30000',
    count: '13',
  },
];

const table = document.querySelector('table');
let totalCount = 0;
let totalPrice = 0;
for (let idx in db) {
  let row = document.createElement('tr');
  let d = db[idx];
  totalCount += parseInt(d['count']);
  totalPrice += parseInt(d['price']) * d['count'];
  row.innerHTML = `<td>${parseInt(idx) + 1}</td><td>${d['title']}</td><td>${d['price']}</td><td>${d['count']}</td><td>${
    parseInt(d['price']) * d['count']
  }</td>`;
  table.appendChild(row);
}
let row = document.createElement('tr');
row.innerHTML = `<td colspan="3">Total:</td><td>${totalCount}</td><td>${totalPrice}</td>`;
table.appendChild(row);
