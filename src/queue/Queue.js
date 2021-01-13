class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (!this.first) this.first = node;
    if (this.last) this.last.next = node;
    this.last = node;
  }

  dequeue() {
    if (!this.first) return null;
    const value = this.first.value;
    this.first = this.first.next;
    if (!this.first) this.last = null;
    console.log('t',value);
    return value;
  }

  show() {
    if (!this.first) return null;
    return this.first.value;
  }

  all() {
    let all = [];
    let currNode = this.first;
    while (currNode) {
      all.push(currNode.value);
      currNode = currNode.next;
    }
    return all;
  }
}

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


module.exports = Queue;
