function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      {
        if (arr[j] < arr[min_idx]) min_idx = j;
      }
    }
    swap(arr, min_idx, i);
  }
}

function printArray(arr, size) {
  let i;
  for (i = 0; i < size; i++) console.log(arr[i]);
}

let arr = [64, 25, 12, 22, 11];
let n = 5;
selectionSort(arr, n);
console.log("Sorted array: \n");
printArray(arr, n);
