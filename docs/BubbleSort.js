const arr = [5, 4, 3, 1, 6];

function bubbleSort(ar) {
  let len = ar.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (ar[j] > ar[j + 1]) {
        //change (>) to (<) max-min
        let tem = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = tem;
      }
    }
  }
}
console.log(arr);
bubbleSort(arr);
console.log(arr);
