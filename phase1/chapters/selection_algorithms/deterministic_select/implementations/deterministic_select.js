function findMedian(arr, i, n) {
    const tempArray = arr.slice(i, i + n);
    tempArray.sort((a, b) => a - b);
    const N = tempArray.length;
    return tempArray[Math.floor(N / 2)];
}

function deterministicSelect(arr, k, start = 0, end = arr.length - 1) {
    if (k > 0 && k <= end - start + 1) {
        const n = end - start + 1;
        let i;

        const medians = new Array(Math.floor((n + 4) / 5));
        for (i = 0; i < Math.floor(n / 5); i++) {
            medians[i] = findMedian(arr, start + i * 5, 5);
        }

        if (i * 5 < n){
            medians[i] = findMedian(arr, start + i * 5, n % 5);
            i++;
        }

        const medOfMed = (i === 1) ? medians[i - 1] :
            deterministicSelect(medians, Math.floor(i / 2), 0, i - 1);

        const pivot = partition(arr, medOfMed, start, end);

        if (pivot - start === k - 1)
            return arr[pivot];
        if (pivot - start > k - 1) {
            return deterministicSelect(arr, k, start, pivot - 1);
        }

        return deterministicSelect(arr, k - pivot + start - 1, pivot + 1, end);
    }

    return -1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function partition(arr, pivot, left, right) {
    let i;
    for (i = left; i < right; i++)
        if (arr[i] === pivot)
            break;
    swap(arr, i, right);

    i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, right);
    return i;
}

const arr = [10, 4, 5, 8, 6, 11, 26, -7, 0, 100, 12];
console.log(deterministicSelect(arr,  3));
console.log(deterministicSelect(arr,  Math.ceil(arr.length / 2)));
console.log(deterministicSelect(arr,  20));