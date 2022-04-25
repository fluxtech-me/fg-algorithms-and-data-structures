const jumpSearch = (arr, x, n) => {
  let step = Math.sqrt(n);
  let prev = 0;
  while (arr[Math.min(step, n) - 1] < x) {
    prev = step;
    step += Math.sqrt(n);
    if (prev >= n) {
      return -1;
    }
  }

  while (arr[prev] < x) {
    prev++;
    if (prev == Math.min(step, n)) {
      return -1;
    }
  }
  if (arr[prev] == x) {
    return prev;
  }

  return -1;
};

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;

let result = jumpSearch(arr, n, x);
result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
