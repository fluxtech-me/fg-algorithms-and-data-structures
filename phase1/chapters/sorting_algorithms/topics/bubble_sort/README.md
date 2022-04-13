# Bubble Sort

## [Table of Contents](#table-of-contents)

- [Bubble Sort](#bubble-sort)
  - [Table of Contents](#table-of-contents)
  - [The Concept](#the-concept)
  - [How **Bubble Sort** Works?](#how-bubble-sort-works)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Advantages and Disadvantages](#advantages-and-disadvantages)
  - [Implementations](#implementations)

## The Concept

**Bubble sort** is a simple sorting algorithm.  
This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared  
and the elements are swapped if they are not in order.  
This algorithm is not suitable for large data sets as its average and worst case complexity are of ![equation](http://latex.codecogs.com/gif.latex?%CE%9F%28n%5E2%29) where ![equation](http://latex.codecogs.com/gif.latex?n) is the number of items.

## How **Bubble Sort** Works?

Following are the steps involved in bubble sort(for sorting a given array in ascending order):

- Look at the first number in the list.
- Compare the current number with the next number.
- Is the next number smaller than the current number?  
  If so, swap the two numbers around. If not, do not swap.
- Move to the next number along in the list and make this the current number.
- Repeat from step 2 until the last number in the list has been reached.
- If any numbers were swapped, repeat again from step 1.
- If the end of the list is reached without any swaps being made, then the list is ordered and the algorithm can stop.

## Algorithm

Here's the algorithm and pseudocode for implementing bubble sort.

- **Step 1:** Starting from the first index, compare the first and the second elements.
- **Step 2:** If the first element is greater than the second element, they are swapped.
- **Step 3:** Now, compare the second and the third elements.  
  Swap them if they are not in order.
- The above process goes on until the last element.

```
begin function bubble_sort(arr, size)
	for i=0 to n-1
		for j=0 to n-i-1
			if arr[j]>arr[j+1]
				Swap arr[j] and arr[j+1]
            endif
        end for
    end for
end function
```

![alt text](https://he-s3.s3.amazonaws.com/media/uploads/2682167.png)

## Complexity

In the case of the standard version of the bubble sort, we need to do ![equation](http://latex.codecogs.com/gif.latex?N) iterations. In each iteration, we do the comparison and we perform swapping if required. Given an array of size N, the first iteration performs ![equation](http://latex.codecogs.com/gif.latex?%28N%20-%201)) comparisons. The second iteration performs ![equation](http://latex.codecogs.com/gif.latex?%28N%20-%202%29) comparisons and so on.

**Time Complexities**

- **Worst Case Complexity:** ![equation](http://latex.codecogs.com/gif.latex?O%28n%5E2%29)  
  If we want to sort in ascending order and the array is in descending order then the worst case occurs.
- **Best Case Complexity:** ![equation](http://latex.codecogs.com/gif.latex?O%28n%29)  
  If the array is already sorted, then there is no need for sorting.
- **Average Case Complexity:** ![equation](http://latex.codecogs.com/gif.latex?O%28n%5E2%29)
  It occurs when the elements of the array are in jumbled order (neither ascending nor descending).

**Space Complexity**

- Space complexity is ![equation](http://latex.codecogs.com/gif.latex?O%281%29) because an extra variable is used for swapping.

|                           | **Complexity** |
| :-----------------------: | -------------- |
|  **Best Case Scenario**   | ![equation](http://latex.codecogs.com/gif.latex?O%28n%29)         |
| **Avarage Case Scneario** | ![equation](http://latex.codecogs.com/gif.latex?O%28n%5E2%29)       |
|  **Worst Case Scenario**  | ![equation](http://latex.codecogs.com/gif.latex?O%28n%5E2%29)       |

## Advantages and Disadvantages

**Advantages**

- Easy to understand.
- Easy to implement.
- In-place, no external memory is needed.
- Performs greatly when the array is almost sorted.

**Disadvantages**

- Very expensive, ![equation](http://latex.codecogs.com/gif.latex?O%28n%5E2%29) in worst case and average case.
- Not suitable for array that contains huge amount of data.

## Implementations

- [C++ implementation](implementation/sort.cpp)
- [JS implementation](implementation/sort.js)
