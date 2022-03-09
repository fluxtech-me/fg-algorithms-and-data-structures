# Selection Sort

## [Table of Contents](#table-of-contents) 
  - [The Concept](#the-concept)
  - [How **Selection Sort** Works?](#how-selection-sort-works)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Advantages and Disadvantages](#advantages-and-disadvantagescomparison-of-algorithms)
  


## The Concept
Selection sort is a simple sorting algorithm.  
This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts,  
the sorted part at the left end and the unsorted part at the right end.  
Initially, the sorted part is empty and the unsorted part is the entire list.

The smallest element is selected from the unsorted array and swapped with the leftmost element,  
and that element becomes a part of the sorted array.  
This process continues moving unsorted array boundary by one element to the right.

This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο($n^{2}$), where `n` is the number of items.

## How **Selection Sort** Works?
Following are the steps involved in selection sort(for sorting a given array in ascending order):
- Starting from the first element, we search the smallest element in the array, and replace it with the element in the first position.
- We then move on to the second position, and look for smallest element present in the subarray, starting from index 1, till the last index.
- We replace the element at the second position in the original array, or we can say at the first position in the subarray, with the second smallest element.
- This is repeated, until the array is completely sorted.

## Algorithm
Here's the algorithm and pseudocode for implementing selection sort.  

- **Step1:** Set MIN to location 0.
- **Step2:** Search the minimum element in the list.
- **Step 3:** Swap with value at location MIN.
- **Step 4:** Increment MIN to point to next element.
- **Step 5:** Repeat until list is sorted.
```
begin function selection sort 
   list  : array of items
   n     : size of list
   for i = 1 to n - 1
    //set current element as minimum
      min = i    
      // check the element to be minimum
      for j = i+1 to n 
         if list[j] < list[min] then
            min = j;
         end if
      end for
      //swap the minimum element with the current element
      if indexMin != i  then
         swap list[min] and list[i]
      end if
   end for	
end function
```
![alt text](https://he-s3.s3.amazonaws.com/media/uploads/2888f5b.png)

## Complexity
The main time cost comes from scanning through the array to find the next smallest item.  
We do that $n$ times. The first time, we'll be looking at $n$ elements,  
the next time it'll be $n - 1$ elements, and so on, until we're left with just one element.  
Adding all those up, we've got: $n+(n−1)+(n−2)+…+2+1$  
which is $O(n^2)$.  
Selection sort doesn't rely on any extra arrays, so it's $O(1)$ space.

|   |  **Complexity** |
|:-:|---|
| **Worst case time**  |  O($n^2$) |
| **Best case time**  | O($n^2$)  |
| **Avarage case time**  | O($n^2$)  |
| **Space**  | O(1)  |

## Advantages and Disadvantages
**Advantages**
- **Intuitive**: Ever packed a suitcase, putting in large items before smaller ones? That's selection sort!
- **Space efficient**. Selection sort only requires a constant amount of additional space O(1).  
Because it is an in-place sorting algorithm,  
no additional temporary storage is required beyond what is needed to hold the original list.
- The main advantage of the selection sort is that it performs well on a small list.  

**Disadvantages**
- **Slow**. Selection sort takes O($n^2$) time, even if the input is already sorted.  
That's too slow to be used on super-big data sets.


