# Cheat Sheet on non-linear data structures

## [Table of Contents](#table-of-contents)

- [Cheat Sheet on non-linear data structures](#cheat-sheet-on-non-linear-data-structures)
  - [Table of Contents](#table-of-contents)
  - [Binary Tree](#binary-tree)
    - [Complete Binary Tree](#complete-binary-tree)
    - [Binary Search Tree](#binary-search-tree)
    - [Traversals](#traversals)
  - [AVL Trees](#avl-trees)
    - [Balance Factor in AVL Trees](#balance-factor-in-avl-trees)
    - [AVL Rotations](#avl-rotations)
  - [Red-Black Trees](#red-black-trees)

## Binary Tree

- A tree whose elements have at most 2 children is called a
  binary tree.
- Since each element in a binary tree can have only 2 children, we typically name them the left and right children.

### Complete Binary Tree

In a complete binary tree every level, except possibly the last, is completely filled,  
and all nodes in the last level are as far left as possible.

### Binary Search Tree

Binary Search Tree is a binary tree which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

### Traversals

A Tree is typically traversed in two ways:

- Breadth First Traversal (or Level Order Traversal)
- Depth First Traversals
  - Inorder Traversal (Left-Root-Right)
  - Preorder Traversal (Root-Left-Right)
  - Postorder Traversal (Left-Right-Root)

## AVL Trees

An AVL tree (named after inventors Adelson-Velsky and Landis) is a self-balancing binary search tree (BST).

In an AVL tree, the heights of the two child subtrees of any node differ by at most one;  
if at any time they differ by more than one, rebalancing is done to restore this property.

### Balance Factor in AVL Trees

**Balance factor (BF)** of a node in an AVL tree is the difference between
the height of the **left** subtree and that of the **right** subtree of that node.

The self-balancing property of an **AVL** tree is maintained by the balance factor.
The value of balance factor should always be `-1, 0 or +1.`

### AVL Rotations

To make the **AVL** Tree balance itself,  
when inserting or deleting a node from the tree, rotations are performed.

We perform the following rotations on the AVL tree to make the tree balanced:

- Left ― Left Rotation
- Right ― Right Rotation
- Right ― Left Rotation
- Left ― Right Rotation

---

**Left ― Left Rotation** is performed when a new node is inserted at the left child of the left subtree.

**LL rotation** is clockwise rotation, which is applied on the edge below a node having balance factor 2.
![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot4.png)

---

**Right ― Right Rotation** is performed when a new node is inserted at the right child of the right subtree.

**RR rotation** is an anticlockwise rotation, which is applied on the edge below a node having balance factor -2.

![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot5.png)

---

**Left ― Right Rotation** is performed when a new node is inserted at the left child of the right subtree.

**LR rotation = RR rotation + LL rotation**,  
i.e., first **RR rotation** is performed on subtree and then LL rotation is performed on full tree.

![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot7.png)

---

**Right ― Left Rotation** is performed when a new node is inserted at the right child of the left subtree.

**RL rotation = LL rotation + RR rotation**,  
i.e., first **LL rotation** is performed on subtree and then **RR rotation** is performed on full tree.

![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot6.png)

## Red-Black Trees

In addition to the requirements imposed on a binary search tree the following must be satisfied by a red–black tree:

* Each node is either red or black.
* All NIL nodes are considered black.
* A red node does not have a red child.
* Every path from a given node to any of its descendant NIL nodes goes through the same number of black nodes.