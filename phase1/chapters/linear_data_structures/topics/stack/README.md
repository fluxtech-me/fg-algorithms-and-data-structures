# Stack

![alt text](https://miro.medium.com/max/886/0*A8nFhbavWq_hyNx2)

## [Table of Contents](#table-of-contents)

- [Stack](#stack)
  - [Table of Contents](#table-of-contents)
  - [The Concept](#the-concept)
  - [Main Operations](#main-operations)
    - [Transformers](#transformers)
      - [**Push** Operation](#push-operation)
      - [**Pop** Operation](#pop-operation)
    - [Observers](#observers)
    - [**Peek** Operation](#peek-operation)
    - [**isEmpty** Operation](#isempty-operation)
    - [**isFull** Operation](#isfull-operation)
  - [Practical Applications](#practical-applications)
    - [Why do stacks exist?](#why-do-stacks-exist)
    - [**Advantages**](#advantages)
    - [**Disadvantages**](#disadvantages)
    - [**Usage Examples**](#usage-examples)
      - [**Delimiter Checking**](#delimiter-checking)
  - [**[{(a - b) * (c - d)}/f]**](#a---b--c---df)
      - [**Reverse the Data**](#reverse-the-data)
      - [**Call Stack**](#call-stack)
  - [Implementations](#implementations)

&nbsp;

## The Concept

A `stack` is an abstract data type(ADT) that holds an ordered, linear sequence of items, in which elements are added and removed from the top of the `stack`.

There are two principle operations involved with `stack`:

- the addition of elements, also known as `push`
- the removal of elements, also known as `pop`.

Each operation can only be performed at the **end** of the sequence.  
Thus, the operations are performed in a **Last In First Out (LIFO)** manner.  
The following is to illustrate the addition and insertion operation on stack.  
![alt text](https://miro.medium.com/max/810/0*SESFJYWU5a-3XM9m.gif)

## Main Operations

Each operation can only be performed at the end of the sequence, thus the operations are performed in a **Last In First Out (LIFO) manner.**

### Transformers

- Push
- Pop

#### **Push** Operation

_Complexity ~ O(1)_  
 The process of putting a new data element onto `stack` is known as a Push Operation. Push operation involves the following steps:

- **Step 1** − Checks if the stack is full.
- **Step 2** − If the stack is full, produces an error and exit.
- **Step 3** − If the stack is not full, increments top to point next empty space.
- **Step 4** − Adds data element to the stack location, where top is pointing.
- **Step 5** − Returns success.

Here's the pseudocode for `push()` method:

```
begin procedure push: stack, data
   if stack is full
      return null
   endif
   top ← top + 1
   stack[top] ← data
end procedure
```

![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_push_operation.jpg)

#### **Pop** Operation

_Complexity ~ O(1)_  
Accessing the content while removing it from the `stack`, is known as a Pop Operation.
In an array implementation of `pop()` operation, the data element **is not actually removed**, instead `top` is decremented to a lower position in the stack to point to the next value. But in linked-list implementation, `pop()` actually removes data element and deallocates memory space.

A Pop operation may involve the following steps:

- **Step 1** − Checks if the stack is empty.
- **Step 2** − If the stack is empty, produces an error and exit.
- **Step 3** − If the stack is not empty, accesses the data element at which top is pointing.
- **Step 4** − Decreases the value of top by 1.
- **Step 5** − Returns success.

Here's the pseudocode for `pop()` method:

```
begin procedure pop: stack
   if stack is empty
      return null
   endif
   data ← stack[top]
   top ← top - 1
   return data
end procedure
```

![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_pop_operation.jpg)

### Observers

- Peek
- isEmpty
- isFull

### **Peek** Operation

This operation is for getting the element at the top of the stack without removing it.

Algorithm of `peek()` function −

```
begin procedure top
  return stack[top]
end procedure

```

### **isEmpty** Operation

We initialize `top` at -1, as the index in array starts from 0. So we check if the `top` is -1 to determine if the `stack` is empty.  
Algorithm of `isEmpty()` function −

```
begin procedure isEmpty
  if top equals 1
    return true
  else
    return false
  endif
end procedure
```

### **isFull** Operation

At first, we keep some global `MAX_SIZE`. So, we check if top has reached to `MAX_SIZE` or not.  
Algorithm of `isFull()` function −

```
begin procedure isfull
  if top equals to MAXSIZE
    return true
  else
    return false
  endif
end procedure
```

## Practical Applications

### Why do stacks exist?

Stacks are extremely useful when the **order of actions** is important.  
For example, think about whenever you press `undo/redo`.  
The actions you’ve performed are pushed onto a `stack`, and when you select “undo”, the most recent action is popped off of the `stack`.

### **Advantages**

- Helps to manage data in **LIFO (Last in First Out)** order.
- Cannot be easily corrupted since no one can insert data into the middle.
- Allows you to control how memory is allocated and deallocated.

### **Disadvantages**

- Memory is very limited.
- Creating too many objects on the stack can increase the risk of stack overflow.
- Random access is not possible.
- The stack will fall outside of the memory area, which might lead to an abnormal termination.

### **Usage Examples**

#### **Delimiter Checking**

The common application of Stack is delimiter checking, i.e., parsing that involves analyzing a source program syntactically.  
It is also called parenthesis checking.  
To perform a delimiter checking, the compiler makes use of a `stack`. When a compiler translates a source program, it reads the characters one at a time, and if it finds an opening delimiter it places it on a `stack`.  
When a closing delimiter is found, it pops up the opening delimiter from the top of the Stack and matches it with the closing delimiter.  
 On matching, the following cases may arise:  
 - If the delimiters are of the same type, then the match is considered successful, and the process continues.  
 - If the delimiters are not of the same type, then the syntax error is reported.

Let's consider the following example:

## **[{(a - b) * (c - d)}/f]**

#### **Reverse the Data**

A `stack` can be used to reverse the characters of a string.  
This can be achieved by simply pushing one by one each character onto the `stack`, which later can be popped from the `stack` one by one.

Because of the **LIFO** property of the `stack`, the first character of the `stack` is on the bottom of the `stack` and the last character of the string is on the top of the `stack` and after performing the pop operation in the stack, the `stack` returns the string in reverse order.

**Converting Decimal to Binary**:  
Although decimal numbers are used in most business applications, some scientific and technical applications require numbers in either binary, octal, or hexadecimal.

A `stack` can be used to convert a number from decimal to binary/octal/hexadecimal form. For converting any decimal number to a binary number, we repeatedly divide the decimal number by two and push the remainder of each division onto the Stack until the number is reduced to 0. Then we pop the whole Stack and the result obtained is the binary equivalent of the given decimal number.  
![alt text](https://static.javatpoint.com/ds/images/applications-of-stack-in-data-structure6.png)

#### **Call Stack**

Stacks are the building blocks of function calls and recursive functions.

Yes, this is a common application that you maybe aware of, but think about it — right now there are hundreds (if not thousands) of functions existing on your call stack in memory maintained by your OS.  
Every time a function is called, some memory is reserved (**PUSH**) for it on the call stack, and when it returns, the memory is deallocated (**POP**).

Suppose we have a program containing three functions: **A, B,** and **C**. **function A** invokes **function B**, which invokes the **function C**.

![alt text](https://static.javatpoint.com/ds/images/applications-of-stack-in-data-structure7.png)

![alt text](https://static.javatpoint.com/ds/images/applications-of-stack-in-data-structure8.png)

## Implementations

- [C++ implementation](implementation/Stack.cpp)
