function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function appearsSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

const arr = [1, 4, 3, 6, 7, 5, 2, 8, 4, 12];
const sortedArr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

console.log(linearSearch(arr, 5)); // position: 5 | Space complexity: O(1) | Time complexity: O(n)
console.log(appearsSearch(sortedArr, 5)); // position: 4 | Space complexity: O(1) | Time complexity: O(n)
