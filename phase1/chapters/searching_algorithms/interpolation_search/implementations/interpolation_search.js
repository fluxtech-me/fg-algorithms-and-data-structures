const interpolationSearch = (array, low, high, K) => {
  let index;

  while (low <= high && K >= array[low] && K <= array[high]) {
    index =
      low + ((K - array[low]) * (high - low)) / (array[high] - array[low]);

    if (array[index] < K) {
      low = index + 1;
    } else if (array[index] > K) {
      high = index - 1;
    } else {
      return index;
    }
  }
  return -1;
};

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

let n = arr.length;

let x = 18;
let index = interpolationSearch(arr, 0, n - 1, x);

if (index != -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log("Element not found");
}
