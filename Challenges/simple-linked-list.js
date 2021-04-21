class Element {
  constructor(data, next = null) {
    this._data = data;
    this._next = next;
  }

  datum() {
    return this._data;
  }

  isTail() {
    return !this.next();
  }

  next() {
    return this._next;
  }
}

class SimpleLinkedList {
  constructor() {
    this._head = null;
  }

  size() {
    let elem = this.head();
    let size = 0;
    while (elem) {
      size++;
      elem = elem.next();
    }
    return size;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(data) {
    this._head = new Element(data, this._head);
  }

  peek() {
    return this.head()?.datum() || null;
  }

  head() {
    return this._head;
  }

  pop() {
    let data = this.head().datum();
    this._head = this.head().next();
    return data;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (array) {
      [...array].reverse().forEach(data => list.push(data));
    }
    return list;
  }

  toArray() {
    let result = [];
    let elem = this.head();
    while (elem) {
      result.push(elem.datum());
      elem = elem.next();
    }
    return result;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

}

module.exports = { SimpleLinkedList, Element };