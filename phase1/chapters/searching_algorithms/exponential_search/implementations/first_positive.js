function f(x) {
  //   return Math.log(0.4 * x);
  return x * x + 2 * x - 400;
  //   return 3 * x - 100;
}

function findFirstPositive() {
  if (f(0) > 0) {
    return 0;
  }

  let i = 1;
  while (f(i) < 0) {
    i = i * 2;
  }

  return binarySearch(Math.floor(i / 2), i);
}

function binarySearch(low, high) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    if (f(mid) > 0 && (mid == low || f(mid - 1) <= 0)) {
      return mid;
    }

    if (f(mid) <= 0) {
      return binarySearch(mid + 1, high);
    } else {
      return binarySearch(low, mid - 1);
    }
  }
  return -1;
}

console.log(
  "The value n where f(x) " + "becomes positive first is " + findFirstPositive()
);
