function bubbleSort(inputArr) {
  let arr_length = inputArr.length;
  for (let i = 0; i < arr_length - 1; ++i) {
    for (let j = 0; j < arr_length - i - 1; ++j) {
      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
      }
    }
    console.log(inputArr, inputArr[arr_length - i - 1]);
  }
  return inputArr;
}

function printArray(arr, size) {
  let i;
  for (i = 0; i < size; i++) console.log(arr[i]);
}

let arr = [64, 25, 12, 22, 11];
bubbleSort(arr);
console.log("Sorted array: \n");
printArray(arr);
