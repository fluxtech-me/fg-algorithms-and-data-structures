# Introduction to Searching Algorithms

In computer science, a **search algorithm** is an algorithm which solves a search problem.

Search algorithms work to retrieve information stored within some data structure.

The appropriate search algorithm often depends on the data structure being searched, and may also include prior knowledge about the data.

Search algorithms can be classified based on their mechanism of searching into **three types of algorithms**:

- **Linear**  
  Linear search algorithms check every record for the one associated with a target key in a linear fashion.
- **Binary**  
  Binary, or half-interval, searches repeatedly target the center of the search structure and divide the search space in half.  
  Comparison search algorithms improve on linear searching by successively eliminating records based on comparisons of the keys  
  until the target record is found, and can be applied on data structures with a defined order.
- **Hashing**  
  Hashing search algorithms directly map keys to records based on a hash function.

Algorithms are often evaluated by their computational complexity, or maximum theoretical run time.  
Binary search functions, for example, have a maximum complexity of $O(log n)$, or logarithmic time.  
This means that the maximum number of operations needed to find the search target  
is a logarithmic function of the size of the search space.

Search algorithms can be made faster or more efficient by specially constructed database structures, such as search trees, hash maps, and database indexes.

There are also search methods designed for quantum computers, like [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm),  
that are theoretically faster than linear or brute-force search even without the help of data structures or heuristics.

While the ideas and applications behind quantum computers are still entirely theoretical, studies have been conducted with algorithms like Grover's that accurately replicate the hypothetical physical versions of quantum computing systems
