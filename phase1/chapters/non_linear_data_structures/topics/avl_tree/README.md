# **AVL** Tree

## [Table of Contents](#table-of-contents)

- [**AVL** Tree](#avl-tree)
  - [Table of Contents](#table-of-contents)
  - [What are **AVL** Trees?](#what-are-avl-trees)
  - [Why **AVL** Tree?](#why-avl-tree)
  - [Balance Factor in **AVL** Tree](#balance-factor-in-avl-tree)
    - [Properties of Balance Factor](#properties-of-balance-factor)
  - [AVL Rotations](#avl-rotations)
    - [**Left – Left** Rotation](#left--left-rotation)
    - [**Right – Right** Rotation](#right--right-rotation)
    - [**Left – Right** Rotation](#left--right-rotation)
    - [**Right – Left** Rotation](#right--left-rotation)
  - [Operations on **AVL** tree](#operations-on-avl-tree)
    - [Insertion in **AVL** Tree](#insertion-in-avl-tree)
    - [Deletion in **AVL** Tree](#deletion-in-avl-tree)
  - [Advantages of **AVL** Trees](#advantages-of-avl-trees)
  - [Implementations](#implementations)

&nbsp;
&nbsp;

## What are **AVL** Trees?

Let's first understand the concept behind **self-balancing binary trees**.  
In computer science, a **self-balancing binary search tree (BST)** is any node-based binary search tree  
that automatically keeps its height small in the face of arbitrary item insertions and deletions.

For the **height-balanced binary trees**, the height is defined to be logarithmic ![equation](http://latex.codecogs.com/gif.latex?O%28log%28n%29%29) in the number ![equation](http://latex.codecogs.com/gif.latex?n) of items.

With going back to our topic, an **AVL** tree (named after inventors **Adelson-Velsky** and **Landis**) is a **self-balancing binary search tree (BST)**.  
It was the first such data structure to be invented.  
In an **AVL** tree, the heights of the two child subtrees of any node differ by at most one;  
if at any time they differ by more than one, rebalancing is done to restore this property.

[Back To Top](#table-of-contents)

## Why **AVL** Tree?

To better understand the need for AVL trees, let us look at some disadvantages of simple binary search trees.

Consider the following keys inserted in the given order in the binary search tree.
![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot1.png)

The height of the tree grows linearly in size when we insert the keys in increasing order of their value.  
Thus, the search operation, at worst, takes ![equation](http://latex.codecogs.com/gif.latex?O%28n%29).

It takes linear time to search for an element; hence there is no use of using the Binary Search Tree structure.  
On the other hand, if the height of the tree is balanced, we get better searching time.

Let us now look at the same keys but inserted in a different order.

![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot2.png)

Here, the keys are the same, but since they are inserted in a different order,  
they take different positions, and the height of the tree remains balanced.  
Hence search will not take more than ![equation](http://latex.codecogs.com/gif.latex?O%28log%28n%29%29) for any element of the tree.  
It is now evident that if insertion is done correctly, the tree’s height can be kept balanced.

In AVL trees, we keep a check on the height of the tree during insertion operation.  
 Modifications are made to maintain the balanced height without violating the fundamental properties of Binary Search Tree.

[Back To Top](#table-of-contents)

## Balance Factor in **AVL** Tree

**Balance factor (BF)** of a node in an **AVL** tree is the difference between  
the height of the left subtree and that of the right subtree of that node.

The self-balancing property of an **AVL** tree is maintained by the balance factor.  
The value of balance factor should always be `-1, 0 or +1.`

[Back To Top](#table-of-contents)

### Properties of Balance Factor

![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot3.png)

- The **BF** is known as the difference between the height of the left subtree and the right subtree.
- Balance factor(node) = height(node->left) – height(node->right)
- Allowed values of BF are –1, 0, and +1.
- The value –1 indicates that the right subtree contains one extra, i.e., the tree is **right heavy**.
- The value +1 indicates that the left sub-tree contains one extra, i.e., the tree is **left heavy**.
- The value 0 shows that the tree includes equal nodes on each side, i.e., the tree is perfectly balanced.

[Back To Top](#table-of-contents)

## AVL Rotations

To make the **AVL** Tree balance itself,  
when inserting or deleting a node from the tree, rotations are performed.

We perform the following rotations on the AVL tree to make the tree balanced:

- Left ― Left Rotation
- Right ― Right Rotation
- Right ― Left Rotation
- Left ― Right Rotation

### **Left – Left** Rotation

This rotation is performed when a new node is inserted at the left child of the left subtree.

**LL rotation** is clockwise rotation, which is applied on the edge below a node having balance factor 2.
![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot4.png)

A single right rotation is performed.  
This type of rotation is identified when a node has a balanced factor as +2, and its left-child has a balance factor as +1.

### **Right – Right** Rotation

This rotation is performed when a new node is inserted at the right child of the right subtree.

**RR rotation** is an anticlockwise rotation, which is applied on the edge below a node having balance factor -2.

![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot5.png)

A single left rotation is performed.  
This type of rotation is identified when a node has a balanced factor as -2, and its right-child has a balance factor as -1.

### **Left – Right** Rotation

This rotation is performed when a new node is inserted at the left child of the right subtree.

**LR rotation = RR rotation + LL rotation**,  
i.e., first **RR rotation** is performed on subtree and then LL rotation is performed on full tree,  
by full tree we mean the first node from the path of inserted node whose balance factor is other than -1, 0, or 1.

Let us understand each and every step very clearly:

<table class="table table-bordered">
<tbody><tr>
<th style="width:30%; text-align:center;">State</th>
<th style="text-align:center;">Action</th>
</tr>   
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/right_subtree_of_left_subtree.jpg" alt="Right Rotation"></td>
<td style="vertical-align:middle;">A node <b>B</b> has been inserted into the right subtree of <b>A</b> the left subtree of <b>C</b>, because of which <b>C</b> has become an unbalanced node having balance factor 2. This case is <b>LR</b> rotation where: Inserted node is in the right subtree of left subtree of <b>C</b></td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/subtree_left_rotation.jpg" alt="Left Rotation"></td>
<td style="vertical-align:middle;">As LR rotation = RR + LL rotation, hence RR (anticlockwise) on subtree rooted at A is performed first. By doing RR rotation, node <strong>A</strong>, has become the left subtree of <strong>B</strong>.</td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/left_unbalanced_tree.jpg" alt="Left Rotation"></td>
<td style="vertical-align:middle;">After performing RR rotation, node C is still unbalanced, i.e., having balance factor 2, as inserted node A is in the left of left of <strong>C</strong>.</td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/right_rotation.jpg" alt="Right Rotation"></td>
<td style="vertical-align:middle;">Now we perform LL clockwise rotation on full tree, i.e. on node C. node <strong>C</strong> has now become the right subtree of node B, A is left subtree of B</td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/balanced_avl_tree.jpg" alt="Balanced Avl Tree"></td>
<td style="vertical-align:middle;">Balance factor of each node is now either -1, 0, or 1, i.e. BST is balanced now.</td>
</tr>
</tbody></table>

[Back To Top](#table-of-contents)

### **Right – Left** Rotation

This rotation is performed when a new node is inserted at the right child of the left subtree.

**RL rotation = LL rotation + RR rotation**,  
i.e., first **LL rotation** is performed on subtree and then **RR rotation** is performed on full tree,  
by full tree we mean the first node from the path of inserted node whose balance factor is other than -1, 0, or 1.

<table class="table table-bordered">
<tbody><tr>
<th style="text-align:center;width:30%;">State</th>
<th style="text-align:center;">Action</th>
</tr>   
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/left_subtree_of_right_subtree.jpg" alt="Left Subtree of Right Subtree"></td>
<td style="vertical-align:middle;">A node <strong>B</strong> has been inserted into the left subtree of <strong>C</strong> the right subtree of <strong>A</strong>, because of which A has become an unbalanced node having balance factor - 2. This case is RL rotation where: Inserted node is in the left subtree of right subtree of A</td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/subtree_right_rotation.jpg" alt="Subtree Right Rotation"></td>
<td style="vertical-align:middle;">As RL rotation = LL rotation + RR rotation, hence, LL (clockwise) on subtree rooted at <strong>C</strong> is performed first. By doing RR rotation, node <strong>C</strong> has become the right subtree of <strong>B</strong>.</td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/right_unbalanced_tree.jpg" alt="Right Unbalanced Tree"></td>
<td style="vertical-align:middle;">After performing LL rotation, node <strong>A</strong> is still unbalanced, i.e. having balance factor -2, which is because of the right-subtree of the right-subtree node A.</td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/left_rotation.jpg" alt="Left Rotation"></td>
<td style="vertical-align:middle;">Now we perform RR rotation (anticlockwise rotation) on full tree, i.e. on node A. node <strong>C</strong> has now become the right subtree of node B, and node A has become the left subtree of B.</td>
</tr>
<tr>
<td><img src="https://www.tutorialspoint.com//data_structures_algorithms/images/balanced_avl_tree.jpg" alt="Balanced AVL Tree"></td>
<td style="vertical-align:middle;">Balance factor of each node is now either -1, 0, or 1, i.e., BST is balanced now.</td>
</tr>
</tbody></table>

[Back To Top](#table-of-contents)

## Operations on **AVL** tree

Due to the fact that, **AVL** tree is also a binary search tree therefore,  
all the operations are performed in the same way as they are performed in a binary search tree.

Searching and traversing do not lead to the violation in property of AVL tree.  
However, insertion and deletion are the operations which can violate this property and therefore, they need to be revisited.

<table class="alt">
<tbody><tr>
<th>SN</th>
<th>Operation</th>
<th>Description</th>
</tr>
<tr>
<td>1</td>
<td><a href="#insertion-in-avl-tree">Insertion</a></td>
<td>Insertion in AVL tree is performed in the same way as it is performed in a binary search tree. However, it may lead to violation in the AVL tree property and therefore the tree may need balancing. The tree can be balanced by applying rotations.</td>
</tr>
<tr>
<td>2</td>
<td><a href="#deletion-in-avl-tree">Deletion</a></td>
<td>Deletion can also be performed in the same way as it is performed in a binary search tree. Deletion may also disturb the balance of the tree therefore, various types of rotations are used to rebalance the tree.</td>
</tr>
</tbody></table>

### Insertion in **AVL** Tree

Let's construct an AVL tree having the following elements:

`H, I, J, B, A, E`

1. ### Insert **H, I, J**
   ![alt text](https://static.javatpoint.com/ds/images/avl-tree13.png)

On inserting the above elements, especially in the case of **H**, the BST becomes unbalanced as the Balance Factor of **H** is -2.  
Since the BST is right-skewed, we will perform RR Rotation on node **H**.
**The resultant balance tree is:**
![alt text](https://static.javatpoint.com/ds/images/avl-tree14.png)

2. ### Insert **B, A**

![alt text](https://static.javatpoint.com/ds/images/avl-tree15.png)

On inserting the above elements, especially in case of **A**, the BST becomes unbalanced as the Balance Factor of **H** and **I** is 2,  
we consider the first node from the last inserted node i.e. **H**. Since the BST from **H** is left-skewed, we will perform LL Rotation on node **H**.

**The resultant balance tree is:**
![alt text](https://static.javatpoint.com/ds/images/avl-tree16.png)

3. ### Insert **E**
   ![alt text](https://static.javatpoint.com/ds/images/avl-tree17.png)

On inserting **E**, BST becomes unbalanced as the Balance Factor of **I** is 2, since if we travel from **E** to **I**  
 we find that it is inserted in the left subtree of right subtree of **I**, we will perform LR Rotation on node **I**.
LR = RR + LL rotation.

- **We first perform RR rotation on node** **B**.

  **The resultant tree after RR rotation is**:
  ![alt text](https://static.javatpoint.com/ds/images/avl-tree18.png)

- **Then, we perform LL rotation on the node I**:

  **The resultant balanced tree after LL rotation is**:
  ![alt text](https://static.javatpoint.com/ds/images/avl-tree19.png)

[Back To Top](#table-of-contents)

### Deletion in **AVL** Tree

Deletion is also very straight forward.  
We delete using the same logic as in simple binary search trees.  
After deletion, we restructure the tree, if needed, to maintain its balanced height.

Here are the steps we need to make to delete a node from the tree.

- **Step 1:** Find the element in the tree.

- **Step 2:** Delete the node, as per the BST Deletion.

- **Step 3**: Two cases are possible:-

  - **Case 1**: Deleting from the **right** subtree.

    - If BF(node) = +2 and BF(node -> left-child) = +1, perform **LL** rotation. (**1A**)
    - If BF(node) = +2 and BF(node -> left-child) = -1, perform **LR** rotation. (**1B**)
    - If BF(node) = +2 and BF(node -> left-child) = 0, perform **LL** rotation. (**1C**)

      ![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot9.png)

  &nbsp;
  &nbsp;

  - **Case 2**: Deleting from left subtree.

    - If BF(node) = -2 and BF(node -> right-child) = -1, perform **RR** rotation. (**2A**)
    - If BF(node) = -2 and BF(node -> right-child) = +1, perform **RL** rotation. (**2B**)
    - If BF(node) = -2 and BF(node -> right-child) = 0, perform RR rotation. (**2C**)

      ![alt text](https://www.guru99.com/images/2/063020_0727_AVLTreesRot10.jpg)

[Back To Top](#table-of-contents)

## Advantages of **AVL** Trees

- The height of the AVL tree is always balanced.  
  The height never grows beyond log N, where N is the total number of nodes in the tree.
- It gives better search time complexity when compared to simple Binary Search trees.
- AVL trees have self-balancing capabilities.

## Implementations

- [JS implementation](implementation/avl_tree.js)
