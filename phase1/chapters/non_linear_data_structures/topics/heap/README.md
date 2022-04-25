# Heap

**NOTE:** Without breaking the generality, the topic of our interest will be only **Binary Heap**.

So when saying **Heap** here, we refer to **Binary Heap**.

## [Table of Contents](#table-of-contents)

- [Heap](#heap)
  - [Table of Contents](#table-of-contents)
  - [What are Heaps?](#what-are-heaps)
  - [Types of Heaps](#types-of-heaps)
  - [Operations on Heaps](#operations-on-heaps)
    - [**Basic**](#basic)
    - [**Creation**](#creation)
    - [**Inspection**](#inspection)
    - [**Internal**](#internal)
  - [Insertion and deletion in detail](#insertion-and-deletion-in-detail)
    - [Insertion](#insertion)
    - [Deletion](#deletion)
  - [Applications](#applications)
  - [Comparisons with other Trees](#comparisons-with-other-trees)
    - [Heap vs Binary Search Tree](#heap-vs-binary-search-tree)
    - [Heap vs Red-Black Tree](#heap-vs-red-black-tree)
    - [Conclusion](#conclusion)
  - [A Heap vs THE Heap](#a-heap-vs-the-heap)
  - [Implementations](#implementations)

## What are Heaps?

Before defining a heap, let's remember the definition of a **complete binary tree**.

In a **complete binary tree** every level, except possibly the last,  
is completely filled,
and all nodes in the last level are as far left as possible.

This is an example of a complete binary tree.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Complete_binary2.svg/440px-Complete_binary2.png)

With going back to heap's definition:  
A **heap** is a **complete binary tree** and possesses an interesting property called a **heap property**, which implies that every node in the heap is in a specific relationship with its children.

Since binary heap is a complete binary tree, the height of the tree is always ![equation](http://latex.codecogs.com/gif.latex?O%28log%20n%29).  
This is very important because most of the operations we perform in the binary heap  
scan the tree from top to bottom or bottom to top which leads to complexity of ![equation](http://latex.codecogs.com/gif.latex?O%28log%20n%29).

## Types of Heaps

There are two types of heaps depending upon how the nodes are ordered in the tree.

- **Max Heaps** ― The value in the root element is greater or equal to the elements present in its child node.
- **Min Heaps** ― The value of elements stored in the root node is lesser or equal to the value of elements stored in its child node.

![alt text](https://algorithmtutor.com/images/max-and-min-heap.png)

A binary heap can be efficiently implemented using an array.  
To implement a binary heap of height ![equation](http://latex.codecogs.com/gif.latex?h), we need ![equation](http://latex.codecogs.com/gif.latex?O%282%5Eh%29) memory blocks.  
The figure below shows the array implementation of the first tree shown in the previous figure.

![alt text](https://algorithmtutor.com/images/heap_array_implementation.png)

The parent, the left child, and the right of a node at ![equation](http://latex.codecogs.com/gif.latex?i) can be calculated as:

|  **Node**   | **Index**           |
| :---------: | ------------------- |
|   Parent    | ![equation](http://latex.codecogs.com/gif.latex?%E2%8C%8A%5Cfrac%7B%28i%E2%88%921%29%7D%7B2%7D%E2%8C%8B) |
| Left Child  | ![equation](http://latex.codecogs.com/gif.latex?2i%2B1)              |
| Right Child | ![equation](http://latex.codecogs.com/gif.latex?2i%2B2)              |

## Operations on Heaps

The common operations involving heaps are:

### **Basic**

- **_find-max_** (or **_find-min_)**: find a maximum item of a max-heap, or a minimum item of a min-heap, respectively.
- **_insert_**: adding a new key to the heap.
- **_extract-max_** (or **_extract-min_**): returns the node of maximum value from a max-heap [or minimum value from a min-heap] after removing it from the heap.
- **_delete-max_** (or **_delete-min_**): removing the root node of a max-heap (or min-heap), respectively.
- **_replace_**: pop root and push a new key. More efficient than pop followed by push,  
  since only need to balance once, not twice, and appropriate for fixed-size heaps.

### **Creation**

- **_create-heap_**: create an empty heap.
- **_heapify_**: create a heap out of given array of elements.
- **_merge (union)_**: joining two heaps to form a valid new heap containing all the elements of both, preserving the original heaps.
- **_meld_**: joining two heaps to form a valid new heap containing all the elements of both, destroying the original heaps.

### **Inspection**

- **_size_**: return the number of items in the heap.
- **_is-empty_**: return true if the heap is empty, false otherwise.

### **Internal**

- **_increase-key_** or **_decrease-key_**: updating a key within a max- or min-heap, respectively.
- **_delete_**: delete an arbitrary node (followed by moving last node and sifting to maintain heap)․
- **_sift-up_**: move a node up in the tree, as long as needed; used to restore heap condition after insertion.  
  Called "sift" because node moves up the tree until it reaches the correct level, as in a sieve.
- **_sift-down_**: move a node down in the tree, similar to sift-up; used to restore heap condition after deletion or replacement.

## Insertion and deletion in detail

The **insertion** and **deletion** operations on a binary heap are given in detail below.

We are describing the max-heap here but with a little modification this can be changed to **min-heap**.

### Insertion

The new item is initially inserted at the end of the heap (at the last position of the array).  
If it satisfies the heap property then we are done.

Otherwise, we sift it up in the tree  
as long as it violates the heap property. The algorithm for inserting is given below.

```
- Insert the new item at the end of the heap.

- Compare the newly inserted item with its parent.

  If the parent is larger, stop.
  If the parent is smaller,  swap the item with its parent.

- Repeat 2nd step until the parent is larger or equal to the item.
```

The image below shows the steps of inserting an item in an example heap.

![alt text](https://algorithmtutor.com/images/binaryheap_insert.png)

In order to insert a new item, in the worst case, we need to travel all the way to the root item.  
Therefore, the complexity of the insertion operation is ![equation](http://latex.codecogs.com/gif.latex?O%28log%20n%29).

### Deletion

In a max-heap, the first item is always the maximum.  
So to delete the maximum, we delete the first item. After the deletion of the first time,  
we replace the vacant first position by the last time in the array.

We might need to shift this item down in order to keep the heap property intact.  
The algorithm is given below.

```
- Store the first time in the tree in some temporary variable.

- Replace the first node with the item in the last node.

- Check the first node with its children nodes.
  If the left child is larger, we swap it with the left child.
  If the right node is larger, we swap it with the right node.

- Repeat 3rd step until the parent node is larger
  than the left and right child node.

- Return the maximum value (stored in the temporary variable).
```

The image below shows the steps of deleting the maximum item in an example heap.

![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_deletion_animation.gif)

## Applications

- [Heap Sort](https://www.geeksforgeeks.org/heap-sort/)  
  Heap Sort uses Binary Heap to sort an array in ![equation](http://latex.codecogs.com/gif.latex?O%28nlogn%29) time.

* [Priority Queue](../../../linear_data_structures/topics/queue/README.md#priority-queue)  
  Priority queues can be efficiently implemented using Heap because it supports `insert()`, `delete()` and `extract_max()`, `decrease_key()` operations in ![equation](http://latex.codecogs.com/gif.latex?O%28logn%29) time.

- [Dijkstra’s Shortest Path](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)  
  Min-Heap to store the vertices not yet included in **Shortest Path Tree** (the unsettled set, or the vertices for which the shortest distance is not finalized yet).  
  Min-Heap is used as a **priority queue** to get the minimum distance vertex from set of not yet included vertices.  
  Time complexity of operations like `extract-min` and `decrease-key` value is ![equation](http://latex.codecogs.com/gif.latex?O%28logn%29) for Min-Heap.

  Let's understand the main idea using the image below:
  ![alt text](https://www.freecodecamp.org/news/content/images/2020/06/image-126.png)

- [Prim’s Minimum Spanning Tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree)

  ![alt text](https://miro.medium.com/max/962/1*RC0NtEiAvMigfjDHSZBa3g.png)

- [​k largest elements in an array](https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/)
- [Sort an almost sorted array](https://www.geeksforgeeks.org/nearly-sorted-algorithm/)  
  Given an array of ![equation](http://latex.codecogs.com/gif.latex?n) elements, where each element is at most ![equation](http://latex.codecogs.com/gif.latex?k) away from its target position.  
  Devise an algorithm that sorts in ![equation](http://latex.codecogs.com/gif.latex?O%28n%20log%20k%29) time.

- [Merge K Sorted Arrays](https://www.geeksforgeeks.org/merge-k-sorted-arrays/)  
  Given ![equation](http://latex.codecogs.com/gif.latex?k) sorted arrays of size ![equation](http://latex.codecogs.com/gif.latex?n) each, our problem is to merge them in ![equation](http://latex.codecogs.com/gif.latex?O%28%20nklog%20k%29) time.

## Comparisons with other Trees

### Heap vs Binary Search Tree

By comparison, if a binary tree is sorted, items to the left of a particular node are smaller,  
items to the right are larger, then we call it Binary Search Tree.  
Heap does not guarantee the order while Binary Search Tree does.  
A Balanced Binary Search Tree guarantees height of ![equation](http://latex.codecogs.com/gif.latex?O%28log%20n%29) for ![equation](http://latex.codecogs.com/gif.latex?n) items.

### Heap vs Red-Black Tree

Red-Black tree is a self-balancing binary search tree done by coloring each node in the tree  
with either red or black and preserving a set of properties that guarantee that the deepest path in the tree  
is not longer than twice the shortest one, while Heap is a complete tree that guarantees the tree is balanced.

Heap just guarantees that elements on higher levels are greater (for max-heap) or smaller (for min-heap) than elements on lower levels, whereas BST guarantees order (from "left" to "right"). If you want sorted elements, go with BST.

### Conclusion

Heap is better at find_min/find_max (![equation](http://latex.codecogs.com/gif.latex?O%281%29)), while BST is good at all finds (![equation](http://latex.codecogs.com/gif.latex?O%28logN%29)).  
Insert is ![equation](http://latex.codecogs.com/gif.latex?O%28logN%29) for both structures.  
If you only care about find_min/find_max (e.g. priority-related),  
go with heap.  
If you want everything sorted, go with BST.


## A Heap vs THE Heap

There is no relation between **Heap data structure** and **Heap memory**.

In the second case (chunks of RAM), the name of heap is maybe a bit more evident.  
"Heap" is just "a large collection of things in a highly arbitrary order" here,  
which would seem to apply just as well in common usage as it does to dynamically allocated chunks of memory.

![alt text](istockphoto-1285657653-170667a.jpg)

In the first case (tree data structure meaning), the description heap is most appropriate because "greater" objects are placed higher up in the tree.  
Whoever first applied the name heap to this data-structure thought it was an appropriate name in his mind, and it's just stuck.

There's also another opinion which implies that  
the tree-based data structure may have taken its name from the heap of abstract algebra, as is reasonably common within computer science.

## Implementations

[Min Heap C++ implementation](implementations/MinHeap.h)