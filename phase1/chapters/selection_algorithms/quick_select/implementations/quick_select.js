function partition(arr, low, high)
{
    let pivot = arr[high], pivotloc = low;
    for (let i = low; i <= high; i++)
    {
        if (arr[i] < pivot)
        {
            let temp = arr[i];
            arr[i] = arr[pivotloc];
            arr[pivotloc] = temp;
            pivotloc++;
        }
    }

    let temp = arr[high];
    arr[high] = arr[pivotloc];
    arr[pivotloc] = temp;

    return pivotloc;
}

function quickSelect(arr, k, low = 0, high = arr.length - 1) {
    const pivot = partition(arr, low, high);

    if (pivot === k - 1)
        return arr[pivot];
    else if (pivot < k - 1)
        return quickSelect(arr, k, pivot + 1, high);
    else
        return quickSelect(arr, k, low, pivot - 1);
}

const arr = [10, 4, 5, 8, 6, 11, 26, -7, 0, 100];
const k = 5;
console.log(quickSelect(arr,  k))