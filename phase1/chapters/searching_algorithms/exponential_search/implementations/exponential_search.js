function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + (r - l) / 2;

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    return binarySearch(arr, mid + 1, r, x);
  }

  return -1;
}

function exponentialSearch(arr, x) {
  if (arr[0] == x) {
    return 0;
  }

  let i = 1;
  while (arr[i] < x) {
    i = i * 2;
  }
  console.log(i);
  return binarySearch(arr, i / 2, i, x);
}

let arr = [15, 21, 26, 27, 35, 40, 49, 59, 62, 63, 77, 83, 86, 89, 90, 92, 93];
let x = 79;

let result = exponentialSearch(arr, x);
result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
