# Counting Sort

[Table of Contents](#table-of-contents)
  - [The Concept](#the-concept)
  - [How **Counting Sort** Works?](#how-counting-sort-works)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Advantages and Disadvantages](#advantages-and-disadvantages)
  - [Comparison With Other Sorting Algorithms](#comparison-with-other-sorting-algorithms)
  

## The Concept
Counting Sort Algorithm is a **stable**, **non-comparison based** sorting algorithm.  
It's an efficient sorting algorithm that can be used for sorting elements within a specific range.  
This sorting technique is based on the frequency/count of each element to be sorted.  

## How **Counting Sort** Works?
Counting sort works fundamentally by counting how many times integer elements occur in an unsorted set to determine how the set should be ordered.  
In the implementation presented here, data initially contains the unsorted set of integer elements stored in a single block of contiguous storage.  
Additional storage is allocated to store the sorted data temporarily.  
Before algorithm returns, the sorted set is copied back into data.

## Algorithm

- **Input** Unsorted array `A[]` of `n` elements.
- **Output** Sorted array `B[]`  
![alt text](https://www.oreilly.com/library/view/algorithms-in-a/9780596516246/httpatomoreillycomsourceoreillyimages595756.png)
Consider an input array `A` having `n` elements in the range of `[0, k]`, where `n` and `k` are positive integer numbers.  
These `n` elements have to be sorted in ascending order using the **counting sort** technique.  
Also note that `A[]` can have distinct or duplicate elements.

The following steps should be taken to implement **Counting sort** algorithm.
- **Step 1:** The count/frequency of each distinct element in `A` is computed and stored in another array, say `count`, of size `k+1`. Let `u` be an element in `A` such that its frequency is stored at `count[u]`.
- **Step 2:** Update the `count` array so that element at each index, say `i`, is equal to the sum of all elements from start to `i`.
- **Step 3:** The updated `count` array gives the index of each element of array `A` in the sorted sequence.  
Assume that the sorted sequence is stored in an output array, say `B`, of size `n`.
- **Step 4:** Add each element from input array A to B as follows:  
  - Set `i = count[u]` and `t = A[i]`
  - Add `t` to `B[v]` such that `v = (count[t] - 1)`.
  - Decrement `count[t]` by `1`
  - Increment i by `1`
  - Repeat steps **(a)** to **(d)** till `i = n - 1`
- **Step 5:** Return `B` since this is the sorted array.

## Complexity  
Let's define `r` to be the range of numbers to be sorted and `n` is the number of elements in the array. 

**Time Complexity**
- **Best Case:** When all elements are same.
- **Worst Case:** When data is skewed and range is large.
- **Average case:** When `n` and `r` are equally dominant. 
  
|   |  **Complexity** |
|:-:|---|
| **Worst case time**  |  $O(n + r)$ |
| **Best case time**  | ―  |
| **Average case time**  | $O(n+r)$  |

**Space Complexity** ― $O(r)$

## Advantages and Disadvantages
**Advantages**
- **Linear Time Complexity**.  
Since it is not a comparison-based sorting, it is not lower bounded by $O(nlogn)$ complexity.
- Reduced space complexity if the range of elements is narrow, that is, more frequency of close integers.
- Counting Sort is a stable sorting algorithm as relative order of elements with equal values is maintained.
- Since counting sort is suitable for sorting numbers that belong to a well-defined,  
finite and small range, it can be used asa subprogram in other sorting algorithms like radix sort   
which can be used for sorting numbers having a large range.

**Disadvantages**
- Both time and space complexities skyrocket if the range of input numbers is large.
- It works only for discrete values like integers.
- It is not an **in-place** sorting algorithm as it requires extra additional space $O(k)$.

## Comparison With Other Sorting Algorithms
- While any comparison based sorting algorithm requires $O(n (log n))$ complexity,  
counting sort has a running time of $O(n)$,  
when the length of the input list is not much smaller than the range `r` of numbers, in the input array.

- Counting sort is very efficient in the cases where range is comparable to number of input elements  
as it performs sorting in linear time and can be an advantage in such cases over other sorting algorithms such as quick sort.  
When in the worst case quick sort takes $O(n^2)$ time, counting sort only takes $O(n)$ time provided that the range of elements is not very large.

- Most sorting algorithms perform in quadratic time $O(n^2)$, and the two exceptions — **heap** and **merge** sort in time $O(nlog n)$.  
Counting sort is the only sorting algorithm which performs in linear time (for small range of elements).

- There is no comparison between any elements,  
so it is better than comparison based sorting techniques.