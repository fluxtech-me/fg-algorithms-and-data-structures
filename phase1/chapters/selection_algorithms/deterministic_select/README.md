# Deterministic Selection

## Table of Contents

- [Deterministic Select](#deterministic-selection)
    - [Intro to the algorithm](#intro-to-the-algorithm)
    - [Algorithm](#algorithm)
    - [Complexity](#complexity)
    - [Implementations](#implementations)


## Intro to the algorithm

As we know, randomized quick select has a worst case performance of O(n<sup>2</sup>). Deterministic selection aims to solve this issue, by providing a way to choose the right pivot.
The pivot selection is called the "median of medians" algorithm, which gives a pivot that guarantees that at least 30% of the elements will always be to the left of the pivot, and at least 30% will be to the right.

## Algorithm

The algorithm is as follows,

- Divide the list into sublists if size n, assume 5.
- Initialize an empty array M to store medians we obtain from smaller sublists.
- Loop through the whole list in sizes of 5, assuming our list is divisible by 5.
- For n/5 sublists, find the median m, which is in the 3rd rank out of 5 elements.
- Append medians obtained from the sublists to the array M.
- Recursively use quickSelect to find the true median from array M, The median obtained is the viable pivot.
- Terminate the algorithm once the base case is hit, that is, when the sublist becomes small enough.

![img](https://miro.medium.com/max/705/1*UuA-V2XSErqLrG4RmCBBoQ.jpeg)

## Complexity
- **Worst Case Complexity** 

  The worst case and best case complexity of the algorithm is O(n). It can be proved by solving the following recurrence using induction

  T(n) <= 12n/5 + T(n/5) + T(7n/10)


- **Space Complexity**

  The deterministic selection algorithm requires O(log n) additional space to store the medians 

## Implementations

Here are the implementations of the **deterministic selection** algorithm:

- [JS implementation](implementations/deterministic_select.js)