Array.prototype.swap = function (x, y) {
    if (x != y && x < this.length && y < this.length) {
        console.log("-- swap", x, y)

        const tmp = this[x];
        this[x] = this[y];
        this[y] = tmp;
    }

    return this;
}

function quicksort_portion(list, start_idx, end_idx) {
    // Ensure indices are in correct order
    if (start_idx < 0 || start_idx >= end_idx) {
        return;
    }

    // Partition list and get the split index
    const split_idx = partition_and_return_split_idx(list, start_idx, end_idx);
    console.log(`> Split index-> ${split_idx} \n`)

    // Sort the two partitions
    quicksort_portion(list, start_idx, split_idx - 1); // Left side of pivot
    quicksort_portion(list, split_idx + 1, end_idx); // Right side of pivot
}

// Divides array into two partitions and returns the pivot index
function partition_and_return_split_idx(list, start_idx, end_idx) {
    const pivot = list[end_idx];

    let i = start_idx - 1;
    for (let j = start_idx; j <= end_idx; ++j) {
        if (list[j] <= pivot) {
            ++i;

            list.swap(i, j)
        }
    }

    return i;
}


function quicksort(list) {
    quicksort_portion(list, 0, list.length - 1);
}


function test() {
    const list = process.argv.slice(2);

    console.log("Input:")
    console.log(list)

    quicksort(list)

    console.log("Output:")
    console.log(list)
}

test()