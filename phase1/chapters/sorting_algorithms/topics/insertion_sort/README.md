# Insertion Sort

## [Table of Contents](#table-of-contents) 
  - [The Concept](#the-concept)
  - [How **Insertion Sort** Works?](#how-insertion-sort-works)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Advantages and Disadvantages](#advantages-and-disadvantages)

## The Concept
This is an in-place comparison-based sorting algorithm.  
Here, a sub-list is maintained which is always sorted.  
For example, the lower part of an array is maintained to be sorted.  

An element which is to be 'insert'ed in this sorted sub-list,  as to find its appropriate place and then it has to be inserted there.  
Hence the name, insertion sort.

The array is searched sequentially and unsorted items are moved  
and inserted into the sorted sub-list (in the same array).  
This algorithm is not suitable for large data sets as its average and worst case complexity are of $Ο(n^2)$,
where $n$ is the number of items.

## How **Insertion Sort** Works?
Following are the steps involved in insertion sort(for sorting a given array in ascending order): 
- The first element in the array is assumed to be sorted.  
Take the second element and store it separately in `key`.  
Compare `key` with the first element.  
If the first element is greater than `key`, then `key` is placed in front of the first element.
- Now, the first two elements are sorted.  
Take the third element and compare it with the elements on the left of it.  
Placed it just behind the element smaller than it.  
If there is no element smaller than it, then place it at the beginning of the array.
- Similarly, place every unsorted element at its correct position.

## Algorithm
The simple steps of achieving the insertion sort are listed as follows -

- **Step 1:** If the element is the first element, assume that it is already sorted.
- **Step 2:**  Pick the next element, and store it separately in a `key`.
- **Step 3:** Now, compare the key with all elements in the sorted array.
- **Step 4:** If the element in the sorted array is smaller than the current element, then move to the next element.  
Else, shift greater elements in the array towards the right.
- **Step 5:** Insert the value.
- **Step 6:** Repeat until the array is sorted.

Here's the pseudocode for the implementation of insertion sort:
```
Begin function insertion_sort(array, size)
   for i := 1 to size-1 do
      key := array[i]
      j := i
      while j > 0 AND array[j-1] > key do
         array[j] := array[j-1];
         j := j – 1
      done
      array[j] := key
   done
End
```
![alt text](https://he-s3.s3.amazonaws.com/media/uploads/46bfac9.png)

## Complexity
**Time Complexity**
- **Best Case Complexity**   
It occurs when there is no sorting required, i.e. the array is already sorted.  
The best-case time complexity of insertion sort is $O(n)$.
- **Average Case Complexity** It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending.  
The average case time complexity of insertion sort is $O(n^2)$.
- **Worst Case Complexity** - It occurs when the array elements are required to be sorted in reverse order.  
That means suppose you have to sort the array elements in ascending order,  
but its elements are in descending order.  
The worst-case time complexity of insertion sort is $O(n^2)$.

**Space Complexity**
The space complexity of insertion sort is $O(1)$.  
It is because, in insertion sort, an extra variable is required for swapping.

|   |  **Complexity** |
|:-:|---|
| **Worst case time**  |  O($n^2$) |
| **Best case time**  | O($n$)  |
| **Avarage case time**  | O($n^2$)  |

## Advantages and Disadvantages
**Advantages**
- It, like other quadratic sorting algorithms, is efficient for small data sets.
- It just necessitates a constant amount of O(1) extra memory space.
- If the elements are already in sorted order it won’t spend much time in useless operations and will deliver a run time of O(n).
- It is more efficient when compared to other simple algorithms like Bubble sort and Selection Sort.
- It can turn out to be very efficient in case of nearly sorted elements.

**Disadvantages**
- One of the major disadvantages of Insertion sort is its Average Time Complexity of $O(n^2)$.
- If the number of elements is relatively large it can take large time as compared to Quick Sort or Merge Sort.

