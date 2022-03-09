const countingSort = (arr, min, max) => {
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] += 1;
    } else {
      count[arr[i]] = 1;
    }
  }

  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }
  return sortedArr;
};

console.log(countingSort([-3, 6, 5, 500000000, 9], -3, 500000000));
