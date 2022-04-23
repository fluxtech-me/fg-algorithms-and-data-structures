# Linear Search

## [Table of Contents](#table-of-contents)

- [Linear Search](#linear-search)
  - [Table of Contents](#table-of-contents)
  - [Definition](#definition)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Applications](#applications)
  - [Implementations](#implementations)

## Definition

The **linear search** is the simplest approach employed to search for an element in a data set.  
It examines each element until it finds a match, starting at the beginning of the data set, until the end.

The search is finished and terminated once the target element is located.  
If it finds no match, the algorithm must terminate its execution and return an appropriate result.  
The linear search algorithm **is easy to implement and efficient** in two scenarios:

- When the list contains lesser elements.
- When searching for a single element in an unordered array.

## Algorithm

Following are the steps of implementation for **linear search**:

- Traverse the array using a `for` loop.
- In every iteration, compare the target value with the current value of the array.
  - If the values match, return the current index of the array.
  - If the values do not match, move on to the next array element.
- If no match is found, return `-1`.

![alt text](../src/linear_search.gif)

## Complexity

- **Best Case Complexity**  
  The element being searched could be found in the first position.  
  In this case, the search ends with a single successful comparison.  
  Thus, in the best-case scenario, the linear search algorithm performs $O(1)$ operations.

- **Worst Case Complexity**  
  The element being searched may be at the last position in the array or not at all.  
  In the first case, the search succeeds in $n$ comparisons.  
  In the next case, the search fails after $n$ comparisons.  
  Thus, in the worst-case scenario, the linear search algorithm performs $O(n)$ operations.

- **Average Case Complexity**
  When the element to be searched is in the middle of the array,  
  the average case of the Linear Search Algorithm is $O(n)$.

- **Space Complexity of Linear Search Algorithm**  
  The linear search algorithm takes up no extra space;  
  hence its space complexity is $O(n)$ for an array of n elements.

## Applications

The linear search algorithm has the following applications:

- Linear Search can be applied to both single-dimensional and multidimensional arrays.
- Linear Search is easy to implement and effective when the array contains only a few elements.
- Linear Search is also efficient when the search is performed to fetch a single search in an unordered-list.

## Implementations

Here are the implementations of the **linear search** algorithm:

- [C++ implementation](implementations/linear_search.cpp)
- [JS implementation](implementations/linear_search.js)
