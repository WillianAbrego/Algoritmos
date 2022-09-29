const lista = [1, 3, 2, 1, 2, 8];
const search = 4;

function linearSearch(value, list) {
  let found = false,
    position = -1,
    index = 0;

  while (!found && index < list.length) {
    if (list[index] === value) {
      found = true;
      position = index;
    } else {
      index += 1;
    }
  }
  return position;
}
console.log(linearSearch(search, lista));
