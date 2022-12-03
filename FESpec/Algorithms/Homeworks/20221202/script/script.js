function linearSearch(arr, value) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function appearsSearch(arr) {
  let previous = arr[0];
  for (let i = 1; i < arr.length - 1; i += 2) {
    if (previous != arr[i]) return i - 1;
    previous = arr[i + 1];
  }
  return -1;
}

const arr = [1, 4, 3, 6, 7, 5, 2, 8, 4, 12];
const sortedArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9];

console.log(linearSearch(arr, 5)); // position: 5 | Space complexity: O(1) | Time complexity: O(n)
console.log(appearsSearch(sortedArr)); // position: 8 | Space complexity: O(1) | Time complexity: O(n / 2)
