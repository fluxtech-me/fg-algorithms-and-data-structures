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
    quicksort_portion(list, start_idx, split_idx); // Left side of pivot     // Note: the pivot is now included
    quicksort_portion(list, split_idx + 1, end_idx); // Right side of pivot
}

// Divides array into two partitions and returns the pivot index
function partition_and_return_split_idx(list, start_idx, end_idx) {
    const pivot = list[parseInt((start_idx + end_idx) / 2)];

    // left index
    let i = start_idx - 1

    // right index
    let j = end_idx + 1

    while (true) {
        // Find leftmost element greater than or equal to pivot
        do {
            ++i;
        } while (list[i] < pivot);

        // Find rightmost element smaller than or equal to pivot
        do {
            --j;
        } while (list[j] > pivot);

        // If two pointers met.
        if (i >= j) {
            return j;
        }

        list.swap(i, j)
    }
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