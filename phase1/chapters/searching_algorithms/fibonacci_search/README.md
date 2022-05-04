# Fibonacci Search

## [Table of Contents](#table-of-contents)

- [Fibonacci Search](#fibonacci-search)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
    - [The Fibonacci Sequence](#the-fibonacci-sequence)
  - [Intro to the algorithm](#intro-to-the-algorithm)
  - [Algorithm](#algorithm)
  - [Complexity](#complexity)
  - [Implementations](#implementations)

## Background

### The Fibonacci Sequence

Simply said the **Fibonacci sequence** is a set of numbers where any term $F_n$ is equal to the sum of previous two terms: $F_n = F_{n-1}+F_{n-2}$

Therefore, the Fibonacci sequence is as follows
$0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...$

## Intro to the algorithm

In computer science, the **Fibonacci Search** technique is a method of searching a sorted array using algorithm  
that narrows down possible locations with the aid of Fibonacci numbers.

## Algorithm

- **Step 1:** Find a Fibonacci number that is greater than or equal to the size of the array in which we are searching for the key.  
  Let this number be $fb(M)$ [$m^{th}$ Fibonacci number]. Let the two Fibonacci numbers preceding it, be  
  $fb(M-1)$ [$(m-1)^{th}$ Fibonacci number] and  
  $fb(M-2)$ [$(m-2)^{th}$ Fibonacci number].
- **Step 2:** While the array has elements to be checked:
  - Compare $x$ with the last element of the range covered by $fb(M-2)$
  - **If** $x$ matches, return index value
  - **Else If** x is less than the element, move the three Fibonacci variables two Fibonacci down, indicating elimination of approximately rear two-third of the remaining array.
  - **Else** x is greater than the element, move the three Fibonacci variables one Fibonacci down. Reset offset to index.  
    Together these indicate the elimination of approximately front one-third of the remaining array.
- **Step 3:** Since there might be a single element remaining for comparison, check if $fb(M-1)$ is 1.  
  If Yes, compare x with that remaining element. If matched, return index.

## Complexity

**Worst Case Complexity** - $O(logN)$

**Best Case Complexity** - $O(1)$

**Average Case Complexity** - $O(logN)$

With each step, the search space is reduced by $\frac{1}{3}$ on average, hence, the time complexity is $O(log N)$ where the base of the logarithm is 3.

![alt text](../src/fibSearch.png)
## Implementations

- [C++ Implementation](implementations/fibonacci_search.cpp)
- [JS Implementation](implementations/fibonacci_search.js)
