class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function findList(first, second) {
  let ptr1 = first,
    ptr2 = second;

  if (first == null && second == null) {
    return true;
  }

  if (first == null || (first != null && second == null)) {
    return false;
  }

  while (second != null) {
    ptr2 = second;

    while (ptr1 != null) {
      if (ptr2 == null) {
        return false;
      } else if (ptr1.data == ptr2.data) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      } else break;
    }

    if (ptr1 == null) {
      return true;
    }

    ptr1 = first;
    second = second.next;
  }
  return false;
}

const printList = (node) => {
  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
};

function addNode(key) {
  let temp = new Node();
  temp.data = key;
  temp.next = null;
  return temp;
}

let a = addNode(1);
a.next = addNode(2);
a.next.next = addNode(3);
a.next.next.next = addNode(4);

let b = addNode(1);
b.next = addNode(2);
b.next.next = addNode(1);
b.next.next.next = addNode(2);
b.next.next.next.next = addNode(3);
b.next.next.next.next.next = addNode(5);

if (findList(a, b) == true) {
  console.log("LIST FOUND");
} else {
  console.log("LIST NOT FOUND");
}
