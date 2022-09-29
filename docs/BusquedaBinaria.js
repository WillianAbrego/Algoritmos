const lista = [2, 3, 4, 5, 6, 7];
const search = 6;

function BinarySearch(value, list) {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let found = false;
  let middle;
  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (list[middle] === value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}

console.log(BinarySearch(search, lista));
