class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(start) {
    this.start = new Node(start);
  }

  add(index, value) {
    let node = this.getNode(index);
    let nextNode = node.next;
    node.next = new Node(value);
    node.next.next = nextNode;
  }

  getNode(index) {
    let node = this.start;
    while (index - 1 > 0) {
      node = node.next;
      index--;
    }
    return node;
  }

  get(index) {
    let node = this.getNode(index);
    if (!node) throw `Value at index ${index} doesn't exist`;
    return node.value;
  }

  addBeginning(value) {
    let node = this.start;
    this.start = new Node(value);
    this.start.next = node;
  }

  removeBeginning() {
    if (!this.start.next) return false;
    this.start = this.start.next;
    return true;
  }

  getLastNode() {
    let node = this.start;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  append(value) {
    let node = this.getLastNode(3);
    node.next = new Node(value);
  }

  removeAt(index) {
    if (index == 0) this.removeBeginning();
    let node = this.getNode(index - 1);
    if (!node.next) throw `Node at position ${index} doesn't exist`;
    node.next = node.next.next;
  }

  pop() {
    let node = this.start;
    if (!node.next) {
      this.start = null;
    } else {
      while (node.next.next) {
        node = node.next;
      }
      node.next = null;
    }
  }
  get length() {
    let node = this.start;
    let length = 1;
    while (node.next) {
      node = node.next;
      length++;
    }
    return length;
  }
}

let list = new LinkedList(3);
console.log(list);
list.removeBeginning();
//Further operations
list.append(5);
list.append(10);
list.append(15);
list.add(1, 300);
list.add(2, 500);
list.addBeginning(17);
list.removeAt(1);
list.pop();
console.log(list.length);
// let value = list.get(2);
// console.log(value);
