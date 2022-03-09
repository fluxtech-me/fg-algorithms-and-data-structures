# Radix Sort 

## [Table of Contents](#table-of-contents) 
  - [The Concept](#the-concept)
  - [How **Radix Sort** Works?](#how-radix-sort-works)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Advantages and Disadvantages](#advantages-and-disadvantages)

## The Concept
Radix Sort is a **non-comparative** sorting algorithm that sorts elements digit by digit starting from the least significant digit to the most significant digit.  

**Radix Sort** dates back as far as **1887** to the work of Herman Hollerith on tabulating machines.  
Radix sorting algorithms came into common use as a way to sort [punched cards](https://en.wikipedia.org/wiki/Punched_card) as early as 1923.
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Used_Punchcard_%285151286161%29.jpg/1920px-Used_Punchcard_%285151286161%29.jpg)

**Radix Sort** can be implemented to start at either the most significant digit (**MSD-Radix Sort**) or least significant digit (**LSD-Radix Sort**).  
For example, with 1234, one could start with 1 (MSD) or 4 (LSD).


## How Radix Sort Works?

1. Find the largest element from the array i.e `max` and let `d` be the number of digits in the `max`,  
because we have to cycle through each significant places of the largest number.
2. Go through each significant place one by one and use any stable sorting technique to sort the digits at each significant place.
3. Sort the elements based on the unit place digits, then tens place, hundreds, etc...

Let the initial array be` {101, 45, 543, 233, 212, 654, 833}`.   
![alt text](https://quescol.com/wp-content/uploads/2021/02/radix-sort-list.png)

With the help of **Counting Sort**, we will sort the unit digit of the input array i.e. least significant digit.

![alt text](https://quescol.com/wp-content/uploads/2021/02/radix-sort-paas-1-1-171x300.png)

So after first pass array will become
![alt text](https://quescol.com/wp-content/uploads/2021/02/radix-sort-algorithm.png)

Now we will sort the tenth digit place of the input array.
![alt text](https://quescol.com/wp-content/uploads/2021/02/radix-sort-paas-2-1-171x300.png)

So after the second pass array will look like
![alt text](https://quescol.com/wp-content/uploads/2021/02/radix-sort-example.png)

Now we will sort the 100th digit place of the input array i.e. most significant place

![alt text](https://quescol.com/wp-content/uploads/2021/02/radix-sort-paas-3-1-171x300.png)

After the third pass array will be sorted
![alt text](https://quescol.com/wp-content/uploads/2021/02/how-does-radix-sort-work.png)

## Algorithm

Here's the algorithm and pseudocode for implementing **Radix Sort**.

**Step 1**: Find the maximum number in `ARR` as `Max`.  
**Step 2**: Calculate the Number of digits in `Max` and SET `NOS` = number of digit.  
**Step 3**: Repeat Step 4 to 8 for `PASS = 1`; `PASS <= NOS`.  
**Step 4**: Repeat Step 5 to 7 for `I=0` to `I < Size` of `ARR`.  
**Step 5**: SET `DIGIT = Arr[I]`.    
**Step 6**: Insert element `Arr[I]` to the bucket at index `DIGIT`.  
**Step 7**: Do Increment in bucket count for index `DIGIT`.  
[END OF FOR Loop]  
**Step 8**: Pick elements from the bucket starting from index `0` and put in `ARR`
[END OF For LOOP]  
**Step 9**: END

```
radixSort(array)
  d <- maximum number of digits in the largest element
  create d buckets of size 0-9
  for i <- 0 to d
    sort the elements according to ith place digits   
    using countingSort
```

## Complexity

**Time Complexity**  
There are `d` passes i.e counting sort is called `d` times.  
Let's define `r` to be the range of numbers to be sorted and `n` is the number of elements in the array.   
Now, let's see the time complexity of Radix sort in **best** case, **average** case, and **worst** case.
* **Best Case Complexity** - It occurs when there is no sorting required, i.e. the array is already sorted.   
* **Average Case Complexity** - It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending.  
The average case time complexity of Radix sort is $O(d(n + r))$.
* **Worst Case Complexity** - It occurs when the array elements are required to be sorted in reverse order.  
That means suppose you have to sort the array elements in ascending order, but its elements are in descending order.  
The worst-case time complexity of Radix sort is $O(d(n + r))$.


|  **Case** |  **Complexity** |
|:-:|---|
| **Worst case time**  |  $O(d(n + r))$ |
| **Best case time**  | $O(n + r)$  |
| **Average case time**  | $O(d(n + r))$  |

## Advantages and Disadvantages

**Advantages**
* Fast when the keys are short, i.e. when the array element range is small.
* Radix Sort is a stable sort because it maintains the relative order of elements with equal values.

**Disadvantages**  
* Radix sort is less flexible than other sorts as it depends on the digits or letter.   
Radix sort needs to be rewritten if the type of data is changed. 
Hence, for every different type of data it needs to be rewritten.
* It takes more space compared to **QuickSort** which is inplace sorting.
