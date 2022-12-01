let echoFoo = function (arg) {
  return arg;
};

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const result = document.querySelector('.result');
plus.onclick = function () {
  result.innerText = +result.innerText + 1;
};
minus.onclick = function () {
  result.innerText = +result.innerText - 1;
};
