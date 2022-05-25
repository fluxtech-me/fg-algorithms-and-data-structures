# Quick Selection

## Table of Contents

- [Quick Select](#quick-selection)
  - [Intro to the algorithm](#intro-to-the-algorithm)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Implementations](#implementations)


## Intro to the algorithm

Let's say we need to find the kth smallest element from a given unordered array. Some possible solutions are

- Sort the array, and choose the element at the kth index. We allow the array to be of any size with any input, so the time complexity of this solution on average is O(n log n)
- Construct a max heap, and extract k elements. Time complexity is O(n + k log n)
- Use quick select (more below)

In computer science, quickselect is a selection algorithm to find the kth smallest element in an unordered list. 
It is related to the quicksort sorting algorithm. Like quicksort, it was developed by Tony Hoare, and thus is also known as Hoare's selection algorithm. 
Like quicksort, it is efficient in practice and has good average-case performance, but has poor worst-case performance. 
Quickselect and its variants are the selection algorithms most often used in efficient real-world implementations.

## Algorithm

#### Pseudocode
```
function quickSelect(list, left, right, k)

if left = right
return list[left]

Select a pivotIndex between left and right

pivotIndex := partition(list, left, right,
pivotIndex)
if k = pivotIndex
return list[k]
else if k < pivotIndex
right := pivotIndex - 1
else
left := pivotIndex + 1
```

#### Explanation
1. Select a pivot (randomly of some other way)
2. Partition the array based on the pivot
3. If k is equal to the index of the pivot, return the element
4. If k is smaller than the index of the pivot, recursively select on the left part of the array
5. If k is larger than the index of the pivot, recursively select on the right part of the array

#### Example

![img](https://3.bp.blogspot.com/-v4qzoAkApGE/VZvd-bYPuqI/AAAAAAAAC8M/CpWPKdpV2Bs/s1600/Screenshot%2B2015-07-07%2B19.39.35.png)

![gif](https://upload.wikimedia.org/wikipedia/commons/0/04/Selecting_quickselect_frames.gif)

## Complexity
- **Best Case Complexity**  

  The element being searched is the first pivot.  
  In this case, the search ends with a single successful iteration.  
  Thus, in the best-case scenario, the quick selection algorithm performs O(n) operations.

- **Worst Case Complexity**  

  If bad pivots are consistently chosen, such as decreasing by only a single element each time,
  then worst-case performance is quadratic: O(n<sup>2</sup>).

- **Average Case Complexity**
- 
  On average, the expected complexity is O(n)

- **Space Complexity of Linear Search Algorithm**  

  The quick select algorithm takes up no extra space

## Implementations

Here are the implementations of the **quick select** algorithm:

- [JS implementation](implementations/quick_select.js)