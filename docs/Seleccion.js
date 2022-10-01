const arr = [2, 3, 4, 5, 6, 7];
function num(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[min] > arr[x]) {
        min = x;
      }
    }
    a(arr, i, min);
  }
  return arr;
}
function a(arr, f, s) {
  var temp = arr[f];
  arr[f] = arr[s];
  arr[s] = temp;
}

console.log(num(arr));
