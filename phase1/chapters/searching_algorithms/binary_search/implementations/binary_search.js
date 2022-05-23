function iterativeBinarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) {
      return mid;
    }
    if (arr[mid] > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}

const recursiveBinarySearch = (arr, l, r, x) => {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) {
      return mid;
    }

    if (arr[mid] > x) {
      return recursiveBinarySearch(arr, l, mid - 1, x);
    }

    return recursiveBinarySearch(arr, mid + 1, r, x);
  }

  return -1;
};

let arr = [2, 3, 4, 10, 40];
let x = 100;
let n = arr.length;

let result = recursiveBinarySearch(arr, 0, n - 1, x);
result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
